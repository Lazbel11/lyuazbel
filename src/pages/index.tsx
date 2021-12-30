import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

export default function Index({ data }) {
  const { portrait, bio } = data.contentfulAbout;

  return (
    <Layout>
      <article
        id='about'
        dangerouslySetInnerHTML={{
          __html: bio.childMarkdownRemark.html,
        }}
      ></article>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulAbout {
      portrait {
        gatsbyImageData
      }
      bio: childContentfulAboutBioTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
