import React from "react";
import { Heading } from "../../shared/ui/heading";
import { Paragraph } from "../../shared/ui/paragraph";
interface IProps {
  services: any;
  handleService: (service: any) => void;
  getChecked: (service: any) => any;
  parentPage?: string;
}
export const AllLocationsFilters: React.FC<IProps> = ({
  services,
  handleService,
  getChecked,
  parentPage,
}) => {
  return (
    <div>
      {parentPage === "all locations" && (
        <div className="p-6">
          <Heading size="h1" className="uppercase">
            All locations
          </Heading>
          <Paragraph className="mt-5">
            See all of our locations around Australia
          </Paragraph>
        </div>
      )}
      <div className="md:flex justify-center">
        {services?.map((service: any, idx: any) => {
          return (
            <div
              key={idx}
              className={`${
                idx === 0
                  ? "md:rounded-l-[12px] border rounded-t-[12px] md:rounded-r-none"
                  : "md:border-t md:border-b border-r border-b border-l md:border-l-0"
              } ${
                idx === services?.length - 1
                  ? "rounded-b-[12px] md:rounded-l-none md:rounded-r-[12px]"
                  : ""
              }  border-[#E5E7EB]`}
            >
              <label className="cursor-pointer md:p-3 sm:p-2 p-2 lg:p-4 inline-flex gap-x-4 items-center ">
                <input
                  type="checkbox"
                  checked={getChecked(service)}
                  value={service.value}
                  onChange={() => handleService(service)}
                  className="checkbox"
                />
                <Paragraph className="pt-[2px]">{service?.label}</Paragraph>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
