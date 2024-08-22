import { IDetail } from "./interfaces";
import PawServicesSvg from "../../../images/paw_service.png"
import playDaysSvg from "../../../images/play_days.png"
import BetterBoardingSvg from "../../../images/better_boarding.png"

export const theDetailsData: IDetail[] = [
  {
    imageURL: PawServicesSvg,
    body: "Our team of animal lovers and experts tailor our service to best suit your pet’s needs",
    backgroundColor: "bg-blue-150",
    color: "text-blue-750",
  },
  {
    imageURL: playDaysSvg,
    body: "Safe spaces to enjoy, from secure, indoor play areas to spacious paddocks in the great outdoors we have options to give your pooch the perfect play day",
    backgroundColor: "bg-yellow-75",
    color: "text-purple-900",
  },
  {
    imageURL: BetterBoardingSvg,
    body: "Modern facilities with the creature comforts from home - not your old style boarding kennel or cattery",
    backgroundColor: "bg-pink-150",
    color: "text-pink-750",
  },
];
