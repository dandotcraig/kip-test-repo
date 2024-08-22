import { IServiceCard } from "../our-services/interfaces";
import { ILocationCard } from "./interfaces";
import { serviceSteps } from "../../catboardingpage/steps/data";
import CardImage from "../../../images/cardimage.png"
import DogBoarding from "../../../images/dog_boarding.png"
import CatBoardingSvg from "../../../images/cat_boarding.png"
import PickUpSvg from "../../../images/pick_up_available.svg"
import DogDayCareSvg from "../../../images/dog_care.png"
import ContactHero1 from "../../../images/contactHero1.jpg"
import ContactHero2 from "../../../images/contactHero2.jpg"
import ContactHero3 from "../../../images/contactHero3.jpg"
import ContactHero4 from "../../../images/contactHero4.jpg"

export const locationCardsData: ILocationCard[] = [
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "sa", label: "SA" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "VIRGINIA, SA",
    name: "Kip Adelaide North",
    price: "From $58",
    id: "kip-adelaide-north",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },

  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    tag: "Popular",
    location: { value: "nsw", label: "NSW" },

    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "ALEXANDRIA, NSW",
    name: "Kip Alexandria",
    price: "From $58",
    id: "kip-alexandria",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "sa", label: "SA" },

    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "BRUKUNGA, SA",
    name: "Kip Adelaide Hills",
    price: "From $58",
    id: "kip-adelaide-hills-21",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    location: { value: "nsw", label: "NSW" },

    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "MARRICKVILLE, NSW",
    name: "Kip Marrickville",
    price: "From $58",
    id: "kip-marrickville",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    location: { value: "tas", label: "TAS" },

    logos: [
      { icon: DogDayCareSvg, value: "dog_care" },
      { icon: DogBoarding, value: "dog_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "HOBART, TAS",
    name: "Kip Marrickville",
    price: "From $58",
    id: "kip-marrickville1",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    location: { value: "vic", label: "VIC" },

    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "THOMASTOWN, VIC",
    name: "kip Thomastown",
    price: "From $58",
    id: "kip-thomastown-22",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogDayCareSvg, value: "dog_care" },
      { icon: DogBoarding, value: "dog_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "tas", label: "TAS" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "HOBART, TAS",
    name: "Kip Hobart",
    id: "kip-hobart",
    price: "From $58",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogDayCareSvg, value: "dog_care" },
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
    ],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "MOORABBIN, VIC",
    name: "Kip Bayside",
    price: "From $58",
    id: "kip-bayside",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "BAYSWATER, VIC",
    name: "Kip Bayside",
    price: "From $58",
    id: "kip-bayside1",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "NEWTOWN, NSW",
    name: "Kip Newtown",
    price: "From $58",
    id: "kip-newtown2",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "NUNAWADING, VIC",
    name: "Kip Blackburn",
    price: "From $58",
    id: "kip-blackburn",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "BRUNSWICK, VIC",
    name: "Kip Brunswick",
    price: "From $58",
    id: "kip-brunswick-2",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "SAWYERS GULLY, NSW",
    name: "Kip Sydney",
    price: "From $58",
    id: "kip-sydney-3",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "FAIRFIELD, VIC",
    name: "Kip Fairfield",
    price: "From $58",
    id: "kip-fairfield",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "KEW EAST, VIC",
    name: "Kip Kew",
    price: "From $58",
    id: "kip-kew",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "tas", label: "TAS" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "KINGSTON, TAS",
    name: "Kip Kingston",
    price: "From $58",
    id: "kip-kingston-3",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "VIC",
    name: "Kip Melbourne West",
    price: "From $58",
    id: "kip-melbourne-west",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "vic", label: "VIC" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "THOMASTOWN, VIC",
    name: "Kip Thomastown",
    price: "From $58",
    id: "kip-thomastown-3",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "MARRICKVILLE, NSW",
    name: "Kip Marrickville",
    price: "From $58",
    id: "kip-marrickville-4",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "sa", label: "SA" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "BRUKUNGA, SA",
    name: "Kip Adelaide Hills",
    price: "From $58",
    id: "kip-adelaide-hills-1",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "sa", label: "SA" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "ALLENBY GARDENS, SA",
    name: "Kip West Hindmarsh",
    price: "From $58",
    id: "kip-west-hindmarsh-31",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "MARRICKVILLE, NSW",
    name: "Kip Lake Mcquarie",
    price: "From $58",
    id: "kip-lake-mcquarie",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "sa", label: "SA" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "VIRGINIA, SA",
    name: "Kip Adelaide North",
    price: "From $58",
    id: "kip-adelaide-north-5",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [{ icon: DogDayCareSvg, value: "dog_care" }],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "ALEXANDRIA, NSW",
    name: "Kip Alexandria",
    price: "From $58",
    id: "kip-alexandria-11",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "qld", label: "QLD" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "KURWONGBAH, QLD",
    name: "Kip Brisbane",
    price: "From $58",
    id: "kip-brisbane-1",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "QUEANBEYAN, NSW",
    name: "Kip Canberra",
    price: "From $58",
    id: "kip-canberra-23",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
  {
    gallery: [
      {
        image: CardImage,
      },
      {
        image: CardImage,
      },
    ],
    logos: [
      { icon: DogBoarding, value: "dog_boarding" },
      { icon: CatBoardingSvg, value: "cat_boarding" },
      {
        icon: PickUpSvg,
        value: "pick_up_available",
      },
    ],
    location: { value: "nsw", label: "NSW" },
    tag: "Popular",
    CTA: "BOOK NOW",
    rating: "4.8stars",
    title: "SAWYERS GULLY, NSW",
    name: "Kip Hunter Valley",
    price: "From $58",
    id: "kip-hunter-valley-33",
    stars: 5,
    email: "@kip.com.au",
    description:
      "At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.",
    tell: "0400 000 000",
    faqs: [
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "There’s nothing better than knowing your furry family member is active, safe and happily playing with their pals while you’re at work or out for the day.",
      },
      {
        question: "Can I become a Kip member?",
        answer:
          "On top of providing leading pet boarding Australia-wide, Kip are also leading the way in dog daycare across the country. ",
      },
    ],
  },
];

