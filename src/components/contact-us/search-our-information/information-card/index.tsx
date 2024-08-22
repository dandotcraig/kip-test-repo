import React from "react";
import { Heading } from "../../../shared/ui/heading";
import { Paragraph } from "../../../shared/ui/paragraph";
import Chevron from "../../../icons/chevron";
import { Link } from "gatsby-link";

export const InformationCard = ({ data }: any) => {
  return (
    <div className="h-full p-5 rounded-xl border border-neutral-200 shadow-sm">
      <Link target="blink" to={data?.link}>
        <Heading size="h5" as="h4" className="text-green-slate-800 leading-6">
          {data?.title}
        </Heading>
      </Link>

      <Paragraph className="text-sm font-bold pt-1 text-greenslate-700">
        {data?.tagline}
      </Paragraph>
      <Paragraph className="py-4 text-greenslate-700">
        {data?.description}
      </Paragraph>
      <Link to={`/blogs/${data?.slug}`}>
        <div className="inline-flex items-center gap-x-2.5 ">
          <Heading size="h6" as="span" className="text-primary">
            {data?.btn}
          </Heading>{" "}
          <Chevron />
        </div>
      </Link>
    </div>
  );
};
