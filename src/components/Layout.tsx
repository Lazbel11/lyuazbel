import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import '../styles/main.scss';
import SEO, { SEOProps } from './SEO';
import { SiteMetadata } from 'types';

type Props = {
  children: React.ReactNode;
  siteData: SiteMetadata;
  seo: SEOProps;
};

export default function Layout({ children, siteData, seo }: Props) {
  const { navigation, title, license, links } = siteData;
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
