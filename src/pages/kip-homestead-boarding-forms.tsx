import React from "react";
import { Layout } from "../components/layout";
import SEOMeta from "../components/common/SEO-Meta";
import { CardWithImage } from "../components/shared/ui/card-with-image";
import PdfFiles from "../components/kip-homestead-boarding-page/PdfFiles";
import SectionSeparator from "../components/common/section-separator";

const HomesteadBoardingForms: React.FC<any> = ({ serverData }) => {
  return (
    <Layout>
      <SEOMeta seoData={serverData.seoData} />
      <div className="pt-6">
        <CardWithImage
          isForm
          titleSize="h1"
          titleClassName="normal-case"
          data={{
            title: "Kip Homestead Training Enrolment Form",
            content: `<p>Download the following forms below.</p>`,
            frameIncluded: true,
            imageSrc: "",

            buttons: [
              {
                link: "https://reserve.kip.com.au/kip-training-enrolment-form/",
                text: "LET’S GET STARTED",
              },
            ],
          }}
        />
      </div>
      <SectionSeparator />
      <PdfFiles />
      <SectionSeparator />
    </Layout>
  );
};

export default HomesteadBoardingForms;

export async function getServerData() {
  const seoData = {
    title: "Boarding Forms - Kip",
    description: "",
    og_title: "Boarding Forms - Kip<",
    og_description: "",
    canonical: "https://kip.com.au/kip-homestead-boarding-forms/",
  };
  return {
    props: { seoData },
  };
}
