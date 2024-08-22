import { Container } from "../components/shared/container";
import { Section } from "../components/shared/section";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import React from "react";
import ThankYouKip from "../images/thankyoukip.jpeg";
import Homestead2 from "../images/Homestead-2.png";
import SEOMeta from "../components/common/SEO-Meta";
import { HeadFC } from "gatsby";
import { Layout } from "../components/layout";
import { getReviews } from "../utils";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import SectionSeparator from "../components/common/section-separator";

function ThankYouPage() {
  let thankYouSection = {
    tagline: "",
    title: "We can’t wait to see you at Kip Alexandria!",
    tagline2: "",
    imageSrc: ThankYouKip,
    imageAlt: "We can’t wait to see you at Kip Alexandria!",
    buttons: [
      {
        link: "/",
        text: "BOOK NOW",
      },
    ],
    content: ``,
  };
  let whatWeDoSection = {
    tagline: "Doggy Daycare",
    imageOnLeft: true,
    frameIncluded: true,
    title: "What We Do:",
    tagline2: "",
    imageSrc: Homestead2,
    imageAlt: "What We Do:",
    buttons: [
      {
        link: "/",
        text: "BOOK NOW",
      },
    ],
    content: `<p>Here at Kip Alexandria, we’re all about happy days and happy stays for your four-legged friends. We’re a custom-built centre designed specifically with your doggy’s happiness and safety in mind. Your furball will play and explore with other pet pals and you can stay pup-dated on social media with our regular photo updates.</p>`,
  };
  const [reviews, setReviews] = React.useState<any>([])
  React.useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    
    getGoogleReviews();
  }, []);
  return (
    <Layout>
      <Section className="pt-6">
        <Container className="flex flex-col ">
          <CardWithImage titleClassName="normal-case" data={thankYouSection} />
        </Container>
      </Section>
      <SectionSeparator />
      <Section>
        <Container className="flex flex-col ">
          <CardWithImage titleClassName="normal-case" data={whatWeDoSection} />
        </Container>
      </Section>
      <SectionSeparator />

      <AllPagesReviews data={reviews} />
      <SectionSeparator />

    </Layout>
  );
}

export default ThankYouPage;
export const Head: HeadFC = () => {
  const seoData = {
    title: "Thank You - Kip Kip",
    description: "",
    og_title: "Thank You - Kip Kip",
    og_description: "",
    canonical: "https://kip.com.au/thank-you/",
  };
  return <SEOMeta seoData={seoData} />;
};
export async function getServerData() {
  return {
    props: {},
  };
}