import { graphql } from 'gatsby';
import * as React from 'react';
import Obfuscate from 'react-obfuscate';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import find from 'lodash/find';
import filter from 'lodash/filter';
import { GoMail } from '@react-icons/all-files/go/GoMail';
import { mapLinkIdToIcon } from '../config';

export default function Index({ data, location }) {
  const { links } = data.site.siteMetadata;
  const email = find(links, (link) => link.name.toLowerCase() === 'email');
  const restLinks = filter(links, (link) => link.name.toLowerCase() !== 'email');
  const { portrait, bio, tagline } = data.contentfulAbout;
  const seo = { tagline };

  return (
    <Layout location={location} seo={seo}>
      <article id='about'>
        <div className='container-fluid px-0'>
          <div className='row gx-0'>
            <div className='col-12 col-lg-12 me-lg-4 me-xl-5'>
              <GatsbyImage
                objectFit='cover'
                image={getImage(portrait)!}
                alt='Portrait of Lyu Azbel'
                className='portrait mb-4'
              />
            </div>
            <div className='col '>
              <div
                className='text-justify'
                dangerouslySetInnerHTML={{
                  __html: bio.childMarkdownRemark.html,
                }}
              ></div>
              <ul className='contact list-unstyled ms-0 d-flex flex-row justify-content-start'>
                <li className='me-4'>
                  <Obfuscate email={email?.href || ''} className='iconLink' target='_blank' rel='noopener noreferrer'>
                    <GoMail />
                  </Obfuscate>
                </li>
                {restLinks.map((link) => {
                  const Icon = mapLinkIdToIcon[link.name.toLowerCase()];
                  return (
                    <li className='me-4'>
                      <a className='iconLink' href={link.href} target='_blank' rel='noopener noreferrer'>
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
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
        gatsbyImageData(layout: CONSTRAINED, cropFocus: FACE, resizingBehavior: FILL)
      }
      bio: childContentfulAboutBioTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
