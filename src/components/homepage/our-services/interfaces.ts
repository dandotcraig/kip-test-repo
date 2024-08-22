import { type } from "os";
import { IBioCard, IContentBox } from "../../teamspage/bios/interface";


export interface Component{
  name:string,
  data:any
}
export interface IServiceCard {
  title?: string;
  tagline?: string;
  logoURL?: string;
  body?: string;
  CTA?: string;
  CTAUrl?: string;
  backgroundColor?: string;
  color?: string;
  components?:Component[];
  hero?: ServiceCard[];
  serviceCards?: ServiceCard[];
  serviceCards2?: ServiceCard[];
  serviceSteps?: Array<IBioCard>;
  readyForStay?: IContentBox;
  faqs?: IFaq[];
  id?: string;
  whatToExpect?: { title: string; description: string };
  meetOurTeam?: {
    title: string;
    description: string;
    teamCards: any;
  };
  whatMakesKipDifferent?: {
    title: string;
    description: string;
    differenceCards: any;
  };
}
export type ServiceCard = {
  tagline?: string;
  tagline2?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  imageSrc: string;
  content?: string;
  imageOnLeft?: boolean;
  isFullWidth?: boolean;
  cta?: ICta[]
};

export type IFaq = {
  question: string;
  answer: any;
};
export type ICta={
  name: string;
  link: string
}