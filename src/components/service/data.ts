import DogCareSvg from "../../../src/images/dog_care.png";
import DogBoardingSvg from "../../../src/images/dog_boarding.png";
import CatBoardingSvg from "../../../src/images/cat_boarding.png";
import ServiceHero from "../../../src/images/Frame-12.png";

export const servicePageData = {
  hero: {
    tagline: "We have a lot to offer",
    isTopMostSection:true,
    title: "SERVICES",
    desc: "Happy days and happy stays for your four-legged friends is what we’re all about. That’s why we’ve cared for thousands of Aussie fur-families from shorter daycare days, to longer overnight boarding stays.",
    imageSrc: ServiceHero,
    frameIncluded: true,
    buttons: [
      // { text: "Book now ", link: "/" }
    ],
  },
  servicesCardWithImages: [
    {
      title: "Dog Boarding",
      imageSrc: "/images/KIP-Happy-Stays-285.jpeg",
      content:
        "<p>Your pup will enjoy private indoor and outdoor spaces, nutritious meals, treats and, most im-paw-tantly, care from our passionate team of pet-loving people. Plenty of cuddles and social playtime with other pet pals are all part of the Kip experience.</p><p>We’re not your traditional dog boarding kennel. At Kip, keeping your pup active, safe and happy is our priority.</p> ",
      frameIncluded: true,
      imageOnLeft: true,
      buttons: [
        {
          text: "Learn More",
          link: "/services/dog-boarding/",
        }
      ],
    },
    {
      title: "Cat Boarding",
      imageSrc: "/images/KIP-Happy-Stays-802-scaled-e1597395741703.jpeg",
      content:
        "<p>The happiness of your feline friend is what drives us at Kip. We’re not a traditional cattery; we’re a pet resort, where your cat will be treated to 5-star service and comfy accommodation. They’ll stretch out in their own personal room and stretch out in our luxurious living room-style space.</p> <p>At Kip, their staycation will be simply purr-fect.</p> ",
      frameIncluded: true,
      
      buttons: [
        {
          text: "Learn More",
          link: "/services/cat-boarding/",
        }
      ],
    },
    {
      title: "Dog Daycare",
      imageSrc: "/images/dog-daycare.jpg",
      content:
        "<p>We’re paw-sionate about creating the perfect doggy daycare environment for your pooch.</p><p>When you want your dog to get the exercise they need, to be mentally stimulated and to make new friends in a safe setting, Kip doggy daycare is the place to be.</p>",
      frameIncluded: true,
      imageOnLeft: true,
      buttons: [
        {
          text: "Learn More",
          link: "/services/dog-daycare/",
        }
      ],
    },
    {
      title: "Dog Training",
      imageSrc: "/images/dog-training-image.png",
      content:
        "<p>From new puppies to older dogs, all dogs can learn new tricks! Our expert trainers and tailored training solutions will help you improve your relationship with your pooch and learn how to navigate the big wide world.</p><p>We offer puppy classes, our Board & Train Program, and Canine Coaching at select locations. Contact us today to learn more.<p/>",
      frameIncluded: true,
      buttons: [
        {
          text: "Learn More",
          link: "/services/dog-training/",
        }
      ],
    },
  ]
};
