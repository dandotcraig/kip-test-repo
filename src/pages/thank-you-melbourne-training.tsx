import { Container } from "../components/shared/container";
import { Section } from "../components/shared/section";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import React from "react";
import BeautifulCollieDog from "../images/beautiful-border-collie-dog-training-with-owner-scaled.jpeg";
import Homestead2 from "../images/Homestead-2.png";
import SEOMeta from "../components/common/SEO-Meta";
import { HeadFC } from "gatsby";
import { Layout } from "../components/layout";
import { getReviews } from "../utils";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import SectionSeparator from "../components/common/section-separator";

function ThankYouMelbournePage() {

  const [reviews, setReviews] = React.useState<any>([])
  React.useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    
    getGoogleReviews();
  }, []);

  let thankYouForSubmissionSection = {
    tagline:
      "One of our trainers will call you in the next 48 business hours to discuss your training needs.",
    title: "Thanks for your submission!",
    tagline2: "",
    imageSrc: BeautifulCollieDog,
    imageAlt: "Thanks for your submission!",
    buttons: [],
    content: ``,
  };
  let whatWeDoSection = {
    tagline: "Dog Training",
    imageOnLeft: true,
    frameIncluded: true,
    title: "What We Do:",
    tagline2: "",
    imageSrc: Homestead2,
    imageAlt: "What We Do:",
    buttons: [],
    content: `<p>You don't have to live with poor behaviour from your dog anymore! If you're here, it's likely that you're worried about your dog's unwanted behaviours. Hundreds of dogs have graduated from our training programs, and now it's your turn.</p>`,
  };
  return (
    <Layout>
      <Section className="pt-6">
        <Container className="flex flex-col ">
          <CardWithImage
            titleClassName="normal-case"
            data={thankYouForSubmissionSection}
          />
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

export default ThankYouMelbournePage;
export const Head: HeadFC = () => {
  const seoData = {
    title: "Thank You MelbourneTraining - Kip Kip",
    description: "",
    og_title: "Thank You MelbourneTraining - Kip Kip",
    og_description: "",
    canonical: "https://kip.com.au/thank-you-melbourne-training/",
  };
  return <SEOMeta seoData={seoData} />;
};
export async function getServerData() {
  return {
    props: {},
  };
}