import { Layout } from "../components/layout";
import { Container } from "../components/shared/container";
import React from "react";
import { Link } from "gatsby-link";
import SEOMeta from "../components/common/SEO-Meta";

export default function SingleBlogPage({ pageContext }: any) {
  return (
    <Layout>
      <SEOMeta seoData={pageContext.seo} />
      <Container className="py-4">
        <Link to="/blogs">
          <span>← Back to all blogs</span>
        </Link>
        <div
          className="custom-blog-slug"
          dangerouslySetInnerHTML={{ __html: pageContext.body }}
        />
      </Container>
    </Layout>
  );
}
