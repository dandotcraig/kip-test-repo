import React, { FC } from "react";
import GoogleMapReact, { BootstrapURLKeys, MapOptions } from "google-map-react";
import { CheckMark } from "../../icons/check-mark";

const CheckPin = ({ locationTitle }: any) => (
  <div
    className="flex space-x-2 items-center"
  >
    <CheckMark />{" "}
    <span className="text-red-600 font-medium text-[12px]">
      {locationTitle}
    </span>
  </div>
);

export const MapContainer: FC<any> = ({
  myLocation,
  locationTitle,
  lat,
  long,
}) => {
  const center = { lat: lat ?? 323330, lng: long ?? 333330 };
  const client: BootstrapURLKeys = {
    client: "my-client-identifier",
    version: "3.28",
    language: "en",
    libraries: "places",
    region: "PR",
    id: "custom-id",
  };

  const options: MapOptions = {
    zoomControl: false,
    gestureHandling: "cooperative",
    mapId: "123456789",
    styles: [
      // {
      //   featureType: "administrative",
      //   elementType: "all",
      //   stylers: [{ saturation: "-100" }],
      // },
      // {
      //   featureType: "administrative.neighborhood",
      //   stylers: [{ visibility: "off" }],
      // },
      // {
      //   elementType: "labels.text.stroke",
      //   stylers: [{ color: "#242f3e" }],
      // },
      // {
      //   stylers: [{ color: "#fcfffd" }],
      // },
    ],
  };
  return (
    <div
      className={`cus-map-wraper ${
        myLocation ? "h-[300px] sm:h-full" : "h-[300px] sm:h-[50vh]"
      } w-full`}
    >
      <GoogleMapReact
        center={center}
        heatmapLibrary={true}
        zoom={3}
        bootstrapURLKeys={{ key: `${process.env.}` }}
        options={options}
      >
        <CheckPin locationTitle={locationTitle ?? ""} />
      </GoogleMapReact>
    </div>
  );
};
