import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from './Navigation';
import SEO, { SEOProps } from './SEO';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  seo?: SEOProps;
  location?: any;
};

export default function Layout({ location, children, seo }: Props) {
  const { site } = useStaticQuery(query);
  const { navigation, titleShort, license, links } = site.siteMetadata;

  return (
    <div id='layout'>
      <SEO title={seo?.title} description={seo?.description} image={seo?.image} />
      <div className='d-flex flex-column flex-lg-row pt-2 pt-lg-5'>
        <div className='col-lg-auto'>
          <Navigation brand={titleShort} links={navigation} location={location} />
        </div>
        <div className='col'>
          <main id='content' className='container m-0 position-relative px-3'>
            {children}
            <Footer title={titleShort} />
          </main>
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
