import React, { FC, useEffect, useState } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { twMerge } from "tailwind-merge";
import { Heading } from "../../shared/ui/heading";
import { FaqCard } from "../../shared/ui/faq-card";
import { IFaq } from "../our-services/interfaces";
import SectionSeparator from "../../../components/common/section-separator";

interface Props {
  data?: IFaq[];
  className?: string;
  title?: string;
  slug?: string;
}

export const FaqCards: FC<Props> = ({ data, className, title, slug }: any) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showAcc, setShowAcc] = useState(true);

  const initialObj: any = {
    "cat-boarding": "cat-boarding",
    "dog-daycare": "dog-daycare",
    "dog-boarding": "dog-boarding",
    "pet-transport": "pet-transport",
    "dog-training": "dog-training",
    "dog-grooming": "dog-grooming",
  };

  useEffect(() => {
    if (slug === initialObj[slug]) {
      setShowAcc(true);
    } else {
      setShowAcc(false);
    }
  }, []);

  const handleFaqClick = (index: number) => {
    setShowAcc(false);
    if (showAcc) {
      setOpenFaqIndex(index);
    } else {
      setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };
  return (
    <Section>
      <Container>
        <div className={`${twMerge("text-center", className)}`}>
          <div className="flex justify-center" >
          <Heading size="h2" as="h3" className="tracking-wide">
            {title ?? "FAQs"}
          </Heading>
          </div>
          {/* <SectionSeparator /> */}
          <div className="border mt-5 border-greenslate-250 rounded-xl">
            {data?.map((item: IFaq, index: number) => {
              return (
                <div key={index}>
                  <FaqCard
                    item={item}
                    index={index}
                    totalLength={data?.length}
                    isOpen={index === openFaqIndex || showAcc}
                    onClick={() => handleFaqClick(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
