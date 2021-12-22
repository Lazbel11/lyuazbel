import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import '../styles/main.scss';
import SEO, { SEOProps } from './SEO';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  children: React.ReactNode;
  seo?: SEOProps;
};

export default function Layout({ children, seo }: Props) {
  const { site } = useStaticQuery(query);
  const { navigation, title, license, links } = site.siteMetadata;

  return (
    <div className='layout'>
      <SEO title={seo?.title} description={seo?.description} image={seo?.image} />
      <div className='header'>
        <h1 className='title'>{title}</h1>
      </div>
      <div className='flex'>
        <Navigation links={navigation} />
        <main className='content'>{children}</main>
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
