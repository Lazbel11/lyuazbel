import React from 'react';
import { Link } from 'gatsby';

import '../styles/main.scss';

export default function Footer({ title }) {
  return (
    <footer className='footer'>
      <Link to='/imprint'>Imprint</Link> &middot; <Link to='/privacy'>Privacy Policy</Link> &copy;{' '}
      {new Date().getFullYear()}&nbsp;
      <span className='text-nowrap'>{title}</span>
      <span className='credit'>
        Website by{' '}
        <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer'>
          Vincent Reynaud
        </a>
      </span>
    </footer>
  );
}
