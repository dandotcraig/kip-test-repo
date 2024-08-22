import React, { FC, ReactNode } from "react";
import { Anchor } from "../../shared/ui/button";
import { Heading } from "../../shared/ui/heading";
import { twMerge } from "tailwind-merge";

export const ContantBoxWithImage = ({
  data,
  cardClassName,
  titleSize,
  titleClassName,
}: any) => {
  return (
    <div
      className={twMerge(
        ` rounded-t-xl   `,
        cardClassName
      )}
    >
      <div className="p-4 sm:p-6 md:p-10 lg:p-12">
        <Heading
          size="h4"
          className="text-teal-950 mb-5 uppercase font-tiempos-text "
        >
          {data?.tagline}
        </Heading>
        <Heading
          size={titleSize ?? "h1"}
          className={twMerge("uppercase mb-5", titleClassName)}
        >
          {data?.title}
        </Heading>
        {data?.tagline2 && (
          <Heading size="h5" className="mb-4 text-green-slate-800">
            {data?.tagline2}
          </Heading>
        )}

        <div
          className="card-image-content"
          dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
        ></div>
        {data?.CTA && (
          <Anchor className="w-fit font-mabry-pro mt-4">{data?.CTA}</Anchor>
        )}
      </div>
      <div>
        <img
          src={data?.imageSrc}
          alt={data?.imageAlt}
          className="w-full h-auto object-fit"
        />
      </div>
    </div>
  );
};
