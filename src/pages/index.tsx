import { graphql } from 'gatsby';
import * as React from 'react';
import Obfuscate from 'react-obfuscate';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { find } from 'lodash';

export default function Index({ data, location }) {
  const email = find(data.site.siteMetadata.links, (link) => link.name.toLowerCase() === 'email');
  const { portrait, bio, tagline } = data.contentfulAbout;
  const seo = { tagline };

  return (
    <Layout location={location} seo={seo}>
      <article id='about'>
        <div className='container-fluid px-0'>
          <div className='row gx-0'>
            <div className='col-12 col-lg-auto me-lg-4 me-xl-5'>
              <GatsbyImage
                objectFit='cover'
                image={getImage(portrait)!}
                alt='Portrait of Lyu Azbel'
                className='portrait mb-4'
              />
            </div>
            <div className='col text-max-width'>
              <div
                dangerouslySetInnerHTML={{
                  __html: bio.childMarkdownRemark.html,
                }}
              ></div>
              <div className='contact'>
                <strong>Contact: </strong>
                <Obfuscate email={email?.href || ''} target='_blank' rel='noopener noreferrer' />
              </div>
            </div>
          </div>
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
        gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED, cropFocus: FACE, resizingBehavior: FILL)
      }
      bio: childContentfulAboutBioTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
