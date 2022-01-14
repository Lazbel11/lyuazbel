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
        <div className='d-flex flex-column align-items-start'>
          <GatsbyImage
            objectFit='cover'
            image={getImage(portrait)!}
            alt='Portrait of Lyu Azbel'
            className='portrait mb-4'
          />
          <h1>{tagline}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: bio.childMarkdownRemark.html,
            }}
          ></div>
          <Obfuscate email={email?.href || ''} target='_blank' rel='noopener noreferrer'>
            <MailIcon size={24} />
          </Obfuscate>
        </div>
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
      tagline
      portrait {
        gatsbyImageData(width: 350, height: 350, layout: CONSTRAINED, cropFocus: FACE, resizingBehavior: FILL)
      }
      bio: childContentfulAboutBioTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
