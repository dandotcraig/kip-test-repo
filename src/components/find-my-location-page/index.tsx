import React from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { client } from "../../../lib/contentful";
import { useLocation } from "@reach/router";
import InstagramReviews from "../common/reviewCards/InstagramReviews";
import AllPagesReviews from "../common/reviewCards/AllPagesReview";
import { Heading } from "../shared/ui/heading";
import { Paragraph } from "../shared/ui/paragraph";
import { LocationsCards } from "../homepage/locations-cards";
import { FilterBox } from "../homepage/filter-box";
import SectionSeparator from "../common/section-separator";
import arraySort from "array-sort";
import { fetchInstagramFeeds, getData } from "../../pages";

export const FindMyLocationsPage: React.FC<any> = ({ data, instagramFeeds }: any) => {
  const location = useLocation();
  const queryParamsRes = new URLSearchParams(location.search);
  const stateCodeParam = queryParamsRes.get("location_state");
  const serviceParam = queryParamsRes.get("service");

  const [activeLocation, setActiveLocation] = React.useState<any>(null);
  const [locationsResult, setLocationsResult] = React.useState<any>([]);
  const [search, setSearch] = React.useState(Math.random());
  const [activeService, setActiveService] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [endIndex, setEndIndex] = React.useState(6);
  const [allLocations, setAllLocations] = React.useState<any>([]);
  const [services, setServices] = React.useState<any>([]);
  const [locations, setLocations] = React.useState<any>([]);

  const handleLocation = (_location: any) => {
    setEndIndex(6);
    if (_location?.value.toLowerCase() === "reset") {
      setActiveLocation(null);
      return;
    }
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
      queryParamsRes.set("service", "");
    } else {
      setActiveService(_service);
    }
  };

  React.useEffect(() => {
    const getOptions = async () => {
      let _services = await client.getEntries({
        content_type: "service",
        include: 10,
      });
      let all_Services = _services?.items
        ?.map((service) => {
          return {
            label: service?.fields?.serviceName,
            value: service?.fields?.serviceName,
            icon: service?.fields?.icon,
          };
        })
        ?.sort((a: any, b: any) => {
          if (a.value.toLowerCase() === "all services") return 1;
          if (b.value.toLowerCase() === "all services") return -1;
          return 0;
        });
      all_Services.push({
        label: "Reset",
        value: "Reset",
        icon: all_Services[0]?.icon,
      });
      setServices(all_Services);
      let _locations = await client.getEntries({
        content_type: "singleLocation",
        include: 10,
      });
      let all_Locations = _locations?.items
        ?.map((location) => {
          return {
            label: location?.fields?.locationName,
            value: location?.fields?.locationName,
            icon: location?.fields?.icon,
          };
        })
        ?.sort((a: any, b: any) => {
          if (a.value.toLowerCase() === "all locations") return 1;
          if (b.value.toLowerCase() === "all locations") return -1;
          return 0;
        });
      all_Locations.push({
        label: "Reset",
        value: "Reset",
        icon: all_Locations[0]?.icon,
      });
      setLocations(all_Locations);
    };
    const fetchLocations = async () => {
      let _allLocations: any = await getData({ limit: 1000 });
      setAllLocations(arraySort(_allLocations?.cards, "order"));
      setLocationsResult(arraySort(_allLocations?.cards, "order"));
    };
    fetchLocations();
    getOptions();


  }, []);

  const handleFilter = () => {
    if (!!allLocations?.length) {
      setLoading(true);
      let filteredResult: any = [];
      if (activeLocation && !activeService) {
        let dup = [...allLocations];
        if (activeLocation?.value?.toLowerCase() === "all locations") {
          filteredResult = dup;
        } else {
          filteredResult = dup.filter((location) => {
            if (location?.locationStates) {
              return location.locationStates.some(
                (state: any) =>
                  state.fields.locationName.toLowerCase() ===
                  activeLocation?.value?.toLowerCase()
              );
            }
            return false;
          });
        }
      } else if (!activeLocation && activeService) {
        let dup = [...allLocations];
        if (activeService?.value?.toLowerCase() === "all services") {
          filteredResult = dup;
        } else {
          filteredResult = dup.filter((location: any) =>
            location.logos?.some(
              (service: any) =>
                service?.value?.toLowerCase() ===
                activeService?.value?.toLowerCase()
            )
          );
        }
      } else if (activeLocation && activeService) {
        let dup = [...allLocations];
        filteredResult = dup.filter((location) => {
          const isMatchingLocation =
            activeLocation?.value?.toLowerCase() === "all locations"
              ? true
              : location?.locationStates?.some(
                  (state: any) =>
                    state.fields.locationName.toLowerCase() ===
                    activeLocation?.value?.toLowerCase()
                );
          const containsActiveService =
            activeService?.value?.toLowerCase() === "all services"
              ? true
              : location.logos?.some(
                  (service: any) =>
                    service?.value?.toLowerCase() ===
                    activeService?.value?.toLowerCase()
                );

          return isMatchingLocation && containsActiveService;
        });
      } else {
        setTimeout(() => {
          let dup = [...allLocations];
          filteredResult = dup;
        }, 1200);
      }
      setTimeout(() => {
        setLocationsResult(filteredResult);
        setLoading(false);
      }, 1200);
    } else {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleFilter();
  }, [activeLocation, activeService, search]);

  React.useEffect(() => {
    if (serviceParam && !!services?.length) {
      let _service = services?.find(
        (_service: any) =>
          _service?.value?.toLowerCase() === serviceParam?.split("_").join(" ")
      );
      setActiveService(_service);
      handleFilter();
    }
    if (stateCodeParam && !!locations?.length) {
      let _stateCode = locations?.find(
        (_stateCode: any) =>
          _stateCode?.value?.toLowerCase() === stateCodeParam.toLowerCase()
      );
      setActiveLocation(_stateCode);
      handleFilter();
    }
  }, [serviceParam, stateCodeParam, services, locations, allLocations]);

  return (
    <div>
      <Section>
        <Container>
          {/* Map Section  */}
          {/* <Hero stateCode={stateCodeParam} /> */}
          <div className="p-6">
            <Heading size="h1" className="uppercase">
              All locations
            </Heading>
            <Paragraph className="mt-5">
              See all of our locations around Australia
            </Paragraph>
          </div>
        </Container>
      </Section>
      <FilterBox
        activeLocation={activeLocation}
        setLocation={handleLocation}
        activeService={activeService}
        setService={handleService}
        locations={locations}
        services={services}
      />
      <div>
        <LocationsCards
          loading={loading}
          data={locationsResult}
          showLoadMore={false}
          endIndex={endIndex}
          totalCount={allLocations?.length}
        />
      </div>

      {/* <div className="pb-12">{ <AllLocations data={myLocations} /> }</div> */}
      <AllPagesReviews data={data} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
    </div>
  );
};
