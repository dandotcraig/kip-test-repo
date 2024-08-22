import React, { useEffect, FC, useState } from "react";
import { Layout } from "../components/layout";
import { Clients } from "../components/homepage/clients";
import DogDaycare from "../components/homepage/dogDaycare";
import { LocationsCards } from "../components/homepage/locations-cards";
import { WhatMakesDifferent } from "../components/homepage/what-makes-different";
import { uniqueTraitsData } from "../components/homepage/what-makes-different/data";
import { contentBoxHomePageData, whatAreYouLookingForData } from "../data";
import OurServices from "../components/homepage/our-services";
import { theDetailsData } from "../components/homepage/the-details/data";
import { TheDetails } from "../components/homepage/the-details";
import { FaqCards } from "../components/homepage/faq-cards";
import { FaqsCardsData } from "../components/homepage/faq-cards/data";
import { EmptyCards } from "../components/homepage/emptyCards";
import ContentBox from "../components/common/content-box";
import HeroSlider from "../components/homepage/hero-slider";
import { client } from "../../lib/contentful";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { useLocation } from "@reach/router";
import { getReviews } from "../utils";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import reviewsData from "../data/reviews.json";
import instagramInformation from "../data/instagram-information.json";
import arraySort from "array-sort";
import SectionSeparator from "../components/common/section-separator";

export const getData = async ({ limit }: { limit: number }) => {
  try {
    const entries = await client.getEntries({
      content_type: "card",
      limit,
      include: 10,
      order: "fields.order",
    });

    let cards: Array<any> = entries?.items?.reduce(
      (accumulator: any, item: any) => {
        let reviews = reviewsData?.allLocationsReviews?.find(
          (allReviews) =>
            allReviews?.place_details?.name?.toLowerCase() ===
            item?.fields?.businessNameparentLocationPage?.toLowerCase()
        );
        accumulator.push({
          ...item?.fields,
          name: item?.fields?.address ?? "",
          gallery: (item?.fields?.images || []).map((img: any) => ({
            image: img?.fields?.file?.url ?? "",
          })),
          logos: (item?.fields?.services || []).map((service: any) => ({
            icon: service?.fields?.serviceLogo?.fields?.file?.url,
            value: service?.fields?.service?.fields?.serviceName,
          })),
          path: item?.fields?.locationPageSlug,
          rating: reviews?.totals?.average_rating,
        });
        return accumulator;
      },
      []
    );

    return { cards: cards || [], totalCount: entries?.total };
  } catch (error) {
    console.log(`error here --->>>>`, error);
    return [];
  }
};

export const getOurServicesCards = async () => {
  try {
    const ourServicesToDisplay = [
      { title: "DOG BOARDING", order: 1 },
      { title: "CAT BOARDING", order: 2 },
      { title: "DOG TRAINING", order: 3 },
      { title: "DOG DAYCARE", order: 4 },
    ];
    const titlesToInclude = ourServicesToDisplay.map(
      (service) => service.title
    );

    const entries = await client.getEntries({
      content_type: "ourServicesCards",
      include: 10,
      limit: 4,
      "fields.title[in]": titlesToInclude.join(","),
    });

    return entries?.items || [];
  } catch (error) {
    console.log(`error here --->>>>`, error);
    return [];
  }
};
// TO FETCH THE INSTAGRAM FEEDS
export const fetchInstagramFeeds = async () => {
  try {
    let res = await fetch(
    );
    let _response = await res.json();
    return _response;
  } catch (error) {
    console.log("Error fetching Instagram feeds:", error);
  }
};

