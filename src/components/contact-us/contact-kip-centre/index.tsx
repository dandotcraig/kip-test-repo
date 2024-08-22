import React, { useEffect, useState } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";
import Input from "../../shared/ui/input";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";
// import { MapContainer } from "../../common/map-container";
import OutsideClickHandler from "react-outside-click-handler";
import { ALL_LOCATIONS_DATA } from "../../../utils";

export const ContactKipCentre = () => {
  const defaultCenter = {
    lat: -37.76034366203764,
    lng: 144.96209709407378,
  };
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [stopQuery, setStopQuery] = useState(false);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState(defaultCenter);
  const [selectedState, setSelectedState] = useState<any>(null);

  const [filters, setFilters] = useState([
    {
      label: "State",
      options: [
        {
          label: "NSW",
          id: "nsw",
          lat: -33.90277737788992,
          lng: 151.19894908223162,
        },
        {
          label: "QLD",
          id: "qld",
          lat: -20.917574,
          lng: 142.702789,
        },
      ],
    },
  ]);

  useEffect(() => {
    const getPlaces = async () => {
      let res = await axios.get(`/api/google-places?query=${query}`);
      setPlaces(res?.data?.results ?? []);
      setOpen(true);
    };
    if (query?.length >= 2) {
      setTimeout(() => {
        if (!stopQuery) {
          getPlaces();
        }
      }, 2000);
    } else {
      setPlaces([]);
      setSelectedPlace(null);
      setCenter(defaultCenter);
    }
  }, [query]);

  const handleFilter = (op: any) => {
    if (selectedState && selectedState.id === op.id) {
      setSelectedState(null);
      setCenter(defaultCenter);
    } else {
      setSelectedState(op);
      setCenter({
        lat: op.lat,
        lng: op.lng,
      });
    }
  };


  return (
    <Section>
      <Container>
        <Heading className="text-black" size="h2" as="h3">
          Contact a Kip
        </Heading>
        <div className="my-12">
          <Paragraph className="text-sm font-bold">
            Whats your postcode? Let's find your closest Kip
          </Paragraph>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpen(false);
            }}
          >
            <div className="relative">
              <Input
                value={query}
                onChange={(e: any) => {
                  setQuery(e.target.value);
                  setStopQuery(false);
                }}
                onFocus={() => {
                  setOpen(true);
                }}
                className="mt-2.5 shadow-sm"
              >
                Postcode
              </Input>
              {!!places?.length && open && (
                <ul className="overflow-auto top-[62px] max-h-[150px] absolute z-50  mt-2 w-full bg-[#f8fafc] rounded-sm ">
                  {places?.map((place: any, idx: any) => {
                    return (
                      <li
                        key={idx}
                        onClick={() => {
                          setOpen(false);
                          setStopQuery(true);
                          setSelectedPlace(place);
                          setCenter({
                            lat: place?.geometry?.location?.lat,
                            lng: place?.geometry?.location?.lng,
                          });
                          setQuery(
                            place?.name + " " + place?.formatted_address
                          );
                        }}
                        className="w-full cursor-pointer pl-1 flex border-b border-[#d1d5db] hover:bg-[#f1f5f9] items-center space-x-1"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 42 55"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21 0C32.598 0 42 9.40202 42 21C42 22.4157 41.8599 23.7986 41.5929 25.1358C39.7394 39.1032 21.1104 55 21.1104 55C21.1104 55 5.25689 41.4717 1.34456 28.4096C0.475507 26.1054 0 23.6083 0 21C0 9.40202 9.40202 0 21 0Z"
                            fill="#D3D3D3"
                          />
                        </svg>
                        <span className="py-1 px-1.5   text-[#1f2937] font-mabry-pro text-sm">
                          {place?.name}{" "}
                          <span className="  text-[#6b7280] text-xs">
                            {place.formatted_address}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </OutsideClickHandler>
          {!places?.length && (
            <Paragraph className="text-neutral-400 text-sm mt-2.5">
              Can’t find your answer? Get in contact with us
            </Paragraph>
          )}
        </div>
        {/* <MapContainer /> */}
        <div>
          {filters?.map((filter: any, idx: any) => {
            return (
              <div key={idx} className="pb-5">
                <span className="pr-4">{filter?.label}:</span>
                {filter?.options?.map((op: any, idx: any) => {
                  return (
                    <label
                      key={op.id}
                      htmlFor={op.id}
                      className="px-2 cursor-pointer"
                    >
                      <span className="pr-1">{op.label}</span>
                      <input
                        type="checkbox"
                        id={op.id}
                        checked={selectedState?.id === op.id}
                        onChange={() => handleFilter(op)}
                      />
                    </label>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Map
          selectedPlace={selectedPlace}
          selectedState={selectedState}
          center={center}
        />
      </Container>
    </Section>
  );
};

const Map = ({ selectedPlace, center, selectedState }: any) => {
  const { isLoaded } = useJsApiLoader({

  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={selectedPlace || selectedState ? 10 : 4}
          mapContainerClassName="w-full h-[372px]"
        >
          {Object.values().map((location: any, idx: any) => (
            <MarkerF
              // onClick={() => window.open(location?.businessLink, "_blank")}
              key={idx}
              position={{ lat: location.lat, lng: location.long }}
              // label={location.name}
            />
          ))}
        </GoogleMap>
      )}
    </>
  );
};
