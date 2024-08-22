import React, { FC, useEffect, useState } from "react";
import { Section } from "../../shared/section";
import { Container } from "../../shared/container";
import { twMerge } from "tailwind-merge";
import { FaqCard } from "../../shared/ui/faq-card";
import { IFaq } from "../../homepage/our-services/interfaces";

interface Props {
  data: IFaq[];
  className?: string;
  title?: string;
}

export const LocationFaqCards: FC<Props> = ({
  data,
  className,
  title,
}: any) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const initialObj: any = {
    "Kip Brisbane": "Kip Brisbane",
    "Kip Canberra": "Kip Canberra",
    "Cat Boarding Brisbane": "Cat Boarding Brisbane",
    "Cat Boarding Sydney": "Cat Boarding Sydney",
    "Dog Boarding Adelaide": "Dog Boarding Adelaide",
    "Dog Boarding Brisbane | Best Dog Hotel & Kennels in Brisbane | Kip":
      "Dog Boarding Brisbane | Best Dog Hotel & Kennels in Brisbane | Kip",
    "Dog Boarding Canberra": "Dog Boarding Canberra",
    "Dog Boarding Central Coast": "Dog Boarding Central Coast",
    "Dog Boarding Hunter Valley | Best Dog Kennels & Boarding Services":
      "Dog Boarding Hunter Valley | Best Dog Kennels & Boarding Services",
    "Dog Boarding Melbourne - Door-to-door Transport Available":
      "Dog Boarding Melbourne - Door-to-door Transport Available",
    "Dog Boarding Newcastle": "Dog Boarding Newcastle",
    "Dog Boarding Sydney | Dog Kennels | Kip Happy Stays":
      "Dog Boarding Sydney | Dog Kennels | Kip Happy Stays",
    "dog-daycare-adelaide": "dog-daycare-adelaide",
    "Doggy Day Care Adelaide | Happy Days with Kip SA":
      "Doggy Day Care Adelaide | Happy Days with Kip SA",
    "Dog Day Care Brisbane": "Dog Day Care Brisbane",
    "Doggy Day Care Melbourne | Happy Days with Kip's Pup Daycare":
      "Doggy Day Care Melbourne | Happy Days with Kip's Pup Daycare",
    "Dog Daycare Sydney": "Dog Daycare Sydney",
    "Dog Training Melbourne": "Dog Training Melbourne",
    "Pet Boarding Newcastle": "Pet Boarding Newcastle",
    "Kip Sydney": "Kip Sydney",
    "Pet Boarding Central Coast": "Pet Boarding Central Coast",
    "Dog Boarding Melbourne - Best Dog Kennels": "Dog Boarding Melbourne - Best Dog Kennels"
  };
  const [showAcc, setShowAcc] = useState(false);

  useEffect(() => {
    if (title === initialObj[title]) {
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
    <>
      {data[0]?.fields?.question && (
        <Section>
          <Container>
            <div className={`${twMerge("text-center ", className)}`}>
              <div className="border border-gray-200 rounded-xl">
                {data?.map((item: IFaq, index: number) => {
                  return (
                    <div key={index}>
                      <FaqCard
                        item={item}
                        index={index}
                        totalLength={data?.length}
                        isOpen={openFaqIndex === index || showAcc}
                        onClick={() => handleFaqClick(index)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
