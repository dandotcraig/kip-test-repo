import { IHeroSlider } from "./interfaces";
import RectangleImage from "../../../images/Rectangle.png"
import CatBoarding from "../../../images/cat_boarding.png"
import PickUp from "../../../images/pick_up_available.svg"
import DogCare from "../../../images/dog_care.png"
import DogBoarding from "../../../images/dog_boarding.png"
export const heroSliderData: IHeroSlider = {
    gallery: [
        {
          imageUrl: RectangleImage,
        },
        {
          imageUrl: RectangleImage,
        },
        {
          imageUrl: RectangleImage,
        },
      ],
      services: [
        {
          imageUrl: CatBoarding,
        },
        {
          imageUrl: PickUp,
        },
        {
          imageUrl: DogCare,
        },
        {
          imageUrl: DogBoarding,
        },
      ],
      stars: 5,
}