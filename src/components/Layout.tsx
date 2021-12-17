import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import '../styles/main.scss';

export default function Layout({ children, siteData }) {
  const { navigation, title, license, links } = siteData;
  return (
    <div className='layout'>
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
