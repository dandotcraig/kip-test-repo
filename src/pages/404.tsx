import { HeadFC } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { Section } from "../components/shared/section";
import { Container } from "../components/shared/container";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import ArtboardImage from "../images/Artboard-1-1.png"
import SEOMeta from "../components/common/SEO-Meta";


export default function NotFound() {
  return (
    <Layout >
      <Section>
        <Container>
          <CardWithImage
            data={{
              title: "404 ERROR",
              content: `<p>Oops! It seems you've stumbled upon an invalid URL. No worries, let's get you back on track and assist you with your booking.</p><p> Feel free to reach out to us via our 'Contact Us' page for immediate assistance. We're here to help you every step of the way!</p>`,

              imageSrc: ArtboardImage,
              frameIncluded: true,
              buttons:[
                {
                  text:"Book Now",
                  link:"/"
                }
              ]
            }}
          />
        </Container>
      </Section>
    </Layout>
  );
}
// export const Head: HeadFC = () => (
//   <>
//     <title>Page Not Found</title>
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
//       rel="stylesheet"
//     />
//   </>
// );
export const Head: HeadFC = () => {
  const seoData = {
    title: "Page Not Found",
    og_title: "Page Not Found",
  };
  return <SEOMeta seoData={seoData} />;
};
