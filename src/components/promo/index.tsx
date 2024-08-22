import { Heading } from "../shared/ui/heading";
import { Container } from "../shared/container";
import { Section } from "../shared/section";
import React from "react";

export default function Promo() {
  return (
    <Section>
      <Container>
        <Heading size="h1" as="h1" className="text-dark-green  pt-12">
          Promotion Terms & Conditions
        </Heading>
        <Heading size="h2" as="h2" className="text-dark-green pt-10 pb-8">
          Back 2 Summer School Competition
        </Heading>
        <ol className="pl-8 font-mabry-pro list-decimal text-dark-green text-[1rem] font-[400] leading-[1.5rem]">
          <li className="pb-4">
            The Promoter is: <br /> ‘Spot Employment & Procurement Pty Ltd’
            trading as ‘Kip Happy Stays’ (ABN 19 635 110 262) of registered
            office address: 13.04 88 Phillip Street, Sydney, NSW 2000. The above
            mentioned companies will be hereafter jointly referred to as the
            ‘Promoter.’
          </li>
          <li className="pb-4">
            Employees of the Promoter or their family members or anyone else
            connected in any way with the competition or helping to set up the
            competition shall not be permitted to win the competition.
          </li>
          <li className="pb-4">
            To enter the competition an entrant must make at least one (1) visit
            to any Kip Daycare location between 4 – 20 January 2023.
          </li>
          <li className="pb-4">
            Closing date for entry will be 6:30pm (AEDT) Friday 20 January 2023.
            After this date the no further entries to the competition will be
            permitted.
          </li>
          <li className="pb-4">
            No responsibility can be accepted for entries not received for
            whatever reason.
          </li>
          <li className="pb-4">
            The prize is as follows:
            <ul>
              <li className="pb-1">13x Fuzzyard Hello Sun – Bandana</li>
              <li className="pb-1">13x Fuzzyard Slushie 13x Fuzzyard</li>
              <li className="pb-1">
                Choc Coated Ice Cream 13x Fuzzyard Poppin’ Popsicles Cooling
                Bandana
              </li>
              <li className="pb-1">13x Fuzzyard Go Nuts Backpack</li>
            </ul>
          </li>
          <li className="pb-4">
            The total prize pool is worth $1,059.53. There will be one winner
            per Kip Daycare location and they will receive one of each of the
            items listed above.
          </li>
          <li className="pb-4">
            The Promoter reserves the right to cancel or amend the competition
            and these terms and conditions without notice in the event of a
            catastrophe, war, civil or military disturbance, act of God or any
            actual or anticipated breach of any applicable law or regulation or
            any other event outside of the Promoter’s control. Any changes to
            the competition will be notified to entrants as soon as possible by
            the Promoter.
          </li>
          <li className="pb-4">
            The Promoter is not responsible for inaccurate prize details
            supplied to any entrant by any third party connected with this
            competition.
          </li>
          <li className="pb-4">
            No cash alternative to the prizes will be offered. The prizes are
            not transferable. Prizes are subject to availability and we reserve
            the right to substitute any prize with another of equivalent value
            without giving notice.
          </li>
          <li className="pb-4">
            Winner will be drawn at random at 13.04 88 Phillip Street, Sydney,
            NSW on Monday 22 January 2023.
          </li>
          <li className="pb-4">
            The winner will be notified by email and/or letter within 28 days of
            the closing date. If the winner cannot be contacted or do not claim
            the prize within 14 days of notification, we reserve the right to
            withdraw the prize from the winner and pick a replacement winner.
          </li>
          <li className="pb-4">
            The Promoter will notify the winner when and where the prize can be
            collected.
          </li>
          <li className="pb-4">
            The Promoter’s decision in respect of all matters to do with the
            competition will be final and no correspondence will be entered
            into.
          </li>
          <li className="pb-4">
            By entering this competition, an entrant is indicating his/her
            acceptance and agreement to be bound by these terms and conditions.
          </li>
          <li className="pb-4">
            The competition and these terms and conditions will be governed by
            Australian law and any disputes will be subject to the exclusive
            jurisdiction of the courts of Australia.
          </li>
          <li className="pb-4">
            The winner agrees to the use of his/her name and image in any
            publicity material. Any personal data relating to the winner or any
            other entrants will be used solely in accordance with current
            Australian data protection legislation and will not be disclosed to
            a third party without the entrant’s prior consent.
          </li>
          <li className="pb-4">
            The winner’s name may be published on our website, social media, or
            marketing materials.
          </li>
          <li className="pb-4">
            This promotion is in no way sponsored, endorsed or administered by,
            or associated with, Facebook, Twitter or any other Social Network.
            You are providing your information to the Promoter and not to any
            other party.
          </li>
        </ol>
      </Container>
    </Section>
  );
}
