import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Section } from "../../components/shared/section";
import { Container } from "../../components/shared/container";
import { AllLocations } from "../../components/all-locations";
import { States } from "../../components/all-locations/states";
import { AllLocationsFilters } from "../../components/all-locations/location-card-filter";
import { client } from "../../../lib/contentful";
import { useLocation } from "@reach/router";
import AllPagesReviews from "../../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../../components/common/reviewCards/InstagramReviews";
import { Layout } from "../../components/layout";
import moment from "moment";

const AllLocationsPagePath: React.FC<PageProps> = () => {
  const [reviews, setReviews] = React.useState<any>([]);
  const locationParam = useLocation();
  const filterValue =
    new URLSearchParams(locationParam.search).get("filter") ?? "";

  const [allLocations, setAllLocations] = React.useState<any>([]);
  const [activeServices, setActiveServices] = React.useState<any>([]);
  const [locationsResult, setLocationsResult] = React.useState<any>([]);

  const queryObjectLabel: any = {
    dogboarding: "Dog Boarding",
    dogdaycare: "Dog Daycare",
    catboarding: "Cat Boarding",
    transport: "Transport",
  };
  const queryObjectValue: any = {
    dogboarding: "dog boarding",
    dogdaycare: "dog daycare",
    catboarding: "cat boarding",
    transport: "transport",
  };
  let services: any = [
    {
      label: "Dog Boarding",
      value: "dog boarding",
    },
    {
      label: "Dog Daycare",
      value: "dog daycare",
    },
    {
      label: "Cat Boarding",
      value: "cat boarding",
    },
    {
      label: "Training",
      value: "training",
    },
    {
      label: "Dog Grooming",
      value: "Dog Grooming",
    },
    {
      label: "Transport",
      value: "transport",
    },
  ];
  const isDateOlderThanEightDays = (dateString: any) => {
    const storedDate = moment(dateString);
    const currentDate = moment();

    return currentDate.diff(storedDate, "days") > 8;
  };
  const handleService = (_service: any) => {
    let serviceExist = activeServices?.find(
      (service: any) =>
        service?.value?.toLowerCase() === _service?.value?.toLowerCase()
    );
    if (serviceExist) {
      setActiveServices((services: any) =>
        services?.filter(
          (service: any) =>
            service?.value.toLowerCase() !== _service?.value?.toLowerCase()
        )
      );
    } else {
      setActiveServices((services: any) => [...services, _service]);
    }
  };
  const getChecked = (_service: any) => {
    let flag = false;
    let serviceExist = activeServices?.find(
      (service: any) =>
        service?.value?.toLowerCase() === _service?.value?.toLowerCase()
    );
    if (serviceExist) {
      flag = true;
    }
    return flag;
  };
 
  React.useEffect(() => {
    const getAllReviews = async () => {
      const revRes = await fetch("/api/google-reviews");
      setReviews(revRes)
    };
    getAllReviews()
    getData();
  }, []);
   
 
  const getData = async (cb?: any) => {
    try {
      const entries = await client.getEntries({
        content_type: "location",
        include: 10,
      });

      let cards: Array<any> = [];

      entries.items.forEach((item: any) => {
        let card: any = item.fields.card;
        if (card?.fields) {
          cards.push({ card, path: item.fields.slug });
        } else return;
      });
      cards = cards.map((card) => {
        return {
          ...card?.card?.fields,
          name: card?.card?.fields?.address ?? "",
          gallery:
            card?.card?.fields?.images?.length > 0
              ? card?.card?.fields?.images?.map((img: any) => {
                  return {
                    image: img?.fields?.file?.url ?? "",
                  };
                })
              : [],
          logos:
            card?.card?.fields?.services?.length > 0
              ? card?.card?.fields?.services?.map((img: any) => {
                  return {
                    icon: img?.fields?.serviceLogo?.fields?.file?.url,
                    value: img?.fields?.service?.fields?.serviceName,
                  };
                })
              : [],
          path: card?.path,
        };
      });

      // Fetch data from Google Places API for each card
      let storedLocationsRating = localStorage.getItem(
        "--kip-locations-rating"
      );
      const parsedLocationsRating = storedLocationsRating
        ? JSON.parse(storedLocationsRating)
        : [];
      let existingRatings = parsedLocationsRating?.ratings ?? [];

      await Promise.all(
        cards.map(async (card: any, idx: number) => {
          try {
            let location_rating = 0.0;
            const indexToUpdate = (existingRatings ?? [])?.findIndex(
              (item: any) => item.path === card.path
            );
            if (
              indexToUpdate === -1 ||
              isDateOlderThanEightDays(
                existingRatings?.[indexToUpdate].execution_date
              )
            ) {
              let res = await fetch(`/api/google-rating?path=${card?.path}`);

              let ratingResponse = await res?.json();
              card.google_rating = ratingResponse?.rating ?? 0.0; // updated rating from API
              location_rating = ratingResponse?.rating ?? 0.0; // to update rating inside local storage from API

               let updatedRating = {
                 path: card.path,
                 rating: location_rating,
                 execution_date: moment().toISOString(),
              };
              
            if (indexToUpdate !== -1) {
              existingRatings[indexToUpdate] = updatedRating;
            } else {
              existingRatings.push(updatedRating);
            }

            if (!!existingRatings?.length) {
              localStorage.setItem(
                "--kip-locations-rating",
                JSON.stringify({ ratings: existingRatings })
              );
            }
            } else {
              card.google_rating = existingRatings[indexToUpdate]?.rating; // updated rating from local storage
              location_rating = existingRatings[indexToUpdate]?.rating; // to update rating inside local storage from API
            }
          } catch (error) {
            console.error(`Error fetching data for card ${card?.path}:`, error);
            throw error;
          }
        })
      );
      setAllLocations(cards);
      setLocationsResult(cards);
    } catch (error) {
      console.log(`error here --->>>>`, error);
    }
    if (typeof cb === "function") {
      cb();
    }
  };
   
  // const getData = async (cb?: any) => {
  //   let entries = await client.getEntries({
  //     content_type: "location",
  //     include: 10,
  //   });
  //   let cards: Array<any> = [];
  //   entries.items.forEach((item) => {
  //     let card: any = item.fields.card;
  //     if (card?.fields) {
  //       cards.push({ card, path: item.fields.slug });
  //     } else return;
  //   });

  //   cards = cards.map((card) => {
  //     return {
  //       ...card?.card?.fields,
  //       name: card?.card?.fields?.address ?? "",
  //       gallery:
  //         card?.card?.fields?.images?.length > 0 ? card?.card?.fields?.images?.map((img: any) => {
  //             return {
  //               image: img?.fields?.file?.url ?? "",
  //             };
  //           })
  //           : [],
  //       logos:
  //         card?.card?.fields?.services?.length > 0          ? card?.card?.fields?.services?.map((img: any) => {
  //             return {
  //               icon: img?.fields?.serviceLogo?.fields?.file?.url,
  //               value: img?.fields?.service?.fields?.serviceName,
  //             };
  //           })
  //           : [],
  //       path: card?.path,
  //     };
  //   });
  //   setAllLocations(cards);
  //   setLocationsResult(cards);
  //   if (typeof cb === 'function') {
  //     cb()
  //   }
  // };

  React.useEffect(() => {
    if (activeServices?.length > 0) {
      let filteredResult = [];
      if (!!activeServices?.length) {
        let dup = [...allLocations];
        filteredResult = dup.filter((location: any) =>
          location.logos?.some((service: any) =>
            activeServices.some(
              (selectedService: any) =>
                service?.value?.toLowerCase() ===
                selectedService?.value?.toLowerCase()
            )
          )
        );
      } else {
        filteredResult = allLocations;
      }
      setLocationsResult(filteredResult);
    }
  }, [activeServices]);

  React.useEffect(() => {
    if (!!filterValue?.length) {
      getData(() => {
        handleService({
          label: queryObjectLabel[filterValue],
          value: queryObjectValue[filterValue],
        });
      });
    }
  }, [filterValue]);

  return (
    <Layout>
      <Section className="mt-12">
        <Container>
          <States
            title="What state do you live in?"
            description="Copy regarding NSW facilities"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <AllLocationsFilters
            services={services}
            handleService={handleService}
            getChecked={getChecked}
            parentPage="all locations"
          />
        </Container>
      </Section>
      <div className="pb-12">
        <AllLocations data={locationsResult} />
      </div>
      <AllPagesReviews data={reviews} />
      <InstagramReviews instagramFeeds={[]} />
    </Layout>
  );
};

export default AllLocationsPagePath;
export const Head: HeadFC = () => (
  <>
    <title>Kip | All Locations</title>
  </>
);
export async function getServerData() {
  return {
    props: {},
  };
}