export const dynamicLocationCards: IServiceCard[] = [
  {
    title: "Pet Boarding Sydney",
    id: "pet-boarding-sydney",
    components: [
      {
        name: "locHero",
        data: {
          tagline: " ",
          title: "KIP SYDNEY RETREAT",
          content: `At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.`,
          imageSrc: "/static/images/about-hero.jpg",
          email: "HunterValley@Kip.com.au",
          loaction:"254 Bathurst St, Sawyers Gully NSW 2326",
          stars: 4.8,
          tell: "(02) 4930 4452",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          logos: [
            { icon: "/static/images/cat_boarding.png", value: "cat_boarding" },
            {
              icon: "/static/images/daycare boarding.png",
              value: "daycare boarding",
            },
            { icon: "/static/images/dog_care.png", value: "dog_care" },
            { icon: "/static/images/dog_boarding.png", value: "dog_boarding" },
          ],
        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "The Pet Boarding Sydney Trusts",
          content: `<p>Are you looking for the most spacious and caring pet boarding Sydney has to offer while you’re away? Look no further than Kip Happy Stays – Sydney’s leading cat boarding and dog boarding facility, just outside of the city. We’ll take care of your beloved pet, ensuring they have no shortage of love, affection, and space while you’re gone!</p> 
          <p>With Kip, your little (or big) friend will never be short of hugs or attention from our caring staff, nourishing meals, or activities to dive into. Surrounded by other friendly, furry pet pals, your pet will stay sociable and make plenty of friends.</p>
          <p>Enjoy your trip away, with the peace of mind that your pet will be enjoying their holiday too. Happy days and happy stays, for your four-legged friends at the pet hotel Sydney pet owners can trust.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-1.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Kip’s Dog & Cat Boarding Services",
          content: `<p>We believe that the best pet hotel Sydney can offer must account for the needs and personalities of all pets. As such, our spaces have been designed with your furry friends in mind. Set in the natural Hunter Region, our Hunter Valley and Lake Macquarie facilities have everything your pet needs and more to account for all preferences at <a href="/services/dog-daycare/"> puppy and doggy daycare</a> and pet boarding.</p> 
          <p>Booking with Kip means having your little friend personally transported from your home in Sydney out to our exceptional Hunter Valley or Lake Macquarie facilities, where they will have acres upon acres to play and relax. Why should you be the only one to enjoy a holiday? Our dedicated pet resort will help your four legged friend to find their inner peace.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-2050-scaled-e1618814984550.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name:"title",
         data:{
           title:"Kip Accomodation"
           }
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "A Safe Pair of Hands",
          content: `<p>Your pet’s happiness is our top priority. As the best dog boarding and cat boarding Sydney can offer, we pride ourselves on the level of comfort and activity provided by our fantastic staff. No need to bring any of your own bedding from home – we’ve got plenty!</p>
          <p>For your pooch, choose from the ultimate in pet resort-style rooming, our luxurious villa or our cosy, classic room – a private haven for your pup!</p>
          <p>For your feline, our comfortable, luxurious kitty rooms will keep your furball clean, comfortable, and safe.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-3139-2.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Luxury Villas",
          content: `<p>For quieter or pampered doggies, treat them to a stay at our Kip Hunter Valley luxury villas. We’ve set up luxury villas with all the comforts they enjoy at home. Each villa has a private indoor area and supersized private outdoor grass yard with plenty of room to run around in or to say hello to the neighbours.</p>
          <p>Our luxury villas are complete with a television and a comfy single bed complete with blankets. Here, your pet can take it easy and soak in the sun or rest by the air conditioner. Ultimate relaxation!</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-1719-2.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],

        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Classic Rooms for Dogs",
          content: `<p>Alternatively, our homely classic rooms are spacious and well-insulated, so your pup will enjoy a comfortable temperature no matter the weather. This resort-style room includes a private indoor and sunny grass yard. The classic room has 20sqm of personal space per pet. At Kip, space and access come as the standard. Our sunlit rooms are a home away from home with a cosy bed and a warm blanket.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-1214.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Classic Room for Cats",
          content: `<p>In a climate-controlled environment with a substantial private play area and climbing apparatus, your little friend will be treated to a life of premium luxury, cuddles, and love. Our cat-loving crew will make this the time of your cat’s life.</p>
          <p>Our classic room for cats offers multi-level accommodation to suit all climbing needs. It is complete with plenty of space and comfortable bedding to develop a safe and secure environment. Here, your cat will feel right at home – with couches, cubby houses, sunny courtyards, an air conditioner and television, your cat won’t ever want to leave!</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-816new-e1624514646634.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],

        },
      },
      {
        name:"title",
        data:{
          title:"What Does Pet Boarding Sydney Include?"
        }
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Your Pet's Ideal Staycation",
          content: `<p>Every Kip Sydney cat or dog boarding resort vacation comes with premium quality dry foods, a spacious, private room complete with both outdoor and indoor space, as well as one-on-one playtime with our crew.</p>
          <p>As the <strong>leading Sydney pet hotel</strong>, Kip there will always be plenty of staff around take care of every need or even just play a game of fetch! At Kip, we’re not your traditional boarding facility – you can personalise your pet’s stay with us. Simply choose to add extra treats or activities to their cat ordog boarding Sydneystaycation, like added walks and playtimes for a holiday your four-legged friend won’t forget!</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-949.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Packages for Dogs",
          content: `<p>Kip Happy Stays offers a number of different packages to account for your pooch and all their preferences!</p>
          <p>Our complimentary package ‘Quality Care’ comes with premium dry food served every morning, a one-on-one playtime in our large grass play yard and a warm hydro bath and blow dry on departure.</p>
          <p>Our most popular package at Kip Hunter Valley, ‘Triple Fun’ comes with premium dry food at breakfast and dinner, a one-on-one playtime in our supersized grass play yard, a personalized bushwalk each day on our 10-acre property, a one-on-one splash in our doggie water fun park and a warm hydro bath and blow dry on departure for only an extra $25 per day.</p>
          <p>Our ‘Luxury Pooch’ package , available at Kip Hunter Valley, comes with premium dry food for breakfast, a delicious warm roast chicken dinner every night, a warm hydro bath and blow dry on departure, as well as scheduled playtime and a bushwalk each day.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-1233.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],

        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Packages for Cats",
          content: `<p>Kip Happy Stays offers several varying packages for your kitty to give them a personalized, simply pawesome cat boarding Sydney experience.</p>
          <p>Our complimentary package, ‘Comfortable Care’ provides a climate-controlled environment for your cat, daily wander time in our cat living room and sunny courtyard, premium dry food served in the morning and a daily video update.</p>
          <p>Our most popular package at Kip Hunter Valley, ‘Cuddle Time’ offers a climate-controlled environment, extended wander time in our cat living room and sunny courtyard, premium dry food served twice daily, a one-on-one playtime including cuddles and a brush as well as a daily video update for only an extra $20 per day.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-802-scaled-e1597395741703.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],

        },
      },
      {
        name: "hero",
        data: {
          tagline: "",
          title: "Getting your pet chauffeured from Sydney",
          content: `<p>To facilitate our exceptional pet boarding services for Sydneysiders,Kip offer transportation from the city out to our Hunter Valley and Lake Macquarie retreat.</p>
          <p>Our pet chauffeur service takes the stress away from having to organize another trip on top of your getaway. Your pet will be collected from your home and travel to our pet hotel in the Hunter Region in the comfort of a fully air-conditioned van. A Kip crew member will accompany your pet to keep them comfortable and secure throughout their journey – whether it be <a href="/locations/dog-boarding-sydney">dog boarding Sydney </a>or forcat boarding. When it’s time to return home in Sydney, we’ll personally drop your happy family member back to your door.</p>
          <p>Pick-ups are always completed in the morning, typically between 6-9:30am for the Sydney Region, and between 7-10am for the local Hunter/Newcastle region.</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-1581.jpg",
          cta: [{ name: "Book now", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "serviceSteps",
        data: serviceSteps,
      },
      // {
      //   name: "readyForStay",
      //   data: {
      //     tagline: "Ready for a stay?",
      //     sub_title: "Give your beloved dog the comfort and care they deserve.",
      //     title: "Ready to Experience Happy Stays at Kip Dog Boarding?",
      //     textColor: "text-purple-900",
      //     content: `<p>Contact us today to reserve a spot at our premium cat boarding facility. Whether you're in NSW, QLD, or SA, our conveniently located centers are here to provide your cat with an unforgettable and contented stay. Trust Kip Cat Boarding to keep your feline companion happy, healthy, and safe while you're away.</p><p>Because at Kip, every stay is a purr-fect stay!</p>`,
      //   },
      // },
      {
        name: "faqs",
        data: {
          title:"Frequently Asked Questions",
          faqcards:[
          {
            question: "How Much Does Pet Boarding Sydney Cost?",
            answer: `<p>Sydney pet escapes start at $52 a day for dogs and $33 a day for cats for the classic rooms. Our doggy luxury villa at Kip Hunter Valley starts at $91 per day. All bookings require a deposit.</p>`,
          },
          {
            question: "Can I Get a Discount for Additional Pets?",
            answer: `<p>Pet siblings are more than welcome at Kip! We offer discounts for pets from the same family. Please look at the specific dates you are looking for to confirm the pricing for the period.</p>`,
          },
          {
            question: "What If My Pet Takes Medication?",
            answer: `<p>Our experienced and caring pet hotel Sydney staff will ensure that your dog's or cat's needs are taken care of just as they would at home. Simply pack your pet’s medication in a labelled container and let our team know. We’ll deliver the medication to your specifications. We charge $5 a day for the preparation and administration of medication under our care.</p>`,
          },
          {
            question: "Does Kip Cater to Special Dietary Requirements?",
            answer: `<p>The happiness of your cat or dog is our priority. If you would prefer, you are more than welcome to bring your own pet food. If you do elect to bring your own food, ensure that it is labelled correctly.</p>`,
          },
          {
            question: "Is Pet Boarding Safe?",
            answer: `<p>At Kip, we work tirelessly to ensure your car or dog's safety, comfort, and happiness. Our professional team have years of experience in caring for pets of all breeds in providing regular health and weight checks. If needed, our network of veterinary specialists is always on call. Our systems prioritize tender loving care from anything like medication needs to special dietary requirements.</p>`,
          },
          {
            question: "Can I Inspect Kip’s Facilities?",
            answer: `<p>Absolutely! At Kip, we’re proud of our world-class pet hotel Sydney and welcome all pets. We encourage all pet parents to inspect our accommodation before your stay to put your minds at ease.</p>
            <p>Please contact our team to arrange an inspection during our opening hours.</p>`,
          },
        ],
      }
      },
    ],
  },
  {
    title: "Dog boarding brisbane",
    id: "dog-boarding-brisbane",
    components: [
      {
        name: "locHero",
        data: {
          tagline: " ",
          title: "KIP BRISBANE",
          content: `Happy days and happy stays for four-legged friends.`,
          imageSrc: "/static/images/about-hero.jpg",
          email: "Brisbane@Kip.com.au",
          tell: "(07) 3888 2909",
          location: "353 Narangba Rd, Kurwongbah QLD 4503",
          stars: 4.7,
          cta: [{ name: "Book now ", link: "/contact-us" }],
          logos: [
            { icon: "/static/images/dog_boarding.png", value: "dog_boarding" },
          ],
        },
      },
      {
        name: "hero",
        data: {
          title: "Reinventing Brisbane Dog Boarding",
          content: `<p>At Kip, our experienced, dog-loving staff’s main priority is the safety and happiness of your four-legged friend! We’re paw-sionate about your dog’s happiness and aim to give them the best day, every day. </p>
          <p>Kip Happy Stays are reinventing dog boarding. As the premium dog boarding Brisbane facility, our world-class accommodation will ensure that your dog has plenty of attention and activities to keep them engaged. With Kip, your little (or big) friend will enjoy high-quality, premium foods, treats and plenty of space to ensure maximum relaxation!</p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-2912-scaled-e1617941507991.jpg",
            backgroundImage: "/static/images/image-corner.svg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "title",
        data: {
          title: "Kip Brisbane Accommodation",
        },
      },
      {
        name: "hero",
        data: {
          title: "A Pup Staycation",
          content: `<p>Kip has several boarding and <a href="/services/dog-daycare/" >doggy daycare Australia</a> locations around the country, including our luxurious Brisbane boarding kennels, located just a stone’s throw from North Lakes, residing on acres of beautiful bushland. Our facilities have everything your pet needs and more so that dogs of all personalities and preferences have their needs met and exceeded!<br>
          <br>
          Kip Brisbane provides a private room for every pup with a personal grassy yard, as well as plenty of time for exercise in our massive play yards, on our picturesque bushwalking trails or in our custom-built doggy water fun park! Your dog will also enjoy nutritious meals, treats and, most im-paw-tantly, expert care from our incredible team of pet-lovers. No need to bring any extra bedding or toys from home – we’ve got plenty to choose from!</p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-860-1.jpg",
          backgroundImage: "/static/images/image-corner.svg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "hero",
        data: {
          title: "Luxury Villas",
          content: `<p>Our dog boarding Brisbane accommodation isn’t like any other facility. Here at Kip, we pride ourselves on going the extra mile.<br>
          </p><p>
          In our luxury villas, your pooch can stretch out and enjoy all the creature comforts you’d expect from resort-style accommodation. The luxury villa is perfect for quieter, more reserved dogs who value privacy, whilst also being just as suitable for sociable dogs who love to make friends. There’s plenty of space to run around in and to say ‘Hi” to the neighbours!</p>
          <p>Starts from $99 per day</p>`,
          imageSrc:
            "/static/images/LakeviewPetRetreatWEBOPTIMIZED-HEAVYCOMPRESSION1-1-of-12-e1618803531428.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Classic room",
          content: `<p>Our spacious ‘Classic Rooms’ are a private haven for your furry friend, spacious enough that your little (or big) friend is always comfortable.<br>
          </p><p>
          The boarding kennels Brisbane rooms offer access to a private outdoor grass yard as we believe space and comfort should come as a standard. Our resort-style rooms are so big they could fit a full-size double bed, so even our largest furry guests have plenty of room to chill in.<br>
          </p><p>
          Our spacious rooms come equipped with a cosy bed for your four-legged friend to relax in after an awesome day full of fun!</p>
          <p>Starts from $56 per day</p>`,
          imageSrc:
            "/static/images/LakeviewPetRetreatWEBOPTIMIZED-HEAVYCOMPRESSION1-10-of-12-e1618803056252.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "hero",
        data: {
          title: "Happy Stays & Happy Days",
          content: `<p>The Kip Dog Hotel Brisbane is the perfect place for your pup while you’re away. Enjoy your time off while your dog enjoys theirs! Endless amounts of cuddles and playtimes with our lovely staff and other dog pals is just one part of what Kip Happy Stays have to offer.</p>
          <p>
          As the leading dog boarding facility in QLD, we pride ourselves on the level of comfort that is on offer, and the wide range of our activities. Your dog’s happiness and safety are our primary concerns. At Kip, there’s something for every pup!</p>
          <p>You won’t miss out on the fun either, as regular photo and video pup-dates of your dog’s day will be sent directly to you. With Kip, your pup will have access to a home away from home, complete with countless pet pals to have fun with!</p>`,
          imageSrc: "/static/images/dog1.png",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Extra Activities for Active Pups",
          content: `<h5>Playtime</h5>
          <p>Add on an extra playtime in our luscious grassy yards every day, supervised by one of our highly trained experts.</p>
          <h5>Swims In Our Water Fun Park</h5>
          <p>For those dogs who love to cool off in the pool, add on a splash in our doggie water fun park! (Brisbane pool currently closed for repairs.)
          </p><h5>Bush Walks</h5>
          <p>For dogs who love to explore the great outdoors, why not add on a bushwalk each day around our paw-fect property?</p>
          <p>All extra activities come at an added cost of only $11.</p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-436-scaled-e1598416208953.jpg",
            backgroundImage: "/static/images/image-corner.svg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "hero",
        data: {
          title: "Safety",
          content: `<p>Our Brisbane Boarding Kennels have been developed with safety as the utmost consideration and priority. With Kip, you don’t have to worry at all.</p>
          <p>Our animal-loving team gives your four-legged friend the same love, care and attention that they’re used to at home. From safely exploring our acres of land to supervised playtimes with other pet pals, you can rest easy knowing that your dog is having a wonderful, engaging and safe holiday.</p>
          <p>Our resort-style accommodation offers private rooms to all our furry friends. Each room leads to a fully secure outdoor grass yard which your pup has all to themselves. From there, they can say “hello” to their neighbours, stretch their legs or enjoy a snooze in the sun.</p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-1039-scaled-e1618803895249.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Treats and Meals",
          content: `<p>Treats and MealsIs your dog on a special food plan? Here at Kip Brisbane, feeding your dog the same high standard of food as they get at home is just one part of our expert level of care.
          </p> <p>We serve high-quality Royal Canin dog food to all our guests, with processes in place to make sure your dog isn’t eating too little (or too much!).</p>
          <p>f your dog is on a specialised diet, we are more than happy to serve meals from home. Just bring them along at check-in or give them to our friendly driver if you’re getting home pick up. It’s just part of providing the best dog boarding Brisbane, Australia has to offer.</p>
          <p>You can even add in extras to make your puppy’s stay as unique as they are. The animal-loving foodies at Kip have put together a great treats menu for your pup.</p>
          <p>Paw-sonalise your furry friend’s stay with treats such as pigs ears, small bones, roo-stick or peanut butter Kongs.Book NowTestimonials</p>`,
          imageSrc: "/static/images/kipfood.png",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "ourServicesDetails",
        data: {
          data: [
            {
              title: "Acres of Outdoor Space",
              body: "With endless areas of our door space, Kip offers acres of outdoor space for your pup to explore safely, as well as four spacious green yards and bushwalking trails. One-on-one playtime with our experienced carers comes as the standard.            ",
              backgroundColor: "bg-blue-150",
              color: "text-blue-750",
            },
            {
              title: "Water Fun Park",
              body: "Our brand-new doggy water fun park is one of the first in Brisbane and has been an absolute winner with all of our four-legged customers! If your dog loves to splash and swim or even just wants to enjoy the summer day, make sure you check out our Triple Fun package to add a pool play to your stay. (Brisbane pool currently closed for repairs.)",
              backgroundColor: "bg-yellow-75",
              color: "text-purple-900",
            },
            {
              title: "Paw-sonal Service",
              body: "All of the staff at our Brisbane facility are animal lovers through and through. They’re experienced, specialist carers that love playtimes and cuddles just as much as your dog does! As the dog kennels Brisbane locals can count on, our staff have developed the highest level of care.",
              backgroundColor: "bg-pink-150",
              color: "text-pink-750",
            },
          ],
        },
      },
      {
        name: "serviceSteps",
        data: serviceSteps,
      },
      // {
      //   name: "readyForStay",
      //   data: {
      //     tagline: "Ready for a stay?",
      //     sub_title: "Give your beloved dog the comfort and care they deserve.",
      //     title: "Ready to Experience Happy Stays at Kip Dog Boarding?",
      //     textColor: "text-purple-900",
      //     content: `<p>Contact us today to reserve a spot at our premium cat boarding facility. Whether you're in NSW, QLD, or SA, our conveniently located centers are here to provide your cat with an unforgettable and contented stay. Trust Kip Cat Boarding to keep your feline companion happy, healthy, and safe while you're away.</p><p>Because at Kip, every stay is a purr-fect stay!</p>`,
      //   },
      // },
      {
        name: "faqs",
        data: {
          title:"Frequently Asked Questions",
          faqcards: [
            {
              question: "How Much Does Dog Boarding Cost?",
              answer: `<p>Our services start at $56 a day for the classic room and $99 a day for the luxury room. All bookings require a 10% pre-payment.</p>`,
            },
            {
              question: "What Does Kip Brisbane Dog Boarding Include?",
              answer: `<p>Every resort holiday at Kip includes a spacious room complete with private indoor and outdoor space, one-on-one playtime with our animal-loving team of carers and premium dry food. Your pup will also be treated to a luxurious warm hydro bath and blow dry on departure.</p>`,
            },
            {
              question: "Where Can I Board my Dog Overnight?",
              answer: `<p>Kip Brisbane offers both long and short-term dog boarding. Our animal-loving team of carers are paw-sionate about your pets and give them the same love and care as they’d get at home.</p>`,
            },
            {
              question: "Is Dog Boarding safe?",
              answer: `<p>Part of providing the best dog boarding experience is our focus on safety. Our team of trained professionals have years of experience in caring for dogs of all breeds and providing regular health and weight checks. Our network of vets are available 24/7.</p>
              <p>All of our activities are closely supervised by a staff member, making sure that all our guests are safe, supervised and given the attention they deserve. You can rest easy knowing that your precious pup will enjoy a safe, fun and engaging environment at our resort-style dog boarding Brisbane facility.</p>
              <p>Pet parents are encouraged to come for a visit to our luxurious dog boarding kennels Brisbane spaces. We’re proud to own the best dog boarding facilities and care in Brisbane. Please contact our team to arrange an inspection during opening hours.</p>
              <p>Our team of trained professionals have countless years of experience in caring for dogs of all breeds, shapes and sizes and will provide regular health and weight checks. If needed – our network of vets is on call 24/7. At Kip Dog Boarding Brisbane Australia, you can be sure that we will be completely transparent in the service and care we provide your precious pup with. More than anybody, we understand the emotional attachment one has with their dog and how stress-inducing it can be to leave them in the hands of someone else.</p>
              <p>Kip combines tender loving care with decades of experience. If your dog takes medication, we are more than happy to administer it to your specifications. Ensure that any medication is labelled correctly and with instructions if needed so that we can distribute it properly.</p>`,
            },
            {
              question: "What if My Pet Takes Medication?",
              answer: `<p>At Kip, our experienced staff ensure your pooch’s medication needs are taken care of just as they would be at home. Simply pack your pet’s medication in a well labelled container and let our helpful dog boarding team know. We have processes in place to take care of and administer your pup’s medication to your specifications. We charge $5/day for the preparation and administration of medication for pets under our care.</p>`,
            },
            {
              question: "Do You Offer a Dog Chauffeur Service?",
              answer: `<p>You bet! Our pet chauffeur service takes the stress away from having to organise another trip on top of your own. With Kip, a crew member can collect your pet from your home and transport them to our luxurious dog hotel Brisbane in the comfort of a fully air-conditioned van. A crew member will accompany your pet to keep them feeling secure and relaxed along their journey.</p>
              <p>When it’s time to return home, we’ll drop your happy family member back at your door personally!</p>`,
            },
            {
              question: "Can I Inspect Kip's Accommodation?",
              answer: `<p>Absolutely, we’d love to meet you! We’re proud of our top-notch facilities and welcome all members of the Kip family to our locations across Australia. We encourage all pet parents to come and inspect our accommodation before your stay. Please contact a member of our team to arrange an inspection during opening hours.</p>`,
            },
            {
              question: "Can I Get a Discount for Additional Pets?",
              answer: `<p>At Kip, we welcome pet siblings. We offer additional pets from the same family a 20% discount for accommodation when sharing a room.</p>`,
            },
            {
              question: "Can I bring my own food?",
              answer: `<p>The happiness of your pup is our priority. We provide premium quality Royal Canin dog food as part of our dog boarding service and make sure to check your dog is well-fed every day. However, you are more than welcome to bring your own food to our resort if you’d prefer. This service costs $3 per pet per day. If you would like to bring your own food, please make sure it’s well labelled to help us serve the right meals at the right times.</p>`,
            },
          ],
        },
      },
    ],
  },
  {
    title: "Dog Daycare Adelaide",
    id: "dog-daycare-adelaide",
    components: [
      {
        name: "locHero",
        data: {
          tagline: " ",
          title: "Kip Broadview",
          content: `At Kip, we’re all for the good times. Our number one priority is giving your dog the best day, every day.`,
          imageSrc: "/static/images/DSC_0867-1-scaled-e1616973525878.jpeg",
          email: "Broadview@Kip.com.au",
          tell: "(08) 8465 1051",
          location: "613B Regency Rd, Broadview SA 5083",
          stars: 4.7,
          cta: [{ name: "Book now ", link: "/contact-us" }],
          logos: [
            {
              icon: "/static/images/dog_care.png",
              value: "daycare boarding",
            },
          ],
        },
      },
      {
        name: "hero",
        data: {
          title: "Adelaide’s Best Doggy Daycare",
          content: `<p>At Kip, we’ve created the safest, happiest environment for dogs across SA of all different breeds, shapes, and sizes. At both our Allenby Gardens and Broadview locations, your furry friend will receive the highest quality of care, take part in exciting activities, and make plenty of friends with other pet pals. Oh, and don’t forget the endless cuddles on offer!</p>
          <p>Our world-class facilities with outdoor areas have been custom-built with one thing in mind: creating a home away from home for your pup. We know how hard it can be to leave your best friend in the hands of someone else, which is why we’ve gone to every length in creating the best environment for dogs in need of day to day care.</p>
          <p>Kip is the place to be for doggy day care services. </p>`,
          imageSrc:
            "/static/images/228713888_3030678010537938_6585555709041853198_n.jpeg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Reinventing Doggy Day Care in Adelaide",
          content: `<p>With the many stresses and commitments of modern life, have you been having difficulty finding the time to take your dog for a walk or play when you get home? Maybe your pup requires a certain level of physical and mental stimulation every day. Whatever your situation may be, there’s no need to worry; Kip's <a href="/services/dog-daycare/">puppy day care</a> in Adelaide South Australia has got you and your furry friend covered.</p>
          <p>Created by animal lovers, for animal lovers, we’re paw-sionate about your pup’s happiness and safety. At Kip Happy Stays, you can be sure that your furry friend will have plenty of time alongside our amazing staff and other happy Kip members to zoom around our air-conditioned, indoor play centre or relax in our designated ‘chill’ areas. By the time they get home, they’ll be all tuckered out and ready for a Kip!</p>
          <p>Our expert Kip doggy day care crew have plenty of experience managing groups of pups and know exactly how to mix up the day to make it a balanced, engaging atmosphere and a positive socialisation experience. </p>`,
          imageSrc:
            "/static/images/235728402_263202145385922_8592426270030924605_n-scaled.jpg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "title",
        data: {
          title: "Getting Started with Kip",
        },
      },
      {
        name: "hero",
        data: {
          title: "How it Works",
          content: `<p>A Kip doggy day care day typically starts bright and early at 6:30am, so that our pet parents can drop off their fun-loving furballs on their morning commute to work.</p>
          <p>We start the day by finding the right group of pet pals for every pup based on their size, personality, likes and dislikes so that your dog can enjoy their time with other like-minded doggo’s. The day will be divided into two play sessions in the indoor or outdoor area: morning and afternoon, with quiet time in between to relax and recharge. This method provides a healthy balance, ensuring every pup has a great time and looks forward to their next visit. </p>`,
          imageSrc: "/static/images/KIP-Happy-Stays-2039-new.jpeg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Your Dog’s First Day",
          content: `<p>Before your dog can join the Kip family, we must ask they complete a trial day with us to assess their suitability for the environment. All current Kip companions <a href="https://kip.com.au/services/dog-daycare/" <a="" tabindex="0">dog daycare Australia</a>-wide have passed this assessment, ensuring the health and safety of everyone involved.</p>
          <p>Trial days are usually held on our quieter days so that your dog can have a calm introduction to the environment. On this day, we’ll match your dog with a small group of regulars that play well with new dogs so that we can see how they settle in. Once they’ve had the chance to meet some other pups and explore all the new senses, sounds and smells, we’ll introduce them to more of the other dogs for positive socialisation.  </p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-2912-scaled-e1617941507991.jpg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "hero",
        data: {
          title: "Trial Day Requirements",
          content: `<ul><li> Dogs must have had their final vaccine 10 days before attending</li>
          <li>Dogs must be de-sexed by six months</li>
          <li> Pet parents must present an up-to-date C5 vaccination certificate</li></ul>
          <p>Pet parents must have completed the Kip Enrolment FormOn our trial days, we ask that you or a friend be available on short notice after the drop off in the event you need to pick up your dog.</p>`,
          imageSrc:
            "/static/images/259bd66720888259045ba1f44f679a91-1-e1613612484121.jpeg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "title",
        data: {
          title: "What's Included in Kip Doggy Daycare?",
        },
      },
      {
        name: "hero",
        data: {
          content: `<h5>Kip's Facilities</h5>
          <p>At our dog daycare in Adelaide South Australia, your furball friend will get the opportunity to discover our many fully air-conditioned play stations and make friends with plenty of other like-minded pals. Your dog will also have access to water throughout the day, and our team of expert carers will reward good behaviour with tasty treats.</p>
          <p>Our experienced team of animal-loving staff know exactly how to balance the day, whether it be time for a game of fetch, play, or time for some rest.</p>
          <p>Your four-legged friends will be in good hands with any of our Adelaide facilities.</p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-2230-3-scaled-e1598256940238.jpg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "hero",
        data: {
          content: `<h5>Home Away from Home for Your Pup</h5>
          <p>Your doggy’s day is divided into two morning and afternoon play sessions. In between, we’ll have quiet time so they can recharge for more fun. This has a positive impact on socialisation and tasty treats are a reward for those pups with good behaviour!</p>
          <p>At doggy daycare, your dog will spend their day socialising, playing and experiencing plenty of cuddles from our fantastic and caring staff. With Kip, your dog will be having so much fun, you’ll want in too! Don’t worry – we’ve got you covered. We share some of the best Kip moments through our customer portal and social media pages every day, so make sure you give us a follow to stay in the loop with birthday parties with their furry friends and other memorable moments.</p>`,
          imageSrc: "/static/images/DSC_0864-scaled-e1626926908929.jpg",
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "title",
        data: {
          title: "Pricing and Memberships",
        },
      },
      {
        name: "hero",
        data: {
          content: `<h5>Kip Daycare Adelaide Memberships</h5>
          <p>Join the Kip family today with a special introductory offer on <a href="https://kip.com.au/doggy-daycare-cost/" <a="">doggy daycare costs</a>! For just $45 per week, you get:<br>
          </p>
          <ul>
          <li>Unlimited extra daycare days for just $39 each!</li>
          <li>10% off all retail</li>
          <li>10% off all washes</li>
          <li>10% off all transport</li>
          </ul>	
          <p>
          The membership is flexible, which means after the initial period, you can cancel at any time, so you don’t need to pay when you go away.<br>
          </p><p>
          What’s more is, a Kip membership is for the whole family of furry friends – meaning just one single dog membership gives you access to benefits for all of your pups who attend our daycare services. </p>`,
          imageSrc: "/static/images/Broadview.png",
          cta: [{ name: "Book now ", link: "/contact-us" }],
          isReverse: true,
        },
      },
      {
        name: "serviceSteps",
        data: serviceSteps,
      },
    ],
  },
  {
    title: "Cat Boarding Adelaide",
    id: "cat-boarding-adelaide",
    components: [
      {
        name: "locHero",
        data: {
          tagline: " ",
          title: "KIP ADELAIDE HILLS",
          content: `At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.`,
          imageSrc:
            "https://kip.com.au/wp-content/uploads/2020/07/KIP-Happy-Stays-860-1.jpg",
          email: "AdelaideHills@Kip.com.au",
          tell: "(08) 7078 3051",
          location: "77 Watts Road, Brukunga",
          stars: 5,
          cta: [{ name: "Book now ", link: "/contact-us" }],
          logos: [
            { icon: "/static/images/cat_boarding.png", value: "cat_boarding" },
            { icon: "/static/images/dog_boarding.png", value: "dog_boarding" },
          ],
        },
      },
      {
        name: "hero",
        data: {
          title: "The Cattery Adelaide Locals Trust",
          content: `<p>At Kip, we’re reimagining cat boarding. We believe that your cat’s boarding experience should be no different to the level of premium, tender loving care they’re used to at home. We’re not your traditional cattery, we’re a pet resort, where your cat will be treated to 5-star service, spacious facilities, and comfortable accommodation.</p>
          <p>With Kip cat boarding Adelaide, your feline friend will be able to stretch out in their own personal room complete with cosy furniture and insulation or kick back and relax in our luxurious outdoor space. Space, comfort, and access come as the standard at Kip cat boarding Adelaide.</p>
          <p>We know that boarding can be a stressful experience for both you and your cat, which is why we’ve worked hard to create a home away from home for our Kip family.</p>
          <p>Relax on your holiday, with peace of mind knowing your best friend is in good hands. At Kip, their staycation will be simply purr-fect.</p>`,
          imageSrc:
            "https://kip.com.au/wp-content/uploads/2020/08/LakeviewPetRetreat1-10-of-12-scaled-e1649904773838.jpg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "Cat Boarding Adelaide",
          content: ` <p>At Kip, we’ve worked tirelessly to create the most comfortable, inviting, and safe environment, fit for cats of all kinds. We believe that to be the best cattery in Adelaide, our facilities and staff must account for the needs and personalities of all cats, not just some.</p>
          <p>We’ve applied this philosophy in every aspect of our facilities, offering an extensive range of choice so that your cat will be comfortable and happy, no matter the situation. Your cat’s boarding experience should mirror the same level of love and affection they’re used to at home, and with Kip Adelaide, it will.</p>
          <p>Sitting on acres of space, our cattery Adelaide facilities have everything your cat will ever need and more.</p>`,
          imageSrc:
            "https://kip.com.au/wp-content/uploads/2020/07/KIP-Happy-Stays-932.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "title",
        data: {
          title: "Kip Accommodation",
        },
      },
      {
        name: "hero",
        data: {
          title: "Penthouse Suites",
          content: `<p>Our paw-sitively luxurious Penthouse Suites are designed for ultimate feline fun and maximum comfort. A climate-controlled environment with a substantial private play area, nooks for napping and climate apparatus, your little friend will be treated to a life of premium luxury, endless cuddles, and tender loving care. Your furry friend will be treated to premium nutritious food and the best cuddles in the business from our cat-loving, experienced Kip crew every single day. </p>`,
          imageSrc:
            "/static/images/KIP-Happy-Stays-781.jpg",
            cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
      {
        name: "hero",
        data: {
          title: "",
          content: `<p> We’ve custom designed our cat space with a lounge zone, television, and cat courtyard. Each cat will receive one-on-one time with our cat-loving team and free wander time in our sunny courtyard. Cats will be able to choose where they want to go and when! At Kip, there’s a place for friendly, energetic cats, as well as quieter and more reserved cats. We find that most cats settle in very quickly and have a happy stay lounging in their comfortable accommodation, with the occasional trip outside for some sunbaking.</p>
          <p>Choose from our penthouse suite designed for luxurious fun or our classic room to keep your furball clean, comfortable, safe, and engaged!</p>`,
          imageSrc:
            "https://kip.com.au/wp-content/uploads/2020/08/KIP-Happy-Stays-802-scaled-e1597395741703.jpg",
          isReverse: true,
          cta: [{ name: "Book now ", link: "/contact-us" }],
        },
      },
//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms",
//           content: `<p>Comfortable, clean, and safe, our classic room for cats offers multi-level accommodation to suit all climbing needs and full insulation, keeping your furry friend comfortable no matter the weather. Complete with cosy bedding, toys and plenty of space, your cat will feel right at home. Couches, cubby houses, sunny courtyards, and televisions are the standard at a classic Kip room. Cuddle time during the day, a cosy bed in comfortable quarters at night. It really doesn’t get any better; they might not ever want to leave!</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-872-e1633436115223.jpeg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
            
// //         },
//       },     
//       {
//         name: "hero",
//         data: {
//           title:"Treats and Meals",
//           content: `<p>Does your furball need a special food plan? We’re experts at tailoring menus to match what your cat issued to at home. There’s nothing like knowing your feline friend is comfortable and satisfied, 24/7. Our cat-loving staff supervise mealtimes, and your pet won’t have access to others’ food.</p>
//           <p>We serve premium Royal Canin dry food every morning or, if your cat prefers, we’ll divide their recommended daily portion into two servings, providing both a morning and evening meal.</p>
//           <p>If your cat is on a specialised diet, we’re more than happy to serve meals from home. Just bring them along at check-in and our staff will supervise its delivery to your furry family member!</p>
//           <p>You can also choose to treat your cat to some special added extras – like one-on-one time or yummy treats! Select from our menu of tasty tidbits to create an un-fur-gettable Kip cat boarding Adelaide experience for your loved one.</p>`,
//           imageSrc: "/static/images/kipfood.png",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Safety",
//           content: `<p>At Kip cat boarding Adelaide, the safety of your treasured friend is our absolute number one priority. When you join the Kip family, you won’t have to worry about all; we combine tender loving care with decades of experience caring for cats of all different breeds.</p>
//           <p>From safely exploring our spacious green yards, to supervised playtimes and mealtimes, you can rest easy knowing your cat is having a relaxing, comfortable, fun, and above all, safe holiday.</p>
//           <p>More than anybody, we understand the emotional attachment one has with their cat and how stressful it can be to leave them in the care of someone else. As such, this is why we recommend all pet parents to visit our cattery to see how we’ve set everything up! If this interests you, please contact our team to arrange an inspection during our opening hours.</p>`,
//           imageSrc:
//             "/static/images/greeshma-gangadharan-qoYDRMuxA9U-unsplash-scaled.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       // {
//       //   name: "ourServicesDetails",
//       //   data: {
//       //     data: [
//       //       {
//       //         title: "Acres of Outdoor Space",
//       //         body: "With endless areas of our door space, Kip offers acres of outdoor space for your pup to explore safely, as well as four spacious green yards and bushwalking trails. One-on-one playtime with our experienced carers comes as the standard.            ",
//       //         backgroundColor: "bg-blue-150",
//       //         color: "text-blue-750",
//       //       },
//       //       {
//       //         title: "Water Fun Park",
//       //         body: "Our brand-new doggy water fun park is one of the first in Brisbane and has been an absolute winner with all of our four-legged customers! If your dog loves to splash and swim or even just wants to enjoy the summer day, make sure you check out our Triple Fun package to add a pool play to your stay. (Brisbane pool currently closed for repairs.)",
//       //         backgroundColor: "bg-yellow-75",
//       //         color: "text-purple-900",
//       //       },
//       //       {
//       //         title: "Paw-sonal Service",
//       //         body: "All of the staff at our Brisbane facility are animal lovers through and through. They’re experienced, specialist carers that love playtimes and cuddles just as much as your dog does! As the dog kennels Brisbane locals can count on, our staff have developed the highest level of care.",
//       //         backgroundColor: "bg-pink-150",
//       //         color: "text-pink-750",
//       //       },
//       //     ],
//       //   },
//       // },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       // {
//       //   name: "readyForStay",
//       //   data: {
//       //     tagline: "Ready for a stay?",
//       //     sub_title: "Give your beloved dog the comfort and care they deserve.",
//       //     title: "Ready to Experience Happy Stays at Kip Dog Boarding?",
//       //     textColor: "text-purple-900",
//       //     content: `<p>Contact us today to reserve a spot at our premium cat boarding facility. Whether you're in NSW, QLD, or SA, our conveniently located centers are here to provide your cat with an unforgettable and contented stay. Trust Kip Cat Boarding to keep your feline companion happy, healthy, and safe while you're away.</p><p>Because at Kip, every stay is a purr-fect stay!</p>`,
//       //   },
//       // },
//       {
//         name: "faqs",
//         data: {
//           title:"Frequently Asked Questions",
//           faqcards: [
//             {
//               question: "What Does Cat Boarding Adelaide Include?",
//               answer: `<p>At Kip, every cat will enjoy their own private space, a temperature-controlled room and one-on-one cuddle time with our team! To top it all off, we serve only the best quality Royal Canin dry food and will send daily video updates to keep you in regular contact with your loved one! Cat boarding reimagined with Kip.</p>
//               <p>We’ll be completely transparent in the service and care we provide your cat with. We frequently communicate with our happy Kip members through our customer-facing portal and social media pages, so make sure to chuck us and follow and stay in the loop! We’re proud to own the best cat boarding facilities in Adelaide!</p>`,
//             },
//             {
//               question: "Is Cat Boarding Stressful for Cats?",
//               answer: `<p>We understand how difficult it can be to leave your cat in the hands of someone else. This is why we’ve spent so much time developing an environment that is comfortable, fun, relaxing and happy, staffed with passionate cat-lovers. We find most cats settle in very quickly and have a relaxed, happy stay lounging around and sunbaking within their sunny accommodation, mixing it up now and then to visit our cat courtyard or lounge zone.</p>`,
//             },
//             {
//               question: "How Long Can Cats Stay in a Cattery For?",
//               answer: `<p>At Kip, your cat is welcome to stay with us just overnight or even for a longer-term stay! Talk to our team about your needs, and we’ll be able to discuss your options with you.</p>`,
//             },
//             {
//               question: "How Do Cats Typically React to Catteries?",
//               answer: `<p>As you’re probably aware, every cat is unique and will have differing reactions to the environment. When your cat stays with us, we’ll do everything we possibly can to ensure they’re happy, safe, and having fun. Some may take a little while to settle into the environment, while others will take to it straight away. However, for the most part, we find our cats settle in very quickly due to our relaxing, comfortable environment. Our team of expert staff are experienced in caring for all kinds of cats!</p>`,
//             },
//             {
//               question: "How Much Does Cat Boarding Adelaide Cost?  ",
//               answer: `<p>Cat boarding with Kip starts at $25 per day for the classic rooms. All bookings require a 10% pre-payment. Extra charges will ensue if any of our luxury packages are added to the booking. You can also choose to treat your furball to some special added extras – like more one-on-one time or yummy treats. Select from our menu of tasty delights to create an unforgettable Kip pet hotel experience for your loved one.</p>`,
//             },
//             {
//               question: "Do I Get a Discount for Additional Cats?  ",
//               answer: `<p>Cat siblings are more than welcome at Kip! We offer additional cats from the same family a 20% discount for accommodation when they share a room. Our optional packages are charged per room, so you’ll get double the fun and shared playtime if you add an extra package, all for the price of one! How good?</p>`,
//             },
//             {
//               question: "What if My Cat Takes Medication?  ",
//               answer: `<p>Our experienced cat boarding Sydney staff will ensure that your companion’s needs are cared for, just as they would be at home. Simply pack your cat’s medication in a labelled container and let our team know. We’ll considerately administer your cat’s medication to the outlined specifications. We charge $5 per day for the preparation and delivery of medication for cats under our care.</p>`,
//             },
//             {
//               question: "Can I Bring Food from Home for My Cat?",
//               answer: `<p>At Kip, the happiness of your cat is one of our highest priorities. As such, you’re more than welcome to bring your cat’s own food to our pet resort if you prefer. If you do elect to bring your own food, please ensure it’s well labelled.</p>
//               <p>As the standard, we provide only the best premium Royal Canin dry food as part of our complete service.</p>`,
//             },
//             {
//               question: "Can I Inspect Your Accommodation?  ",
//               answer: `<p>We’d love to have you inspect our accommodation and assess its’ suitability for your cat! At Kip, we’re proud of our top-notch facilities and welcome all members of the Kip family to our locations across the country. Please contact our lovely team to arrange an inspection during opening hours. See you soon!</p>`,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Dog Boarding Hunter Valley",
//     id: "dog-boarding-hunter-valley",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Dog Boarding Hunter Valley",
//           imageSrc: "/static/images/KIP-Happy-Stays-81-e1624590334589.jpeg",
//           backgroundImage: "/static/images/image-corner.svg",
//           content: `<p>Happy stays for four-legged friends</p> `,
//           cta: [
//             {
//               name: "Book now ",
//               link: "/contact-us",
//             },
//           ],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Dog Boarding with Kip Hunter Valley",
//           imageSrc:"/static/images/KIP-Happy-Stays-2141-2-e1598418502332.jpg",
//           content: `<p> At Kip’s Dog Boarding Hunter Valley Retreat, we’re all about happy days and happy stays for your four-legged friends while you’re away. We’re paw-sionate about your dog’s happiness and aim to provide them with a home away from home full of activities, cuddles and relaxation.</p>
//           <p>Kip Happy Stays are reinventing dog boarding. As the premium dog boarding facility in the Hunter region, our highly experienced staff’s main concerns are your pup's safety, well-being, and happiness. Enjoy your holiday while your dog enjoys theirs with Kip!</p> `,
//           cta: [
//             {
//               name: "Book now ",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: " Boarding in the Hunter Valley",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Pooch Accommodation",
//           content: `<p> Have you been looking for a spacious and caring dog boarding facility to keep your loved ones safe while you’re away? Look no further than Kip Hunter Valley – the perfect place for your little (or big) four-legged friend.</p>
//           <p>Kip has several locations around Australia, including our luxurious Hunter Valley boarding kennels, residing on acres of beautiful bushland. Kip’s Hunter Valley facilities have everything your pet needs and more so that dogs of all personalities and preferences can have an enjoyable stay.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2798-2-scaled-e1618803354873.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },

//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms",
//           content: `<p>Our comfy Classic Rooms are a private haven for your furry friend. At Kip, space and access to a private outdoor grass yard come as the standard. Our resort-style rooms also come equipped with a cosy bed and are well-insulated so that your pooch can enjoy a comfortable temperature no matter the weather.</p>
//           <p>Enjoy the many perks that come with booking dog boarding Hunter Valley today!</p>
//           <p>Starts from $71 per day</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2417-3-new-e1624514753380.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],

//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Luxury Villas",
//           content: `<p>Your four-legged friend can enjoy a sunbake from the comfort of their own supersized private outdoor grass yard, relax in their indoor retreat or snooze on their comfortable single bed. Our luxury accommodation comes equipped with reserve cycle air conditioning, soft blankets and a television. It’s so comfortable, you may even want to book a spot for yourself!</p>
//           <p>Starts from $91 per day</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-1723-scaled-e1596534138442.jpeg",
//             isReverse: true,
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Extra Activities for Active Dogs",
//           content: `<p>Kip's dog boarding services in the Hunter Valley offers extra activities to account for your pooch and all their preferences!</p>
//           <h5>Playtime</h5>
//           <p>Add on extra playtime in our grassy yards every day, supervised by one of our highly trained experts!
// </p>
// <h5>Swims in our water fun park
// </h5>
// <p>For dogs who love to cool off in the pool, add on a splash around in our doggie water fun park – an absolute winner with all of our four-legged customers!
// </p>
// <h5>
// Bush walks
// </h5>
// <p>Why not add on an extra bushwalk around our paw-fect property for those pups who love to explore the outdoors?</p>
//           `,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-461-scaled-e1633435683618.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "What Does Dog Boarding with Kip Include?",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: ` 
//           <h5>The Ultimate Staycation</h5>
//           <p>Every Kip dog boarding staycation comes complementary with premium dry food, a spacious room complete with private indoor and outdoor space, and one-on-one playtime with our dog-loving Kip crew. Your pup will also be treated to a luxurious warm hydro bath and blow dry on departure.</p>
 
// <p>At Kip, we leave no stone unturned when it comes to the comfort, safety, and happiness of your pup. We offer world-class facilities and an excellent, experienced team of professionals who love caring for and playing with animals, especially dogs!
// </p> 
// <p>We understand how hard it can be to leave your pup in the hands of someone else but make no mistake; your dog will never feel alone with Kip dog boarding and <a href="/services/dog-daycare">doggy day care.</a> With plenty of other pups around at any given time, your dog can make plenty of friends and feel right at home!</p>
//           `,
//           imageSrc:"/static/images/KIP-Happy-Stays-1214.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,

//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Pet Chauffeur Service",
//           content: `<p>Our pet chauffeur service takes the stress away from organising another trip on top of your own. With Kip, your pup can be collected from your home in the comfort of a fully air-conditioned van before travelling to our Hunter Valley resort.</p>
//           <p>At Kip, safety comes first. Your pup will be accompanied by a Kip member throughout their journey, staying safely secured in their very own individual travel crate. When it’s time to return home, we’ll personally drop your happy, furry family member back at your front door!</p>
//           <p>Our pet chauffeur service is the perfect solution for those in Newcastle, Sydney, and the Central Coast without the time to travel to the Hunter Valley and back.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1291.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],

//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Treats and Meals",
//           content:
//             `<p>Need a special food plan? We’re experts at tailoring menus to match what your pup is used to at home.As a standard, we serve high-quality Royal Canin dog food to all our guests, with processes in place to make sure your dog isn’t eating too little (or too much!).</p>
//            <p> If your dog is on a specialised diet, we’re more than happy to serve meals from home. Just bring them along at check-in and our staff will supervise its’ delivery to your furry family member.</p>
//            <p>Delicious treats are just one of Kip’s many specialties. Paw-sonalise your pup’s stay with a selection of tasty tidbits like pigs ears, small bones, roo-sticks or peanut butter kongs.</p>`,
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           imageSrc: "/static/images/KIP-Happy-Stays-1872-2-e1618803942286.jpeg",
//           isReverse: true,

//         },
//       },
//       {
//         name: "faqs",
//         data: {
//           title:"Frequently Asked Questions",
//           faqcards:[
//           {
//             question: "What Packages Does Kip Hunter Valley Offer?",
//             answer: `<p>At Kip, we’re not your traditional dog boarding kennel; you can paw-sonalise your pup’s stay with us.
// </p> <p>Our packages can come with premium dry food served at breakfast and dinner, extended playtimes, bushwalks and a trip to our doggie water fun park. Otherwise, additional activities can be booked for your doggos!</p>`,
//           },
//           {
//             question: "Is Dog Boarding Safe?",
//             answer: `<p>Our Hunter Valley dog boarding kennels have been developed with safety as the utmost consideration and priority. Our team of trained professionals have years of experience in caring for dogs of all breeds, shapes and sizes and provide regular health and weight checks. Our network of vets is on-call around the clock if needed. We will be completely transparent in the service and care we provide your pup.</p>`,
//           },
//           {
//             question: "How Much Does Dog Boarding Hunter Valley Cost?",
//             answer: `<p>Kip's dog boarding services starts from just $71 a day. All bookings require a 10% pre-payment. At Kip, we welcome pet siblings – we offer additional pets from the same family a 20% discount for accommodation when sharing a room.</p>`,
//           },
//           {
//             question: "Can I Board My Dog Overnight?",
//             answer: `<p>Yes, Kip Hunter Valley offers both long-term and short-term dog boarding. We’ll give your pup the same love and care that they’re used to at home.</p>`,
//           },
//           {
//             question: "What If My Dog Takes Medication?",
//             answer: `<p>Your pup will be well looked after. Our experienced staff ensure that your pup’s medication needs are taken care of. Simply pack your dog’s medication in a well-labelled container and let our helpful team know. We’ll carefully care for and administer the medication to your specifications. We charge an extra $5 per day to prep and deliver medication to dogs in our care.</p>`,
//           },
//           {
//             question: "Can I Inspect Your Accommodation?",
//             answer: `<p>"Absolutely! We’d love to meet you. We’re proud of our top-notch facilities and welcome all members of the Kip family to our locations across Australia.
// Please contact the team to arrange an inspection during opening hours."</p>`,
//           },
//           {
//             question: "Can I Get a Discount for Additional Dogs?",
//             answer: `<p>At Kip, we welcome pet siblings. We’re proud to offer additional dogs from the same family a 20% discount for accommodation when sharing a room. Our optional additional packages are charged per room, meaning if you add an extra package for a room, both pets will get to share the playtime and double the fun!</p>`,
//           },
//         ],
//       }
//       },
//     ],
//   },
//   {
//     title: "Dog Boarding Sydney",
//     id: "dog-boarding-sydney",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Dog Boarding Sydney",
//           imageSrc: "/static/images/KIP-Happy-Stays-1073-2-scaled.jpg",
//           backgroundImage: "/static/images/image-corner.svg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//           isReverse: true
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "At Kip, we're reinventing Sydney dog boarding",
//           content: `<p>After a dog boarding Sydney facility that you can trust? You’ve found us. Here at Kip Happy Stays, we provide the leading pet boarding services for your furry friend while you’re on vacation. Located in Hunter Valley and Lake Macquarie, we have the resources, care and transport to provide your pet with their own memorable getaway while you’re away.</p>
//           <p>Kip Happy Stays make dog boarding easy. Providing the best dog boarding Sydney has to offer, we’re confident your dog will love our special retreat from the hustle and bustle of Sydney. We’ll personally pick up your pup from your Sydney residence, before travelling out to our gorgeous Hunter or Lake Macquarie resort. From there, we’ll bring your much-loved pets back home once you’re settled back in. We aim to provide the same level of care as you would with our dog boarding and <a href="/services/dog-daycare">dog day-care.</a></p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2912-scaled-e1617941507991.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Happy Stays & Happy Days",
//           content: `<p>Kip’s dog boarding main concern is the safety and happiness of your pet. We provide round-the-clock care, world-class pet facilities and daily activities to keep your dog stimulated, such as daily walks, active and stress-free while away from home. Our dog boarding includes comfortable indoor bedding, spacious outdoor play areas, and a team of staff that allow Kip to be the dog hotel Sydney residents can trust.</p>
//           <p>Do your pets require a little bit of special attention? Are on a specific diet? Requires some additional social time to get used to being around other playful dogs? No worries. The lovely staff at Kip provide expert dog boarding services that cater to your furry friend’s every need. We understand the love that you have for your pet companion; they deserve to be treated with the utmost care. That’s why we employ Sydney dog boarding staff that are passionate, friendly, and simply adore taking care of other people’s pets and dogs.</p>
//           <p>It’s time to enjoy your holiday while your little mate enjoys theirs. Kip takes the stress of dog boarding away by picking up your pet from your Sydney residence, taking them for an adventure to our Hunter Valley or Lake Macquarie retreat, and keeping them safe, engaged and happy for the time away from home.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1039-scaled-e1618803895249.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//           isReverse: true,
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Our Accommodation",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Book Your Pooch's Staycation",
//           content: `<p>We have several pet boarding locations around Australia, including our luxurious Kip dog boarding resort near Sydney set on acres of beautiful bushland. </p>
//           <p>Kip dog boarding in Sydney includes a private room for every dog with a personal grassy yard, as well as plenty of time for exercise in our massive play yards, on our bushwalking trails or in our custom-built water park, exclusive to Kip Hunter Valley! </p>
//           <p>Your dog will also enjoy nutritious meals, treats and, most im-paw-tantly, expert care from our incredible crew of animal-lovers. </p>
//           <p>You won’t miss out on the fun, either, with regular photo and video pup-dates of your dog’s day sent directly to you while your pet is away from home.</p>`,
//           imageSrc:
//           "/static/images/KIP-Happy-Stays-2798-2-scaled-e1618803354873.jpg",
     
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms",
//           content: `<p>Our spacious Classic Rooms are a private haven for your pup.</p>
//           <p>At Kip dog boarding kennels Sydney, space and all-day access to a private outdoor grass yard come as standard for all pets. Our resort-style rooms are so big they could fit a full-size double bed, so even our largest dogs have heaps of room to chill in while away from their Sydney home.Our spacious dog kennels come equipped with a cozy bed for your pet to relax in after a day full of play. Each sunlit room comes with some toys so that your furry friend will always have something to play with!</p>
//           <p>Starts from $71 per day</p>`,
//           imageSrc:
//           "/static/images/KIP-Happy-Stays-1214.jpg",
//           isReverse: true,
//           cta: [
//             {
//               name: "Book now",
//               link: "contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Luxury Villas",
//           content: `<p>Our accommodation isn’t like other dog boarding kennels Sydney. </p>
//           <p>Here at Kip we pride ourselves on going the extra mile, for all pets. Explore our Hunter Valley luxury villas, where your pooch can stretch out and enjoy all the creature comforts you’d expect from resort-style accommodation. </p>
//           <p>Your pets can enjoy a sunbake in their own private outdoor grass yard, relax in their indoor retreat after the daily walks and snooze in a cozy single bed while pet boarding.</p>
//           <p>Top it off with reverse-cycle air conditioning, soft blankets and their very own TV and your furball has the ultimate resort-style rooming for dog boarding. </p>
//           <p>Starts from $91 per day</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-1719-2.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name:"title",
//         data:{
//           title:"Packages for every pooch"
//         }
//       },
//       {
//         name: "hero",
//         data: {
//           content: `<h5>Quality Care</h5>
//           <p>The complimentary Kip dog kennels Sydney package ‘Quality Care’ comes with premium dry food served every morning, a one-on-one playtime in our large grass play yard and a warm hydro bath and blow dry on departure.</p>
//           <ul><li>One-on-one playtime per day in our large grass play yard</li>
//           <li>Premium dry food served in the morning</li>
//           <li> Warm hydro bath and blow dry on departure</li></ul>
//           <p>Complementary for all Sydney pets with every Kip Dog Boarding Stay.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-3139-2.jpg",
//           isReverse: true,
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `<h5>Triple Fun Package - for active pups!</h5>
//           <p>Our most popular package for dog and puppy boarding Sydney, ‘Triple Fun’ comes with premium dry food at breakfast and dinner, a one-on-one pet playtime in our supersized grass play yard, a personalised bushwalk each day on our 10-acre property, a one-on-one splash in our water park for dogs and a warm hydro bath and blow dry on departure for only an extra $25 per day. </p>
// <ul>
// <li>Playtime in the water play park</li>
// <li> One-on-one playtime in our supersized grass play yard</li>
// <li>Personalised bushwalk each day in our paw-fect 10 acre property</li>
// <li>Premium dry food served for breakfast</li>
// <li>Warm hydro bath and blow dry on departure</li>
// </ul>
//           <p>Add for only $25 per day, exclusive to Kip Hunter Valley.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-436-scaled-e1598416208953.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `<h5>Luxury Pooch Package</h5>
//           <p>Our ‘Luxury Pooch’ dog boarding package comes with premium dry food for breakfast, a delicious warm roast chicken dinner every night, a warm hydro pet bath and blow dry on departure and an extended playtime as well as a bushwalk each day.</p>
//           <ul>
//           <li>One-on-one playtime in our supersized grass play yard</li>
//           <li>Personalised daily walks through the bush in our paw-fect 10 acre property</li>
//           <li>Delicious warm roast chicken dinner. So good, you’ll wish you could bring a doggy bag!</li>
//           <li>Premium dry food served for breakfast</li>
//           <li>Warm hydro bath and blow dry on departure</li>
//           </ul>	
//           <p>Add for $21 per day, exclusive to Kip Hunter Valley</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-195-scaled-e1618804891810.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Doggy Chauffeur Service",
//           content: `<p>Sydney dog boarding is a cinch with our chauffeur service.</p>
//           <p>On the first morning of your stay, one of our team members will come direct to your house and pick up your dog in Sydney, in one of our air-conditioned Kip Chauffeur Vans. Pick-ups are always completed in the morning, typically between 6-9:30am for the Sydney Region. You can rest assured knowing that our expert drivers will be giving your cat or dog the best quality of care from the moment they’re picked up from your place in Sydney, right up until they meet our full pet crew at the Hunter Valley resort. We just wish you could see your pets light up when they see the grounds for the first time!</p>
//           <p>When it’s time to head home at the end of their dog boarding stay, we’ll personally drop your furry friend back right to your door, wherever you’re located in Sydney city or Greater Sydney. All part of the service we offer as the provider of <a href="#">pet boarding Australians</a> can trust!</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1581.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Treats and meals",
//           content: `
//           <p>Is your dog on a special food plan? Here at Kip, feeding your dog the same high standard of food as they get at home is just one part of our expert level of care within our dog kennels. We serve high-quality dog food to all our dogs, with processes in place to make sure your dog isn’t eating too little (or too much!). And if your dog is on a specialised diet we are more than happy to serve meals from home. Just bring home made meals along at check-in for dog boarding or give them to our friendly driver if you’re getting home pick-up from Sydney. It’s just part of providing the best dog and puppy boarding Sydney experience.</p>
//           <p>You can even add in extras to make your pet’s stay as unique as they are. The animal-loving foodies at Kip have put together the best treats menu for your pup. Paw-sonalise your furry friend’s dog boarding stay with treats such as pigs ears, small bones, roo-stick or peanut butter Kongs.</p>`,
//           imageSrc: "/static/images/kipfood.png",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,

//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `<p>Whether your pup’s a rambunctious ruffian or chilled canine, our team of animal-loving carers will make sure all dogs and pets are getting the right balance of play and chill to suit them while boarding. At Kip dog boarding in Sydney, you can be sure your furry member is getting the same love and care as they would with you at home. Kip offers long- and short-term pet boarding, just outside of Sydney, for your furry friend. Our luxurious dog boarding hotel is more of a resort than a Sydney pet boarding kennel.</p>
//           <p> At Kip Hunter Valley, your furry adventurer can safely explore 10 acres of charming countryside - a mere hop, skip and jump from Sydney. They can check out our many great bushwalking trails, have fun in our four green play yards and even enjoy a splash about at our paw-pose built splash park for dogs and pets.</p>
//           <p>At Kip Lake Macquarie, your pooch can also enjoy local bushwalking tracks, extra playtime with our animal handlers, or even an irresistible roast chicken dinner! With all these alfresco adventures on offer, you just know your furball’s going to have the best time.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-2050-scaled-e1618814984550.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `
//           <p>When it’s time for a kip, your pet can relax in their own private indoor resort-style room with adjoining private outdoor green space. Our Luxury Villa dog boarding rooms, exclusive to Kip Hunter Valley, are climate controlled to ensure your pet is comfortable while pet boarding, whatever the season. And because we know that all dogs are different, we offer different pet boarding accommodation options and packages.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-285-e1618896097841.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,

//         },
//       },
//       {
//         name: "ourServicesDetails",
//         data: {
//           data: [
//             {
//               title: "Acres of Space",
//               body: "Our dog boarding kennels offer plenty of outdoor space for your furry adventurer to safely explore, as well as four spacious green yards and many bushwalking trails while pet boarding with our Sydney service. All of our paw-sonalisable pet boarding packages offer one-on-one outdoor playtime with a member of our friendly, animal-loving crew of Sydney carers. ",
//               backgroundColor: "bg-blue-150",
//               color: "text-blue-750",
//             },
//             {
//               title: "Cool Off in the Water Park",
//               body: "One of the things that makes Kip Hunter Valley the best dog boarding facility is our water splash park. The first of its kind, our water fun park for dogs is paw-pose-built and hugely popular with dogs of all shapes and sizes. Your furry friend can enjoy a splashing time chasing a ball through fountains, cooling off in the pool and playing with one of our Kipsters that are also pet boarding! Please note that the pool is only available at Kip Hunter Valley.",
//               backgroundColor: "bg-yellow-75",
//               color: "text-purple-900",
//             },
//             {
//               title: "Paw-sonal Service",
//               body: "All of our staff at Kip Sydney are animal lovers through and through. They love making your doggo happy and giving them the best day, every day of their pet boarding stay. One-on-one time with one of our Kip carers comes as standard (and a priority) for all pets, with all our boarding packages and services. If you’d like to paw-sonalise your pup’s dog boarding stay, even more, you can schedule extra cuddle time for them with one of our members and add in extra meals and treats to make it feel like home.",
//               backgroundColor: "bg-pink-150",
//               color: "text-pink-750",
//             },
//           ],
//         },
//       },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       {
//         name: "faqs",
//         data: {
//           title:"Kip Boarding Frequently Asked Questions",
//           faqcards:[
//           {
//             question: "What does dog boarding include for pets?",
//             answer: `<p>Every Kip dog boarding Sydney vacation includes the finest dry foods, spacious rooms complete with private indoor and outdoor space, as well as one-on-one playtimes with our dog-loving Kip crew. Kip goes beyond the traditional dog kennel Sydney offerings; we make sure to allow dog owners the ability to personalise their pup’s boarding stay with us. Simply choose to add extra treats or fun activities to their Sydney vacation – like extra daily walks and playtimes for a holiday your four-legged friend is sure to remember. At Kip, we can ensure that there will also be plenty of other dogs for your dog to socialize and make friends with!</p>`,
//           },
//           {
//             question: "How much does dog boarding Sydney cost?",
//             answer: `<p>Kip dog boarding starts at $71 per day for the classic room, including a roomy, private space with an individual grass yard, one-on-one playtimes with our passionate team and premium-grade foods. Our luxury villas, only at Kip Hunter Valley, starts at $91 per day and is complete with a television, toys, and an air conditioner. All boarding bookings require a 10% pre-payment.</p>
//             <p>Our team of trained carers treat all our four-legged guests with the same love and care as they would get at home. You can rest easy knowing your furry family member is staying at a safe, fun, engaging dog hotel Sydney facility and having a pawesome time.</p>`,
//           },
//           {
//             question: "Where can I board my dog overnight?",
//             answer: `<pIdeal for all jetsetters, Kip offers long- and short-term dog boarding for all Sydney-siders. Travelling to our dog hotel is a cinch with our dog chauffeur service. Morning pick-ups mean that your dog will be ready to explore their room and surrounds when they arrive at one of our locations, and you’ll know they got there safe too!</p>
//             <p>Your four-legged friend will be looked after by a trained Kip carer throughout their journey, and the rest of our paw-sionate team of animal-loving carers will be ready and waiting to welcome your dogs to their resort holiday home.</p>
//           <p>When it’s time to head home to you, their parents, we’ll personally drop your happy furry family member back right to your door.</p>`,
//           },
//           {
//             question: "Is dog boarding safe?",
//             answer: `<p>At Kip, we work tirelessly to ensure your pal’s safety, comfort, and happiness while pet boarding with us in Sydney. Our team of trained professionals have countless years of experience in caring for dogs of all breeds and sizes and providing regular health and weight checks. If needed, our network of Sydney vets is always on call around the clock. The safety of your pet is our top priority while boarding!</p>
//             <p>At the Kip dog hotel for Sydneysiders, you can be sure that we will be completely transparent in the pet boarding service and care we provide your dog. More than anybody, we understand the emotional connection one has with their dog and how nerve-wracking it can be to leave them in the hands of someone else. From medication needs to special food requirements, Kip combines tender loving care with decades of pet boarding experience and excellent structural framework to ensure your dog’s safety and put your mind at ease.</p>`,
//           },
//           {
//             question: "What if my dog takes medication?",
//             answer: `<p>No need to stress – at Kip, we’ll ensure that your pup’s medication needs are taken care of just as they would be at home. Simply pack your dog’s medication in a labelled container and let our pet boarding team know. We will carefully administer pets medication to the outlined specifications. Kip Happy Stays charge $5 a day for the preparation and administration of medication in our care.</p>`,
//           },
//           {
//             question: "Can I inspect Kip’s accommodation and facilities?",
//             answer: `<p>Absolutely, we’d love to meet you! Kip Happy Stays are proud to own the best dog accommodation and puppy boarding Sydney and the surrounding region of NSW has to offer. We encourage all pet parents to come to inspect our boarding accommodation before their stay. Please contact our friendly team to arrange an inspection of our facility during opening hours, before your stay.</p>`,
//           },
//           {
//             question: "Can I get a discount for additional pets?",
//             answer: `<p>At Kip, we welcome siblings. We’re proud to offer additional dogs from the same family a 20% discount for Sydney accommodation when sharing a room. Our optional additional packages are charged per room, meaning if you add an extra package for a room, both dogs will get to share the playtime and double the fun!</p>`,
//           },
//           {
//             question: "Can I bring my own food?",
//             answer: `<p>The happiness of your pup is our priority. We provide premium quality Royal Canin dog food as part of our dog boarding service and make sure to check your dog is well-fed every day. However, you are more than welcome to bring your own food to Kip if you’d prefer. This service costs $3 per animal per day. If you would like to bring your own food, please make sure it’s well labelled to help us serve the right meals at the right times.</p>`,
//           },
//           {
//             question: "Why should I choose Kip for my pets?",
//             answer: `<p>At Kip, we leave no stone unturned when looking after the comfort, safety, and happiness of your dog. We have world-class facilities and an excellent, experienced team of professionals who love caring for and playing with animals, especially dogs. We understand how hard it can be to leave your pup in the hands of someone else but make no mistake; your dog will never feel lonely with Kip. With plenty of other dogs around at any given time, your dog can make plenty of friends and feel right at home within our facility! Kip provide dog kennels that Sydney pup owners can rely on – arrange an inspection today to see them for yourself.</p>
//             <p>Kip are here to offer your dog the time of their life, while you’re on holidays. Our accommodation and retreat areas offer a safe time away, so you can enjoy your vacation in peace, knowing that your dog is being treated with the utmost care.</p>
//             <p>We know how important it is to keep your dog safe, in excellent Sydney accommodation. Each individual dog at Kip will have its own areas, in a clean, safe environment. Whether you’re boarding your dog or cat, we know a holiday in peace from Sydney can only be achieved with a trusted boarding provider like Kip.</p>
//             <p>Kip are here to offer your Sydney dog or cat, the holiday of their dreams with our exceptional boarding accommodation. While we’re relatively new to the boarding scene in Sydney, you can rest assured that what we offer is like nothing else available in the Sydney boarding market. It’s time to book a holiday in Sydney for your dog – it’s time to book a luxurious boarding experience with Kip.</p>`,
//           },
//         ]
//       }
//       },
//     ],
//   },
//   {
//     title: "Cat Boarding Brisbane",
//     id: "cat-boarding-brisbane",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Cat Boarding Brisbane",
//           imageSrc: "/static/images/KIP-Happy-Stays-860-1 (1).jpeg",
//           backgroundImage: "/static/images/image-corner.svg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "The Cattery Brisbane Kittens Love",
//           content: `<p> There’s no doubt about it – Kip provides the best cat boarding Brisbane wide. If you’re after a cattery that you can trust to care for your kitty while you’re away, look no further than Kip Happy Stays.</p>
//           <p>Kip are pleased to offer world-class boarding facilities in Brisbane for pets of all shapes and sizes. When it comes to caring for your cat, we believe that your cat’s boarding experience should feel like a vacation, no different to the level of premium love, care, and attention they’re used to at home.</p>
//           <p>We recognise that cat boarding can be a stress-inducing experience for both you and your cat, which is why we’ve worked so hard to develop the most comfortable, happiest cattery Brisbane has to offer.Kip BrisbaneTestimonials</p> `,
//           imageSrc: "/static/images/KIP-Happy-Stays-928-e1598414928777.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Kip Brisbane Cat Boarding",
//           content: ` <p>Our pet resort facilities and staff account for the needs and personalities of all cats, not just some, which has enabled the development of a comfortable, inviting, and safe environment for all. That’s why we’re the best.</p>
//           <p>As the cattery Brisbane locals can trust, we’ve custom-designed our shared spaces with a lounge zone, television, and cat courtyard, among other niceties.</p>
//           <p>Each Kip cat will receive their own one-on-one time with a member of our cat-loving team, as well as free personal wander time in the luscious sunny courtyard of our pet resort. With us, there’s a place for everyone; friendly, energetic cats as well as quieter, more reserved cats</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-932.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Kip Accommodation",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Custom-Built Facilities",
//           content: `<p> Our cattery facilities and staff account for the needs and personalities of all cats, not just some, which has enabled the development of a comfortable, inviting, and safe environment for all.</p>
//           <p>As the cattery Brisbane locals can trust, we’ve custom-designed the shared spaces of our pet resort with a lounge zone, television, and cat courtyard, among other niceties. Each Kip cat will receive their own one-on-one time with a member of our cat-loving cattery team, as well as free personal wander time in our luscious sunny courtyard. With us, there’s a place for everyone; friendly, energetic cats as well as quieter, more reserved cats.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-872-e1633436115223.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Tailored Experiences",
//           content: `<p> Offering a widespread range of choices, your cat’s boarding experience can be individually tailored to their specific personality and regular hobbies, allowing your cat to feel like they’re at home. We find that most cats settle in very quickly and have a happy stay lounging in their comfortable cattery accommodation, with the occasional trip outside for some sunbaking.</p>
//           <p>Choose from our penthouse suite designed for luxurious fun or our classic room to keep your furball clean, comfortable, safe, and engaged! We’re the cattery Brisbane residents can count on.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-781.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms & Penthouse Suites",
//           content: `<p>Space, comfort, and cleanliness come as the standard at Kip. Our classic rooms epitomise comfortable living, offering multi-level accommodation to suit all climbing needs and full insulation to keep your friend comfortable no matter the weather. Cuddle time during the day, and rugged-up quarters to curl up in at night – they might not ever want to leave!</p>
//           <p>At our luxury penthouse suites, ultimate feline fun is guaranteed. In a climate-controlled environment with plenty of space, including a large private play area, nooks for napping and plenty of toys for company, your cat will feel like they’re in heaven's luxury suites. What’s more is, your furball friend will be treated to premium-grade, nutritious food, and endless cuddles from our animal-crazed staff.</p>`,
//           imageSrc:
//             "/static/images/LakeviewPetRetreat1-10-of-12-scaled-e1598341130642.jpeg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,

//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Treats and Meals",
//           content: `<p>Is your furball on a special food plan? Just like our pet resort accommodation offerings, we tailor our food menus for cats to match what they’re issued at home.</p>
//           <p>We serve premium Royal Canin dry food every morning or, if your cat prefers, we’ll divide their recommended daily portion into two servings, providing both a morning and evening meal. What’s more, our cat-loving staff supervise mealtimes, preventing your pet from having access to others’ food.</p>
//           <p>You can also choose to treat your cat to some special added extras – like one-on-one time or yummy treats! Select from our cattery menu of tasty tidbits to create an un-fur-gettable Kip cattery Brisbane experience for your loved one.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1872-2-e1618803942286.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Pet Chauffeur Service",
//           content: `<p>Has planning your own public holiday getaway been stressful enough? Running out of time to plan an extra trip to our cattery Brisbane?</p>
//           <p>No need to fear, we offer our ‘Pet Chauffeur Service’ to all Brisbane locals, meaning you don’t have to factor in another trip.</p>
//           <p>With us, your furball will be collected from home, before travelling to our pet resort in the comfort of a fully air-conditioned van, accompanied by a staff member.</p>
//           <p>When it’s time to return home, we’ll drop off your happy furry fairy member back to your home!</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-1581-2-scaled-e1618813919889.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "faqs",
//         data: {
//           title:"Frequently Asked Questions",
//           faqcards: [
//             {
//               question: "What Does Cat Boarding Brisbane Include?",
//               answer: `<p>At Kip, every cat will enjoy their own private space, a temperature-controlled room and one-on-one cuddle time with our team! We’re passionate in our belief that your cat should see our cattery as a home away from home. They’ll be able to stretch out in our lavish living room, or their own personal room, complete with insulation and cat-friendly furniture.
// </p> <p>Your cat’s happiness is our number one concern, which is why we serve only the best quality Royal Canin dry food, offer extra special touches as part of our standard service, and will send daily video updates to keep you in regular contact with your loved one! Cat boarding Brisbane, reimagined, thanks to Kip.
// </p> <p>Relax on your vacation, knowing that your feline friend is in good hands. Their staycation holiday will be simply purr-fect.</p>`,
//             },
//             {
//               question: "How Long Can Cats Stay in a Cattery For?",
//               answer: `<p>At Kip, your cat is welcome to stay with us overnight or even for a longer-term stay! Talk to our team about your cat boarding needs, and we’ll be able to discuss your options with you.</p>`,
//             },
//             {
//               question: "How Do Cats Typically React to Catteries?",
//               answer: `<p>Every cat is unique and will have different reactions to the environment. In saying this, we do absolutely everything we can to ensure they’re happy, having fun and safe at cat boarding. Whilst some settle into the surroundings almost instantly, others will take a little while. However, for the most part, we find our cats settle in very quickly. Cats love our relaxing, comfortable environment. Our team of expert staff are experienced in caring for all kinds of cats!</p>`,
//             },
//             {
//               question: "Is Cat Boarding Stressful for Cats?",
//               answer: `<p>We understand how difficult it can be to leave your cat in the hands of someone else, trusting your bundle of fur to us is something we don’t take lightly.
// </p> <p>That’s why we’ve spent so much time developing an environment that is relaxing, comfortable, fun, and happy, staffed with passionate cat-lovers. We find most cats settle in super quickly and have a relaxed, happy stay; lounging around and sunbaking within their sunny pet resort accommodation, mixing it up now and then to visit our cat courtyard or lounge zone.</p>`,
//             },
//             {
//               question: "Is It Better to Board a Cat or Leave it at Home?",
//               answer: `<p>There is no simple answer, as every cat is different, and every owner must make their own judgement.
// </p> <p>However, from our own years of experience working with cats, we know how to cater to every type of personality. We’re not your traditional cattery, which is why we include plenty of special touches as part of our pet resort service, including daily one-on-one time and cuddles.
// </p><p>If you choose Kip for your cattery needs while you’re away, rest assured the safety and happiness of your cat is our absolute number one priority, just like yours.</p>`,
//             },
//             {
//               question: "Can I Bring Food from Home?",
//               answer: `<p>If your cat is on a specialised diet, we’re more than happy to serve meals from home. Just bring them along at check-in and our staff will supervise its delivery to your furry family member!</p>`,
//             },
//             {
//               question: "What If My Pet Takes Medication?",
//               answer: `<p>Your cat will be well looked after; at Kip, our experienced staff ensure your pet’s medication needs are taken care of, just as they would be at home. Simply pack their medication in a well-labelled container and let our helpful team know.
// </p> <p>We’ll carefully care for and administer your cat’s medication to your specifications. For this service, we charge $5/day for the preparation and administration of medication for pets under our care.</p>`,
//             },
//             {
//               question: "Can I Get a Discount for Additional Cats?",
//               answer: `<p>Pet siblings are more than welcome at Kip! We offer additional pets from the same family a 20% discount for accommodation when they share a room. Our optional same family packages are charged per room, so you’ll get double the fun and shared playtime if you add an extra package, all for the price of one!</p>`,
//             },
//             {
//               question: "Can I Inspect Your Accommodation?  ",
//               answer: `<p>We’d love to have you inspect our cat boarding accommodation and assess its’ suitability for your pet! At Kip, we’re proud of our top-notch facilities and welcome all members of the Kip family to our locations across the country. Please contact our lovely team to arrange an inspection during opening hours. See you soon!</p>`,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Adelaide",
//     id: "adelaide",
//     components: [
//       {
//         name: "locHero",
//         data: {
//           tagline: " ",
//           location: "77 Watts Road, Brukunga SA 5252",
//           title: "Kip Adelaide Hills",
//           tell: "(08) 7078 3051",
//           email: "AdelaideHills@Kip.com.au",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           logos: [
//             { icon: CatBoardingSvg, value: "cat_boarding" },
//             {
//               icon: "/static/images/daycare boarding.png",
//               value: "daycare boarding",
//             },
//             { icon: DogDayCareSvg, value: "dog_care" },
//             { icon: DogBoarding, value: "dog_boarding" },
//           ],
//           content: `At Kip, we’re all for the good times. Keeping your four-legged friend happy and safe while you’re away is our number one priority.`,
//           imageSrc: AboutHeroImage,
//           stars: 5,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "The Best Pet Hotel Adelaide SA",
//           content: `<p>Are you looking for a spacious, caring, and fun boarding facility to keep your loved ones safe while you’re away? Look no further than Kip Adelaide! Our world-class pet boarding Adelaide centre is nestled on acres of beautiful, lush grounds and surrounded by many adventurous bushwalking trails that showcase Adelaide’s natural beauty.</p>
//           <p>At Kip’s dog kennels and cat boarding facilities, your little (or big) friend will have access to excellent meals, exciting activities, and countless cuddles from our caring and experienced staff – talk about pet hotel luxury! We’re all about happy days and happy stays for your four-legged friends.</p>
//           <p>Enjoy your holiday, with peace of mind that your pet is having an awesome staycation with Kip in South Australia.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1233.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Kip’s Pet Hotel in Adelaide",
//           content: `<p>We believe that your pet’s boarding experience should be no different to the premium levels of love and attention they’re used to at home. Kip Adelaide prides itself on the level of comfort and care provided by our fantastic staff and has all the necessary facilities to account for the unique needs and preferences of all pets.</p>
//           <p>We know that boarding can be a stressful experience for both you and your pet, which is why we’ve worked tirelessly to create safe, homely dog kennels with room to run around and places to chill out. At Kip Adelaide, we’re reinventing boarding.</p>
//           <p>As Adelaide’s premier dog boarding facility, it is without question that your furry friend will have an enjoyable and relaxing stay with Kip! Round-the-clock care, spacious outdoors and cosy indoor spaces are just some of the many features that make Kip Happy Stays the boarding facility that locals trust.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2230-3-scaled-e1598256940238.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "What We Do",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Boarding for Dogs",
//           content: `<p>With Kip Adelaide, your pup will enjoy private indoor and outdoor spaces, nutritious meals, treats and most im-paw-tantly, care from our passionate team of pet-loving people. Plenty of cuddles and social playtime with other pets are all a part of the Kip experience.</p>
//           <p>We’re not your traditional dog boarding kennel. At Kip, keeping your pup active, happy, and sociable are our priority. For your pooch, choose from the ultimate in pet resort-style rooming. We offer luxury villas or classic, cosy rooms to book. Private havens for your pup in South Australia!</p>
//           <p>Starts From: $43 per day</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Why choose Kip for pet boarding in Adelaide?",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Exceptional Accommodation",
//           content: `<p>At Kip, we pride ourselves on the staff's attention to detail in their care and their ability to individually connect with each pet’s unique personality. As such, we offer personalised stays tailored to your pet’s preferences to allow maximum comfort.</p>
//           <p> Kip Happy Stays in Adelaide is nestled on acres of beautiful green grounds, home to exciting play yards and stunning bushwalking trails. We understand the importance of keeping your pet active while on holiday, so we ensure each pet gets plenty of time to play.</p>`,
//           imageSrc:
//             "/static/images/Jack_Fenby_DSC_2584-scaled-e1628220003403.jpg",
//           isReverse: true,
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Experienced Staff",
//           content: `<p>Our experienced, caring, pet-loving staff will make your pet’s boarding experience one that they’ll never forget. With endless amounts of cuddles and friendly interaction, your pet will feel right at home.</p> <p> Your dog will get the chance to stretch their legs and explore the adventurous bushwalking trails scattered around our wide-spanning property in Adelaide. Perfect for dogs who love the great outdoors!</p>`,
//           imageSrc:
//             "/static/images/Jack_Fenby_DSC_1875-scaled-e1628220486874.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Our Rooms in Adelaide",
//           content: `<h5>Luxury Villas</h5>
//           <p>In our luxury villas, your pet can enjoy a sunbake from the comfort of their own supersized private outdoor grass courtyard, relax in their indoor retreat, or have a snooze on our amazingly comfortable single beds. Our luxury dog kennels are complete with reverse cycle air conditioning, soft blankets, and television, so that your pet has the ultimate resort-style rooming. This is perfect for quieter, more reserved pets who value privacy whilst also being just as suitable for sociable dogs who love to make friends with the neighbours next door.</p>
//           <h5>Classic Rooms</h5>
//           <p>Our spacious ‘Classic Rooms’ offer a private haven for your furry friend, keeping your pup safe and comfortable no matter the weather. At Kip <a href="/services/dog-daycare">Australian doggy daycare</a> and pet boarding, space and access come as the standard - every room has oodles of personal space per dog and comes with a cosy bed and blanket.</p>`,
//           imageSrc:
//             "/static/images/Jack_Fenby_DSC_2052-scaled-e1628220165778.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       {
//         name: "faqs",
//         data: {
//           title: "Frequently Asked Questions",
//           faqcards: [
//             {
//               question: "What Is Kip’s stance on safety?",
//               answer: `<div>
//               <p>At the Kip pet hotel in Adelaide, our boarding facilities have been developed with safety as the foremost consideration and priority.</p>
//               <p>From safely exploring our acres of land to supervised playtimes with other pet pals, you can rest easy knowing that your pet is having an excellent, safe, and engaging holiday. All of our activities are closely supervised by an Adelaide staff member, ensuring that your pet receives the attention they deserve.</p>
//               <p>Our resort-style accommodation offers private rooms to all our furry friends, where your pet gets time to themselves to decompress or stay sociable.</p>
//               <p>Our team of trained professionals have countless years of experience in caring for pets of all shapes and sizes and will provide regular health and weight checks. If needed, our network of vets is on call 24/7. At Kip Adelaide, you can be sure that we’ll be totally transparent in the service and care we provide your pet. More than anybody, we understand the emotional attachment one has with their pet and will do everything to make sure you’re comfortable with leaving them in the hands of someone else.</p>
//               <p>We combine tender loving care with decades of experience for both cat and <a href="/locations/adelaide/">dog boarding Adelaide</a>. If you have any concerns, feel free to inspect our pet boarding facilities during our opening hours. Call our lovely team on (08) 7078 3051 to set up a time.</p>
//               <p>&nbsp;</p>
//               </div>`,
//             },
//             {
//               question: "What are your opening hours?",
//               answer: `<p>Monday – Friday: 8:00am – 11:00am, 2:00pm – 5:00pm</p>
//               <p>Saturday: 8:00am – 11:00am</p>
//               <p>Sunday: 2:00pm – 5:00pm</p>`,
//             },
//             {
//               question: "Can I inspect your accommodation?",
//               answer: `<p> Absolutely, we’d love to invite you and your pet to inspect our boarding kennels! At Kip, we’re proud of the world-class boarding facilities that the locals trust. We encourage all pet parents to inspect our accommodation prior to arrival to help put your mind at ease. At the current time, we offer boarding in SA within our fantastic Adelaide Hills facilities for both dogs and cats.
//               </p><p>
//               Please contact our team to arrange an inspection during opening hours. See you soon!</p>`,
//             },
//             {
//               question: "How much does boarding in Adelaide cost?",
//               answer: `<p>Fees for our pet hotel in Adelaide SA start at $45 per day for dogs. Our luxury doggy villa starts at $77 per day. All bookings require a 10% pre-payment. As well as boarding kennels, we also offer doggy daycare in Adelaide.</p>`,
//             },
//             {
//               question: "Can I get a discount for additional pets?",
//               answer: `<p>The more the merrier! We’d love to see your pet siblings at Kip. We offer additional pets from the same family a 20% discount for accommodation when they share a room.</p>`,
//             },
//             {
//               question: "Do you serve treats?",
//               answer: `<p>At Kip, we serve premium Royal Canin dry food to all our Adelaide guests, with processes in place to make sure your dog isn’t eating too little (or too much!)</p>
//               <p>If your dog is on a specialised diet, we’re more than happy to serve meals from home. Just bring them along at check-in!</p>
//               <p>You can even add in extras to make your pet’s stay as unique as they are. We’ve put together a great treats’ menu for our loyal visitors – paw-sionalise your furry friends stay with goodies such as pigs ears, small bones, roo-sticks or peanut butter Kongs.</p>
//               `,
//             },
//             {
//               question: "Does Kip cater to special dietary requirements?",
//               answer: `<p>If you’d prefer, you’re more than welcome to pack your pet’s own food. If your pet has special dietary requirements, please ensure that it is labelled correctly.</p>`,
//             },
//             {
//               question: "Can I book my pet’s stay for short and long holidays?",
//               answer: `<p>Yes, you sure can! Kip Adelaide Hills offers both long and short-term boarding within, year round. Our animal-loving team of carers are paw-sionate about your pets and give them the same love and care as they’d get at home.</p>`,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Dog Boarding Adelaide",
//     id: "dog-boarding-adelaide",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Dog Boarding Adelaide with Kip",
//           imageSrc: "/static/images/Jack_Fenby_DSC_2318-scaled-e1628215179648.jpg",
//           backgroundImage: "/static/images/image-corner.svg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//           isReverse: true
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Dog Kennels Adelaide Locals Love",
//           content: `<div><p>After a dog boarding Sydney facility that you can trust? You’ve found us. Here at Kip Happy Stays, we provide the leading pet boarding services for your furry friend while you’re on vacation. Located in Hunter Valley and Lake Macquarie, we have the resources, care and transport to provide your pet with their own memorable getaway while you’re away.</p>
//           <p>Kip Happy Stays make dog boarding easy. Providing the best dog boarding Sydney has to offer, we’re confident your dog will love our special retreat from the hustle and bustle of Sydney. We’ll personally pick up your pup from your Sydney residence, before travelling out to our gorgeous Hunter or Lake Macquarie resort. From there, we’ll bring your much-loved pets back home once you’re settled back in. We aim to provide the same level of care as you would with our dog boarding and dog day-care.</p></div>`,
//           imageSrc: "/static/images/Jack_Fenby_DSC.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Kip Adelaide",
//           content: `<p>Kip works tirelessly to ensure that your pup is provided with a dog hotel Adelaide experience that is comfortable, inviting and fit for all breeds.</p>
//           <p>We believe that your pet’s boarding experience should mirror the same levels of love and affection they’re used to at home. All of our spaces have been designed with the consideration that each pup has a unique personality and needs, making it a safe, happy environment for all.</p>
//           <p>Energetic and outgoing dogs can enjoy our beautiful, picturesque bushwalking trails and spacious play yards. Meanwhile, quieter, more reserved dogs will have plenty of personal space to enjoy.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-1214.jpg",
//           isReverse: true,
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Our Accomodation",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms",
//           content: `<p>Our spacious ‘Classic Rooms’ are a private haven for your furry friend, big enough that your pet pal is always comfortable. </p>
//           <p>Our <a href="/services/dog-daycare/" tabindex="0">dog daycare</a> and boarding kennels Adelaide provides your pup with a private outdoor grassyard as well as their indoors accommodation, as we believe in space, comfort and sunlight are necessities. </p>
//           <p>Our resort-style rooms are so big they could fit a full-size double bed, so even our largest furry guests have plenty of room to chill in after an awesome day full of fun! What’s more, our sunlit pet resort rooms are well-insulated, meaning your pooch will be comfortable all year round. </p>`,
//           imageSrc:
//             "/static/images/Jack_Fenby_DSC_2584-scaled-e1628220003403.jpg",
//             cta: [
//               {
//                 name: "Book now",
//                 link: "/contact-us",
//               },
//             ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Luxury Villas",
//           content: `<p>In our luxury villas, your pooch can stretch out and enjoy all the creature comforts you’d expect from resort-style accommodation. The luxury villa is perfect for quieter, more reserved dogs who value privacy whilst being just as suitable for sociable dogs who love making friends. </p>
//           <p>Your pup can enjoy a sunbake from the comfort of their own supersized private outdoor grass yard, relax in their indoor retreat or snooze on their comfortable single bed. To top it off, our luxury villa accommodation is complete with reverse cycle air conditioning, soft blankets, and a television – ensuring that your companion has the ultimate in pet resort-style rooming. </p>
//           <p>Starts from $75 per day</p>`,
//           imageSrc:
//             "/static/images/Jack_Fenby_DSC_2052-scaled-e1628220165778.jpg",
//           isReverse: true,
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Extra Activities for Active Pups",
//           content: `<p>Kip's dog boarding in Adelaide offers extra activities to account for your pooch and all their preferences! As the premium provider of dog boarding in Adelaide, we guarantee that your pup will have a great time with us, staying safe, active, and engaged.</p>
//           <p>Does your pup need extra time to stretch their legs? Maybe zooming around outdoors is one of their most frequent activities. If your pup is extra active, add on an extra playtime in our grass yards every day, supervised by one of our highly trained experts. Does your pup love exploring the great outdoors? Why not add on an extra bushwalk around our paw-fect property?</p>
//           <p>Starts from $75 per day</p>`,
//           imageSrc:
//           "/static/images/KIP-Happy-Stays-195-scaled-e1618804891810.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Door-to-door chauffeur",
//           content: `<p>Adelaide dog boarding is a cinch with our chauffeur service.</p>
//           <p>On the first morning of your stay, one of our team members will come direct to your house and pick up your dog in Adelaide, in one of our air-conditioned Kip Chauffeur Vans. You can rest assured knowing that our expert drivers will be giving your cat or dog the best quality of care from the moment they’re picked up from your place in Adelaide, right up until they meet our full pet crew at the resort. We just wish you could see your pets light up when they see the grounds for the first time!</p>
//           <p>When it’s time to head home at the end of their dog boarding stay, we’ll personally drop your furry friend back right to your door – all part of the services!</p>`,
//           imageSrc:
//           "/static/images/Image-from-iOS-9-1-scaled-e1644990270714.jpg",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Treats and Meals",
//           content: `<p>Does your pup need a special food plan? We’re experts at tailoring menus to match what your pup is used to at home. All our meals are served inside the room so we know that everyone’s well-fed.</p>
//           <p>As a standard, we serve high-quality Royal Canin dog food to all our guests, with processes in place to make sure your dog isn’t eating too little or too much.</p>
//           <p>If your dog is on a specialised diet, we’re more than happy to serve meals from home. Just bring them along at check-in and our staff will supervise its delivery to your furry family member.</p>
//           <p>And don’t worry, we haven’t forgotten about treats! The animal-loving foodies at Kip have put together a great treats menu for your pup. Paw-sonalise your pup’s stay with a selection of tasty tidbits like pigs ears, small bones, roo-sticks or peanut butter kongs.</p>`,
//           imageSrc: "/static/images/kipfood.png",
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Safety",
//           content: `<p>Our dog kennels Adelaide have been developed with safety as the foremost consideration and priority. When you join the Kip family, you won’t have to worry at all. We combine tender loving care with decades of experience.</p>
//           <p>From safely exploring our acres of land with a Kip staff member, to supervised playtimes with other pet pals, you can rest easy knowing your dog is having a wonderful, exciting and above all, safe holiday.</p>
//           <p>Our team of trained professionals have countless years of experience in caring for dogs of all breeds, shapes and sizes and will provide regular health and weight checks. If needed – our network of vets is on call 24/7. At Kip Dog Boarding, you can be sure that we will be completely transparent in the service and care we provide your precious pup with.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-4.jpg",
//           isReverse: true,
//           cta: [
//             {
//               name: "Book now",
//               link: "/contact-us",
//             },
//           ],
//         },
//       },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       {
//         name: "faqs",
//         data: {
//           title: "Frequently Asked Questions",
//           faqcards: [
//             {
//               question: "Why Should I Choose Kip Adelaide for Dog Boarding? ",
//               answer: `<div>
//               <p>When you choose the Kip dog Hotel Adelaide for your dog boarding needs, rest assured your pup will experience a world-class facility and high level of tender loving care from our passionate team of dog-loving experts.</p>
//               <p>Our dog kennels Adelaide combines space, natural beauty, and resort-like accommodation to create the perfect dog boarding facility.</p>
//               <p>You won’t find anywhere else that has staff as amazing as ours, who pride themselves on the high level of compassionate care they provide. Our team of carers love playtime and cuddles just as much as your dog does!</p>
//               <p>If you’re after a personal, high-quality, community-centred approach to dog boarding in Adelaide, Kip has got you covered. </p>
//               </div>`,
//             },
//             {
//               question: "How Much Does Dog Boarding Cost?",
//               answer: `<p>Kip dog boarding in Adelaide starts from just $43 a day, and all bookings require a 50% pre-payment. Our luxury villas are a bit more expensive but come fully equipped with soft blankets, a television, more space, and an air-conditioner.</p>`,
//             },
//             {
//               question: "Can I Get a Discount for Additional Pets?",
//               answer: `<p> We welcome pet siblings at Kip. We’re proud to offer additional pets from the same family a 20% discount for accommodation when sharing a room. Our optional additional packages are charged per room, meaning if you add an extra package for a room, both pets will get to share the playtime and double the fun!</p>`,
//             },
//             {
//               question: "Can I Board My Dog Overnight?",
//               answer: `<p>Yes, Kip Adelaide offers both long-term and short-term dog boarding. We’ll give your pup the same love and care that they’re used to at home. </p>`,
//             },
//             {
//               question: "What if My Dog Takes Medication?",
//               answer: `<p>Your pup will be well looked after. Our experienced staff ensure that your pup’s medication needs are taken care of. Simply pack your dog’s medication in a well-labelled container and let our helpful team know. We’ll carefully care for and administer the medication to your specifications. We charge an extra $5 per day to prep and deliver medication to dogs in our care.</p>`,
//             },
//             {
//               question: "Is Kip Dog Kennels Adelaide Safe?",
//               answer: `<p>Absolutely! Everything we do is centered around the safety and happiness of your dog. Our team of trained professionals have years of experience in caring for dogs of all breeds and provide regular health and weight checks. Our network of vets is also always on call around the clock if needed.</p>
//               <p>We are completely transparent in the service and care we provide your pet. From medication needs, special food plans and extra tender loving care, we have decades of experience and excelling, well-structured systems in place to ensure the safety of your pup during their stay with us. </p>
//               `,
//             },
//             {
//               question: "Can I Inspect Your Accommodation?  ",
//               answer: `<p>Absolutely! We’d love to meet you. We’re proud of our top-notch facilities and welcome all members of the Kip family to our locations across Australia.</p>
//               <p>Please contact the Kip Adelaide team to arrange an inspection during our opening hours.</p>`,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Dog Boarding Melbourne",
//     id: "dog-boarding-melbourne",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Dog Boarding Melbourne",
//           imageSrc: "/static/images/KIP-Happy-Stays-1073-2-scaled.jpg",
//             backgroundImage: "/static/images/image-corner.svg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "The Best Dog Boarding Melbourne Has to Offer",
//           content: `<p>Are you on the lookout for the best dog boarding in Melbourne? Look no further than Kip Happy Stays. With plenty of room to run around during the day and comfortable rooms to reside in during the night, our Kip dog daycare facilities across Melbourne are the best in the state!Give your pup a holiday at our luxurious Melbourne pet boarding facilities.</p>
//           <p> At Kip Happy Stays, the safety, wellbeing, and happiness of your pooch is our focus at all times. With a team of experienced and friendly staff who are passionate animal lovers, we offer a home away from home that we know your dog will love.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2912-scaled-e1617941507991.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//             isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Happy Stays & Happy Days",
//           content: `<p>When you book your pet in for dog boarding services with Kip, you can rest assured knowing your furry friend is receiving the highest quality of care in our comfortable dog boarding kennels. So, kick back, relax, and enjoy your holiday! Let us take care of your pet with our secure facilities, premium care, and transportation services. Your pup will enjoy a getaway of their own!</p>
//           <p>At Kip’s dog kennels in Melbourne, we offer our classic private rooms, and premium luxury villas at selected locations. We are committed to providing our pets and our pet parents with the most premium pet boarding facility available. Our tranquil yet playful atmosphere allows those leaving for a holiday to worry less about their pet and spend more time enjoying their getaway.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-1039-scaled-e1618803895249.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Dog Boarding Accommodation in Melbourne",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Classic Rooms",
//           content: `<p>Book your dog in to enjoy a stay in one of our comfy classic rooms - a private doggy sanctuary for your pet. At Kip Happy Stays, we don’t provide large, shared dog kennels. To ensure our furry visitors sleep easy, we uphold a high standard of rooming, offering insulated private rooms. And at night, they can enjoy a deep and restful night’s sleep in comfortable temperatures, whatever the season!</p>
//           <p>Our classic rooms are just as comfortable as luxury villas. Don’t believe us? Check out our Melbourne facilities and dog boarding services yourself - book online today!</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1719-2.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Luxury Villas",
//           content: `<p>While you enjoy your luxury escape, indulge your pup with one of our luxury villas! Available at selected facilities across Melbourne, your pup can stretch out, relax, and enjoy all the creature comforts we have to offer. Our luxury dog boarding kennels come with their own private and air-conditioned indoor retreat, a spacious outdoor grassed area, and the cosiest bed for some good quality sleep. The cherry on top? At the end of a long day of play, your pooch can snuggle up in their soft blankets with a selection of toys and watch some TV! Dog boarding services at their finest! </p>
//           <p>Spoil your beloved furry friend today with the finest dog hotel Melbourne has to offer! </p>`,
//           imageSrc:
//           "/static/images/KIP-Happy-Stays-2798-2-scaled-e1618803354873.jpg",  
//            cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Extra Activities",
//           content: `
//           <p>At Kip Happy Stays, we know how important it is for your pup to lead an active lifestyle. When your canine companion comes to stay at a Kip dog boarding kennel, you can choose to add some additional playtime to their itinerary. Dogs require a certain level of physical exercise and mental stimulation every day to be happy and healthy, so you can choose between outdoor play sessions, extra bushwalks, or even a full daycare session, depending on which location you pic. Our qualified team of expert Aussie caretakers will supervise and be there to provide lots of pats, toys, and treats!</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-195-scaled-e1618804891810.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Pet Transportation Services",
//           content: `
//           <p>Are you strapped for time on the morning of your getaway? Or perhaps you’re not able to organise a trip out to the dog boarding kennel before your big trip? Not to worry - when you book a stay with Kip, your dog will be picked up and personally transported from your home in our exceptional pet transportation service, meaning you don’t have to factor in another trip when you em-bark on your holiday. Your pet can enjoy a ride to our the site in the comforts of a secure, fully air-conditioned van.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-1581.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Treats and Meals",
//           content: `
//           <p>Does your pup tend to be a bit fussy when it comes to food? Or maybe they have special dietary requirements and allergies? We’ve got you covered. With a range of food plans to suit every special diet, your pup will be offered plenty of choices. What’s more, they can enjoy a range of delectable treats throughout the day.</p>
//           <p>You can choose to add on extras to spice up your pet’s day. The animal-loving foodies at Kip have compiled a menu full of the tastiest treats, from peanut butter stuffed Kongs to small bones and other tasty morsels.</p>
//           <p>Our attentive team are always around to supervise mealtimes to guarantee each dog goes to bed satisfied, with a full belly.</p>`,
//           imageSrc: "/static/images/kipfood.png",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       {
//         name: "faqs",
//         data: {
//           title: "Frequently Asked Questions",
//           faqcards: [
//             {
//               question: "What does dog boarding include?",
//               answer: `<div>
//               <p>When your pup comes to stay at Kip dog boarding kennel, they’ll get to enjoy the finer things in life – the finest treats and meals, spacious and private rooms, and playtime activities alongside their new friends and our experienced Kip crew!</p>
//               <p>With our range of popular packages, you can choose to upgrade your pup’s stay with extras, ranging from personalised bushwalks, one-on-one playtime, warm hydro baths and a blow-dry on departure.</p>
//               </div>`,
//             },
//             {
//               question: "How much does dog boarding in Melbourne cost?",
//               answer: `<p>At Kip, we offer a premium pet boarding experience, at affordable prices. To get an accurate quote, choose your location, your dates, and any extra add-ons. And our team of trained carers will spoil your pet with the same love and care they’d receive at home, for no extra cost.</p>`,
//             },
//             {
//               question: "Where can I board my dog overnight?",
//               answer: `<p>At one of our dog kennels in Melbourne of course! Kip offers short dog daycare or long-boarding stays for our furry Melbourne locals.</p>`,
//             },
//             {
//               question: "Is dog boarding safe?",
//               answer: `<p>At Kip, we go the extra mile (or kilometre) to ensure the safety and wellbeing of our dogs. Our staff are trained professionals who are passionate about their line of work, with years of experience in caring for animals of all shapes and sizes. We provide regular health checks and weight checks and are available on call all day! The safety of your pet is always our top priority.</p>`,
//             },
//             {
//               question: "What if my dog takes medication?",
//               answer: `<p>At Kip, we accommodate for your pup’s medication needs, just the same as if they were being taken care of by you at home. Inform our pet boarding team and pack your dog’s medications in a labelled container. Our expert team of carers will administer pet medication in line with any specifications for a small fee.</p>`,
//             },
//             {
//               question: "Can I inspect Kip’s accommodation and facilities?",
//               answer: `<p>At Kip Happy Stays, we proudly offer a 20% discount for each additional dog from the same family when sharing the same doggy room.</p>
//               `,
//             },
//             {
//               question: "Can I get a discount for additional pets?",
//               answer: `<p>At Kip Happy Stays, we proudly offer a 20% discount for each additional dog from the same family when sharing the same doggy room.</p>
//               `,
//             },
//             {
//               question: "Can I bring my own food?",
//               answer: `<p>The happiness and wellbeing of your dog is always our focus at Kip. We provide premium dog food, included within our dog boarding service, and not to mention – lots of treats! We ensure every dog is fed by supervising mealtimes to prevent funny business and dinner bowl robberies.</p>
//               <p>If you’d prefer to provide your own food for your pup, you are more than welcome to. For $3 per dog per day, you can provide your food, packaged, and labelled, and then we’ll do the rest!</p>`,
//             },
//             {
//               question: "Why should I choose Kip for my pets?",
//               answer: `<p>At Kip’s dog boarding kennel, we offer our furry Melbourne locals the holiday of a lifetime with our exceptional dog boarding facilities. We offer first-class facilities alongside an experienced team of professionals who love their line of work and are passionate about dogs. We understand how challenging it can be to leave your beloved pup in the care of a stranger, but with Kip, you can have peace of mind knowing your dog is in the safest, most caring hands while you enjoy your holiday.</p>`,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     title: "Dog Daycare Melbourne",
//     id: "dog-daycare-melbourne",
//     components: [
//       {
//         name: "hero",
//         data: {
//           title: "Doggy Day Care Melbourne",
//           imageSrc: "/static/images/KIP-Happy-Stays-2141-2-e1598418502332.jpg",
//           backgroundImage: "/static/images/image-corner.svg",
//           content:`<p>Happy days for four-legged friends</p> `,
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Reinventing Melbourne Dog Daycare",
//           content: `<p>At Kip, we pride ourselves on creating happy days for your four-legged friends. We believe that puppy daycare should act as a home away from home, a place where your canine companion can enjoy plenty of stimulating activities, make friends in a safe setting and receive quality care and attention.</p>
//           <p> Your puppy will enjoy plenty of social playtime in our custom-built play areas. Our skilful team of animal-loving carers will make sure that your dog is always safe and looked after. By the time your tired dog gets home, they'll be ready for a deserved kip.</p>
//           <p>Kip Doggy Day Care Melbourne in Bayside is the place to be for dogs of all breeds, shapes or sizes.</p>`,
//           imageSrc: "/static/images/dog-daycare.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Expert Doggy Daycare in Melbourne",
//           content: `<p>Physical and mental stimulation for your puppy is super important in keeping them happy, engaged, and sociable. Daily interaction and engagement with other pups can help with feelings of loneliness, anxiety or boredom. Regular exercise is crucial for a dog’s happiness, and with the stresses of modern life, many of us often don’t have the time to give them the intensity they crave. Nothing can replicate the energy spent from dogs playing with each other – that constant wrestling and running around gives them the outlet they need.</p>
//           <p>Moreover, socialisation with other friends is an important experience – especially in younger, formative years. This will help prevent future anti-social behaviours and is crucial for their early development. Throughout the day, we'll make sure play, socialising, and attention are available in endless bounds.</p>`,
//           imageSrc: "/static/images/DSC_0684-scaled-e1624515494279.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "Getting Started with Kip",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "First Things First",
//           content: `<p>Before you join the happy Kip family, we must ask that your four-legged friend completes a trial day with us to make sure they’re a great fit for our daycare services.All of our Kip canine companions across daycare and <a href="/locations/dog-boarding-melbourne">boarding in Melbourne </a> have passed this assessment to ensure the health and safety of the whole family.</p>`,
//           imageSrc: "/static/images/KIP-Happy-Stays-2039-new.jpeg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Trial Days with Kip",
//           content: `<p>Trial days are typically held on our quieter days. First, your pet pal will get a gentle introduction to the day care environment and culture. We’ll match your dog with a small group of regulars at our puppy daycare that play really well with new dogs to assess how they settle in. Once they’ve had a chance to meet the family and explore all the new sights, smells and sounds, we’ll start introducing them to more of the other dogs to see how they play. </p>
//           <p>On our trial days, we ask that you or a trusted friend is available at short notice in the event that we need to phone you or request that you come and pick up your pup.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2912-scaled-e1617941507991.jpg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "Trial Day Requirements",
//           content: `
//           <ul>
//           <li> Dogs must have had their final vaccine 10 days before attending</li>
//           <li>Dogs must be de-sexed by 12 months</li>
//           <li> Pet parents must present an up-to-date C5 vaccination certificate</li>
//           <li> Dog parents must have completed the Kip Enrolment Form</li>
//           </ul>
//          `,
//           imageSrc:
//             "/static/images/259bd66720888259045ba1f44f679a91-1-e1613612484121.jpeg",
//             cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "title",
//         data: {
//           title: "What's Included in Kip Doggy Daycare?",
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `
//           <h5>A Day at Kip </h5> <p>
//           A Kip day starts bright and early at 7 am so that our parents can drop their lovable pals off on their way to work. As pet owners ourselves, we know that all dogs have different personalities, character traits, likes and dislikes. To set up the perfect day for your pup, we start by finding the right group of friends for every dog based on their size and how they play.</p>
//            <p>  Once groups have been organised, the fun begins. Your little (or big) friend will enjoy their playtime and make friends under the guidance of our Kip crew, who know precisely when to change up the game or give rest time! We strive to provide a nurturing environment with positive reinforcement activities, safe socialisation, and rewards for good behaviour. You can rest easy knowing your pup is in safe hands with the legends at Kip in Melbourne.</p>`,
//           imageSrc:
//             "/static/images/KIP-Happy-Stays-2230-3-scaled-e1598256940238.jpg",  
//            cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `
//           <h5> Home Away from Home for Your Pup</h5>
//           <p>Your doggy’s day is divided into two morning and afternoon play sessions. In between, we’ll have quiet time so they can recharge for more fun. Tasty treats are a reward at Kip Dog Daycare Melbourne – but only for good behaviour!</p>  
//          <p>At Kip's <a href="/services/dog-daycare"> dog daycare </a> in Melbourne, your dog will spend their day socialising, playing and experiencing plenty of cuddles from our fantastic and caring staff. With Kip, your dog will be having so much fun, you’ll want in too! Don’t worry – we’ve got you covered. We share some of the best Kip moments through our customer portal and social media pages every day, so make sure you give us a follow to stay in the loop.</p>`,
//           imageSrc: "/static/images/DSC_0864-scaled-e1626926908929.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           content: `
//           <h5>Daycare simplified with our Memberships</h5>
//          <p> At Kip Doggy Day Care Melbourne, we believe that coming to daycare should be as easy as possible. That's why we introduced our weekly Kip Membership!</p>      
//           <p>Your weekly membership includes one free daycare day and unlimited discounts on additional days, meaning you can come as much as you want knowing you're getting our best deal. And your Kip Membership is for the whole family - just one membership gets you access to discounts for all of your pooches!</p>
//           <p> Contact our friendly team to find out more today!</p>`,
//           imageSrc: "/static/images/Cobberdog.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//         },
//       },
//       {
//         name: "hero",
//         data: {
//           title: "How Are Dogs Assessed On Trial Days?",
//           content: `
//           <p>We introduce your dog to a small group of regulars that are welcoming and who we believe to be a good match. Our staff will watch your pup closely to assess how they interact and connect with the environment. As they get more settled, we’ll move them between groups based on energy levels and play styles. At the end of the day, we’ll discuss the day with you and run you through our report card.</p>  
//          <p>We are aware that sometimes certain dogs take a while to settle in and that this cannot always be achieved on the first day. We’ll be sure to let you know how your pup went on his trial day, and often we recommend they come back. However, some dogs are just not a great fit for the environment.</p>
//          <p>Different daycares have different philosophies on accepting dogs. At Kip, we believe it to be absolutely essential that all dogs apart of our family love coming to daycare, rather than just enduring it. This is how we ensure the quality of our daycare centre and keep everyone, including you, happy!</p>`,
//           imageSrc: "/static/images/Hero-Image-Mobile.jpg",
//           cta: [{ name: "Book now ", link: "/contact-us" }],
//           isReverse: true,
//         },
//       },
//       {
//         name: "serviceSteps",
//         data: serviceSteps,
//       },
//       {
//         name: "faqs",
//         data: {
//           title: "Learn More About the Kip’s Facilities in Melbourne",
//           faqcards: [
//             {
//               question:
//                 "Do I need to buy multiple memberships if I have multiple dogs?",
//               answer: `<p>Your doggie daycare membership applies to all of your dogs! If you bring two dogs to day care, you can use your free day for one and your other dog can stay at the discounted additional day rate.</p>`,
//             },
//             {
//               question:
//                 "What are the benefits of becoming a member?",
//               answer: `<p>You’ll receive discounted doggie daycare days every week and will receive an additional 10% off all retail, training, washes and transport when applicable.</p>`,
//             },
//             {
//               question: "When will I be billed?",
//               answer: `<p>When you first sign up, you’ll be charged for the first week, including a free day that you can use straight away.</p>
//               <p>Every Saturday, you’ll then be automatically charged for any daycares, retail or other services from the week that haven’t been paid for yet.</p>`,
//             },
//             {
//               question: "How much does a Kip membership cost?",
//               answer: `<p>When you purchase a membership, we will inform you of the weekly membership fee the additional <a href="/doggy-daycare-cost/">dog daycare fee</a> and any discounts you are entitled to.</p>
//               <p>We reserve the right to change these prices at any time and at our complete discretion by providing you with at least fourteen days written notice sent to your preferred e-mail address. At this time, you will have the right to end your membership with no penalty.</p>`,
//             },
//             {
//               question: "Can I cancel if my situation changes?",
//               answer: `<p>Yes, you can cancel any time after the first three weeks.</p>`,
//             },
//             {
//               question: "Are Kip’s facilities safe?",
//               answer: `<p>At Kip, your dog’s safety is our number one priority – particularly for doggie daycare. We’ve put a lot of time and dedication into making our doggy day care centres world-class and of the highest standard in cleanliness and hygiene.</p>
//               <p>Our floors are non-slip and water-resistant to make sure they stay safe and free from germs and odours. Our play yards are separated by 1.8m high fences and are big enough to play in but small enough for our staff to manage.</p>`,
//             },
//             {
//               question: "What if my dog is shy?",
//               answer: `<p>Before your dog joins us at daycare, they will have completed a trial day to assess if our daycare is the right environment for them. Our trial days are held on quieter days so as to not overwhelm new pups who are experiencing all new smells, sights and sounds at once.</p>
//               <p>Kip’s Dog Daycare in Melbourne is welcoming to dogs of all different personalities, breeds and sizes. We have a diverse group of happy pups that are more than friendly.</p>
//               `,
//             },
//             {
//               question: "Why should I choose Kip?",
//               answer: `<p>At Kip, we leave no stone unturned when looking after the comfort, safety, and happiness of your furry friend. We have world-class facilities, cage free rooms, constant supervision, and an excellent, experienced team of professionals who love caring for and playing with animals, especially dogs. Our focus is every dog’s individual happiness in a safe environment, including to ensure your pup is a happy dog. We understand how hard it can be to leave your pup in the hands of someone else but make no mistake; your beloved dog will never feel lonely with Kip. We’re passionate about providing exceptional day care for doggies of all shapes and sizes!</p>`,
//             },
//           ],
//         },
//       },
    ],
  },
];

export const contactSlides = [
  {
    image: ContactHero1,
  },
  {
    image: ContactHero2,
  },
  {
    image: ContactHero3,
  },
  {
    image: ContactHero4,
  },
];
