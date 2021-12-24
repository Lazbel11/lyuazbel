import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Privacy({ data }) {
  const { content } = data;
  const [privacy] = content.edges.map(({ node }) => node.privacyPolicy.childMarkdownRemark);

  return (
    <Layout seo={{ title: 'Privacy Policy' }}>
      <article
        id='privacy'
        dangerouslySetInnerHTML={{
          __html: privacy.html,
        }}
      ></article>
    </Layout>
  );
}

export const query = graphql`
  query {
    content: allContentfulImprintPrivacyPolicy {
      edges {
        node {
          privacyPolicy {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
