import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function Index({ data }) {
  const { allContentfulAbout } = data;
  const [about] = allContentfulAbout.edges.map(({ node }) => node);

  return (
    <Layout>
      <article id='about'>{renderRichText(about.bio)}</article>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          bio {
            raw
          }
          portrait {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
