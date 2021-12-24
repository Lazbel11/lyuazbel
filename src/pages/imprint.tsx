import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Imprint({ data }) {
  const { content } = data;
  const [imprint] = content.edges.map(({ node }) => node.imprint);
  console.log(imprint);

  return (
    <Layout seo={{ title: 'Imprint' }}>
      <article id='imprint'>{renderRichText(imprint)}</article>
    </Layout>
  );
}

export const query = graphql`
  query {
    content: allContentfulImprintPrivacyPolicy {
      edges {
        node {
          imprint {
            raw
          }
        }
      }
    }
  }
`;
