import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Index({ data }) {
  const { tagline, portrait, bio } = data.contentfulAbout;

  return (
    <Layout>
      <article id='about'>
        <h3>{tagline}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: bio.childMarkdownRemark.html,
          }}
        ></div>
        <GatsbyImage image={getImage(portrait)!} alt='' />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulAbout {
      tagline: description
      portrait {
        gatsbyImageData(width: 200, placeholder: NONE)
      }
      bio: childContentfulAboutBioTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
