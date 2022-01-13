import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from './Navigation';
import Footer from './Footer';
import SEO, { SEOProps } from './SEO';

import '../styles/main.scss';

type Props = {
  children: React.ReactNode;
  seo?: SEOProps;
};

export default function Layout({ children, seo }: Props) {
  const { site } = useStaticQuery(query);
  const { navigation, titleShort, license, links } = site.siteMetadata;

  return (
    <div id='layout'>
      <SEO title={seo?.title} description={seo?.description} image={seo?.image} />
      <div className='d-flex flex-column flex-lg-row'>
        <Navigation brand={titleShort} links={navigation} />
        <div className='d-inline-block w-100'>
          <main id='content' className='container my-0 position-relative p-3'>
            {children}
          </main>
          <Footer title={titleShort} />
        </div>
      </div>
    </div>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        titleShort
        navigation
        license
        links {
          name
          href
        }
      }
    }
  }
`;
