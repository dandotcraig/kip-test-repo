import React from "react";
import { Layout } from "../components/layout";
import { Section } from "../components/shared/section";
import { Container } from "../components/shared/container";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import sell from "../images/sell.jpg";
import KIPHappyStays from "../images/KIP-Happy-Stays-1581.jpg";
import SellKip from "../images/Sell-kip.png";
import BusinessTalkImage from "../images/Business-Talk-Image.png";
import AllPagesReviews from "../components/common/reviewCards/AllPagesReview";
import InstagramReviews from "../components/common/reviewCards/InstagramReviews";
import SEOMeta from "../components/common/SEO-Meta";
import { getReviews } from "../utils";
import SectionSeparator from "../components/common/section-separator";
import { fetchInstagramFeeds } from "./index";

const SellYourBusiness: React.FC<{ serverData: any }> = ({ serverData }) => {
  let { seoData, instagramFeeds } = serverData;
  const [reviews, setReviews] = React.useState<any>([]);

  React.useEffect(() => {
    const getGoogleReviews = async () => {
      const data = await getReviews();
      setReviews(data);
    };
    getGoogleReviews();
  }, []);

  return (
    <Layout>
      <SEOMeta seoData={seoData} />
      <Section className="pt-6">
        <Container>
          <CardWithImage
            titleSize="h1"
            data={{
              title: "Sell us your business",
              tagline: "",
              content: `Do you own a doggy daycare or pet boarding business? We are looking for new locations to join the Kip family. Please contact us to initiate a confidential discussion about selling your business.`,
              imageSrc: sell,
              isTopMostSection:true,
              frameIncluded: true,
              buttons: [
                {
                  text: "Contact Us",
                  link: "mailto:confidential@kip.com.au",
                },
              ],
            }}
          />
        </Container>
      </Section>
      <SectionSeparator />
      <Section>
        <Container>
          <CardWithImage
            data={{
              title: "What We're Looking For",
              tagline: "",
              content: `<p>If you have a dog boarding, cat boarding or daycare business and you're considering selling,we're interested in discussing opportunities. We're particularly interested in business that meet these criteria:</p> <ul><li>              Established facilities operating in accordance with their council permit</li>
              <li>Business with the great reputation for providing outstanding service and delivering high quality cares to pets</li>
              <li>Facilities that have a minimum of $600k of revenue</li>
              <li>Business with a high calibre, motivated team that want to keep growing with Kip</li></ul> 
              <p>Even if your business doesn’t satisfy these criteria please reach out for a confidential discussion.</p>`,
              imageSrc: KIPHappyStays,
              imageOnLeft: true,
            }}
          />
        </Container>
      </Section>
      <SectionSeparator />

      <Section>
        <Container>
          <CardWithImage
            data={{
              title: "Why Sell to Kip?",
              content: `<p>Kip is dedicated to providing pets with the best possible care and enrichment. We have a proven track record of collaborating with business owners to facilitate the sale of their business in a seamless manner. We pride ourselves on conducting negotiations in an honest and upfront manner to ensure fair and amicable outcomes for vendors.</p>`,
              imageSrc: SellKip,
            }}
          />
        </Container>
      </Section>
      <SectionSeparator />

      <Section>
        <Container>
          <CardWithImage
            data={{
              title: "Let's Talk Business",
              tagline: "Are you selling your business?",
              content: `<p>If you're ready to explore the opportunity of selling your dog boarding or daycare business to Kip, please get in touch with us via email today. We're eager to discuss the details and potentially create a pawsitive future together.
</p>`,
              imageSrc: BusinessTalkImage,
              imageOnLeft: true,
            }}
          />
        </Container>
      </Section>
      <SectionSeparator />

      {/* <Section>
        <Container >
          <ContantBoxWithImage cardClassName=" bg-bone-200"
            data={{
              tagline: "Example",
              title: "Kip _______",
              content: `<h6>Our Cobham site is located at a farm formerly used for dairy.</h6><span>The land is unsuitable for arable farming due to poor soil quality and awkward field sizes, but ideal for Bruce’s. Our business provides a diversified non-seasonal income stream, and has enabled the landlord to benefit from planning gain. The Landlord initially rented 5 acres to Bruce, it was such a success for both that they have rented a further 20 acres.</span>`,
              imageSrc: "/static/images/Frame22.png"
            }}
          />
        </Container>
      </Section>
      <Section>
        <Container >
          <ContantBoxWithImage cardClassName=" bg-sky-500"
            data={{
              tagline: "Example",
              title: "Kip _______",
              content: `<h6>Our Cobham site is located at a farm formerly used for dairy.</h6><span>The land is unsuitable for arable farming due to poor soil quality and awkward field sizes, but ideal for Bruce’s. Our business provides a diversified non-seasonal income stream, and has enabled the landlord to benefit from planning gain. The Landlord initially rented 5 acres to Bruce, it was such a success for both that they have rented a further 20 acres.</span>`,
              imageSrc: "/static/images/Frame22.png"
            }}
          />
        </Container>
      </Section> */}
      {/* <Section>
        <Container >
          <LetsChat />
        </Container>
      </Section> */}
      <AllPagesReviews data={reviews} />
      <SectionSeparator />
      <InstagramReviews instagramFeeds={instagramFeeds?.data} />
      <SectionSeparator />
    </Layout>
  );
};
export default SellYourBusiness;

export async function getServerData() {
  const seoData = {
    title: "Kip  | Sell us your business ",
  };
  let feeds = await fetchInstagramFeeds();

  return {
    props: { seoData, instagramFeeds: feeds },
  };
}
