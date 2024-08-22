export interface ILocationCard {
  gallery: LocationGallery[];
  CTA?: string;
  rating?: string;
  title?: string;
  name?: string;
  price?: string;
  logos?: Service[];
  tag?: string;
  location?: any;
  id?: string;
  stars?: number;
  email?: string;
  description?: string;
  tell?: string;
  faqs?: FaqCards[]
}

type LocationGallery = {
  image: string;
};
type Service = {
  icon: string;
  value: string;
};
export type FaqCards={
  answer?: string;
  question?: string
}