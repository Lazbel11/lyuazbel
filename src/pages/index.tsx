import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function Index({ data }) {
  const { site, about } = data;

  const [bla] = about.edges.map(({ node }) => node);
  return (
    <Layout siteData={site.siteMetadata}>
      <section id='about'>{renderRichText(bla.bio)}</section>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        license
        navigation
        links {
          name
          href
        }
      }
    }
    about: allContentfulAbout {
      edges {
        node {
          bio {
            raw
          }
          contentful_id
          education {
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