const IndexPage: FC<{
  serverData: {
    locationCards: any;
    ourServicesCards: any;
    _services: any;
    _locations: any;
    seoData: any;
    instagramFeeds: any;
  };
}> = ({
  serverData: {
    locationCards,
    ourServicesCards,
    _services,
    _locations,
    seoData,
    instagramFeeds,
  },
}) => {
  const location = useLocation();
  const queryParamsRes = new URLSearchParams(location.search);
  const stateCodeParam = queryParamsRes.get("location_state");
  const serviceParam = queryParamsRes.get("service");
  const [activeLocation, setActiveLocation] = useState<any>();
  const [locationsResult, setLocationsResult] = useState<any>(
    arraySort(locationCards?.cards, "order").slice(0, 6)
  );
  const [ourServices] = useState(ourServicesCards ?? []);
  const [search, setSearch] = useState(Math.random());
  const [activeService, setActiveService] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [endIndex, setEndIndex] = useState(6);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [reviews, setReviews] = useState<any>([]);
  const [services, setServices] = useState<any>([]);
  const [locations, setLocations] = useState<any>([]);

  const handleLocation = (_location: any) => {
    setEndIndex(6);
    if (_location?.value.toLowerCase() === "reset") {
      setActiveLocation(null);
      return;
    }
    if (_location?.label === "All Locations") {
      setShowLoadMore(false);
    }

    setEndIndex(6);
    if (activeLocation?.value === _location?.value) {
      setActiveLocation(null);
    } else {
      setActiveLocation(_location);
    }
  };

  const handleService = (_service: any) => {
    setEndIndex(6);
    if (_service?.value.toLowerCase() === "reset") {
      setActiveService(null);
      return;
    }
    if (activeService?.value === _service?.value) {
      setActiveService(null);
    } else {
      setActiveService(_service);
    }
  };

  const handleLoadMore = async () => {
    setEndIndex((idx) => {
      return idx + 6;
    });
    let _allLocations: any = await getData({ limit: 1000 });
    let dup = [..._allLocations?.cards];
    setLocationsResult(arraySort(dup, "order").splice(0, endIndex + 6));
  };

  const handleFilter = async () => {
    setLoading(true);
    let _allLocations: any = await getData({ limit: 1000 });
    if (!!_allLocations?.cards?.length) {
      let filteredResult: any = _allLocations?.cards;
      if (!activeLocation && !activeService) {
        filteredResult = filteredResult.slice(0, 6);
        setShowLoadMore(true);
      } else {
        const isActiveLocationAll =
          activeLocation?.value?.toLowerCase() === "all locations";
        const isActiveServiceAll =
          activeService?.value?.toLowerCase() === "all services";

        filteredResult = filteredResult.filter((location: any) => {
          const isMatchingLocation =
            !activeLocation ||
            location.locationStates?.some(
              (state: any) =>
                state.fields.locationName.toLowerCase() ===
                activeLocation.value?.toLowerCase()
            );

          const containsActiveService =
            !activeService ||
            location.logos?.some(
              (service: any) =>
                service?.value?.toLowerCase() ===
                activeService.value?.toLowerCase()
            );

          return (
            (isActiveLocationAll || isMatchingLocation) &&
            (isActiveServiceAll || containsActiveService)
          );
        });

        setShowLoadMore(false);
      }
      setTimeout(() => {
        setLocationsResult(filteredResult);
        setLoading(false);
      }, 1200);
    }
  };

  useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    setServices(_services);
    setLocations(_locations);
    setLocationsResult(arraySort(locationCards?.cards, "order").slice(0, 6));
    getGoogleReviews();
  }, []);

  useEffect(() => {
    if (
      activeLocation ||
      activeService ||
      activeService === null ||
      activeLocation === null
    ) {
      handleFilter();
    }
  }, [activeLocation, activeService, search]);

  useEffect(() => {
    const setItem = (param: any, items: any, setter: any) => {
      if (param && !!items?.length) {
        let item = items.find(
          (_item: any) => _item?.value?.toLowerCase() === param.toLowerCase()
        );
        setter(item);
      }
    };

    setItem(serviceParam?.split("_").join(" "), services, setActiveService);
    setItem(stateCodeParam, locations, setActiveLocation);
  }, [serviceParam, stateCodeParam, services, locations]);

  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <HeroSlider />
      <Clients
        activeLocation={activeLocation}
        setLocation={handleLocation}
        activeService={activeService}
        setService={handleService}
        services={services}
        locations={locations}
        onSearch={setSearch}
      />
      <div className="mt-16">
        <LocationsCards
          loading={loading}
          data={arraySort(locationsResult, "order")}
          showLoadMore={showLoadMore}
          handleLoadMore={handleLoadMore}
          endIndex={endIndex}
          totalCount={locationCards?.totalCount}
        />
      </div>
      <SectionSeparator />
      <WhatMakesDifferent data={uniqueTraitsData} />
      <SectionSeparator />
      <AllPagesReviews data={reviews} />
      <SectionSeparator />
      <div>
        <ContentBox textColor="text-primary" data={contentBoxHomePageData} />
      </div>
      <SectionSeparator />
      <OurServices data={{ cards: ourServices }} />
      <SectionSeparator />
      <DogDaycare data={whatAreYouLookingForData} />
      <SectionSeparator />
      <TheDetails data={theDetailsData} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
      <FaqCards data={FaqsCardsData} />
      <SectionSeparator />
      <EmptyCards />
      <SectionSeparator />
    </Layout>
  );
};

export default IndexPage;

export async function getServerData() {
  const seoData = {
    title: "Kip Pet Boarding: Australia's Leading Pet Hotels & Daycares",
    description:
      "Australia's favourite dog boarding & daycare centres. Before you schedule your next holiday, book your pup in at Kip - you won't have to worry about a thing!",
    og_title: "Kip Pet Boarding: Australia's Leading Pet Hotels & Daycares<",
    og_description:
      "Australia's favourite dog boarding & daycare centres. Before you schedule your next holiday, book your pup in at Kip - you won't have to worry about a thing!",
    canonical: "https://kip.com.au/",
  };

  try {
    const [
      locationCards,
      ourServicesCards,
      instagramFeeds,
      services,
      locations,
    ] = await Promise.all([
      getData({ limit: 6 }),
      getOurServicesCards(),
      fetchInstagramFeeds(),
      client.getEntries({ content_type: "service", include: 10 }),
      client.getEntries({ content_type: "singleLocation", include: 10 }),
    ]);

    const processEntries = (entries: any[], defaultValue: string) =>
      entries
        .map((entry) => ({
          label:
            entry?.fields?.locationName ||
            entry?.fields?.serviceName ||
            defaultValue,
          value:
            entry?.fields?.locationName ||
            entry?.fields?.serviceName ||
            defaultValue,
          icon: entry?.fields?.icon,
        }))
        .sort((a, b) =>
          a.value.toLowerCase() === defaultValue
            ? 1
            : b.value.toLowerCase() === defaultValue
            ? -1
            : 0
        )
        .concat({
          label: "Reset",
          value: "Reset",
          icon: entries[0]?.fields?.icon,
        });
    const all_Services = processEntries(services?.items || [], "all services");
    const all_Locations = processEntries(
      locations?.items || [],
      "all locations"
    );

    return {
      props: {
        seoData,
        ourServicesCards,
        locationCards: locationCards || [],
        _services: all_Services || [],
        _locations: all_Locations || [],
        instagramFeeds: instagramFeeds ?? [],
      },
    };
  } catch (err) {
    return {
      props: { cards: [], seoData },
    };
  }
}
