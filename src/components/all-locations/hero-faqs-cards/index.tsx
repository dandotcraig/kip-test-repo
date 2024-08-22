import React, { useState } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { FaqCard } from "../../shared/ui/faq-card";

export const HeroFaqsCards = ({ data }: any) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    if (index === openFaqIndex) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };
  return (
    <Section>
      <Container className="px-0 md:px-0">
        <div className="mt-4">
          <div className="border border-gray-200 rounded-xl">
            {(data?.cards?.length < 0 ? data?.cards : data)?.map(
              (item: any, index: number) => {
                return (
                  <div key={index}>
                    <FaqCard
                      item={item}
                      index={index}
                      isOpen={index === openFaqIndex}
                      onClick={() => handleFaqClick(index)}
                      totalLength={data?.cards?.length ?? data.length}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
