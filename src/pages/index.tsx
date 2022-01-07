import { graphql } from 'gatsby';
import * as React from 'react';
import Obfuscate from 'react-obfuscate';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { find } from 'lodash';
import { MailIcon } from '@primer/octicons-react';

// todo: add email icon

export default function Index({ data }) {
  const email = find(data.site.siteMetadata.links, (link) => link.name.toLowerCase() === 'email');
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
        <Obfuscate email={email?.href || ''} target='_blank' rel='noopener noreferrer'>
          <MailIcon size={24} />
        </Obfuscate>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        links {
          name
          href
        }
      }
    }
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
