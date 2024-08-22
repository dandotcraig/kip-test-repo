export interface IHeroSlider {
  gallery: LocationGallery[];
  services: Service[];
  stars: number;
}

export type LocationGallery = {
  imageUrl: string;
};
export type Service = {
  imageUrl: string;
};

