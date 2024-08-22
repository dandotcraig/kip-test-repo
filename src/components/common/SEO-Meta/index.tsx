import React from "react";
import { Helmet } from "react-helmet";

export default function SEOMeta({ seoData }: any) {
  return (
    <Helmet>
      {seoData?.title && <title>{seoData.title}</title>}
      {seoData?.title && <meta name="title" content={seoData.title} />}
      {seoData?.description && (
        <meta name="description" content={seoData.description} />
      )}
      {seoData?.og_title && (
        <meta property="og:title" content={seoData.og_title} />
      )}
      {seoData?.og_description && (
        <meta property="og:description" content={seoData.og_description} />
      )}
      {seoData?.canonical && <link rel="canonical" href={seoData.canonical} />}

      {seoData?.og_url && <meta property="og:url" content={seoData.og_url} />}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kip" />
    </Helmet>
  );
}
