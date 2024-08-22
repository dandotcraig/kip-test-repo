import { type } from "os";

export interface ICardWithImage {
  serviceCards: DogyDaycareData[];
  tagline?: string;
  tagline2?: string;
  title?: string;
  imageSrc?: string;
  backgroundImage?: string;
  frameIncluded?:boolean;
  imageAlt?: string;
  cta?: ICta[];
  buttons?: any;
  content?: string;
  imageOnLeft?: boolean;
}
type DogyDaycareData = {
  tagline?: string;
  tagline2?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  CTA?: string;
  CTALink?: string;
  buttons?: any;
  content?: string;
  imageOnLeft?: boolean;
};
export type ICta = {
  name: string;
  link: string;
};
