import React, { FC, useState } from "react";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { Heading } from "../shared/ui/heading";
import { SitemapData } from "../../data/sitemapData";
import { Link } from "gatsby-link";

interface Props {
  data: SitemapData[];
}

export const GetAround: FC<Props> = ({ data }) => {
  const itemsPerPage = 10;
  const [categoryVisibility, setCategoryVisibility] = useState<
    Record<string, number>
  >(
    Object.fromEntries(data.map((category) => [category.heading, itemsPerPage]))
  );

  const handleShowMore = (category: string) => {
    setCategoryVisibility((prevVisibility: any) => ({
      ...prevVisibility,
      [category]: (prevVisibility[category] || 0) + itemsPerPage,
    }));
  };

  return (
    <Section>
      <Container>
        <div className="xl:grid grid-cols-">
          <div>
            <Heading size="h4" className="font-tiempos-text uppercase text-md ">
              Get Around
            </Heading>
            <Heading size="h2" className="mt-2 mb-10 md:mb-12 lg:mb-14">
              Sitemap
            </Heading>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {data.map((category, index) => (
              <div key={index}>
                <Heading
                  size="h4"
                  className="font-mabry-pro text-base font-bold  text-green-slate-800"
                >
                  {" "}
                  {category.heading}
                </Heading>
                <ul className="pl-2.5">
                  {category.items
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`font-mabry-pro text-base font-normal text-green-slate-800 flex gap-x-2 ${
                          itemIndex < categoryVisibility[category.heading]
                            ? ""
                            : "hidden"
                        }`}
                      >
                        <span className=" font-bold">&#183;</span>
                        <Link to={`${item?.link}`} className="capitalize">
                          {item?.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                {category.items.length >
                  categoryVisibility[category.heading] && (
                  <button onClick={() => handleShowMore(category.heading)}>
                    Show more
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
