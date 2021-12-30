import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Imprint({ data }) {
  const { html } = data.content.childMarkdownRemark;

  return (
    <Layout seo={{ title: 'Imprint' }}>
      <article
        id='imprint'
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></article>
    </Layout>
  );
}

export const query = graphql`
  query {
    content: contentfulImprintPrivacyPolicyImprintTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`;
