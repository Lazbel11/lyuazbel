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
  const { navigation, title, license, links } = site.siteMetadata;

  return (
    <div id='layout'>
      <SEO title={seo?.title} description={seo?.description} image={seo?.image} />
      <div className='flex'>
        <Navigation brand={title} links={navigation} />
        <main id='content'>{children}</main>
      </div>
      <Footer title={title} />
    </div>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
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
