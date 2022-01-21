import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title }) {
  return (
    <footer
      id='footer'
      className='d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center p-0'
    >
      <small className='legal'>
        <nav className='d-inline'>
          <Link to='/imprint'>Imprint</Link> &middot; <Link to='/privacy-policy'>Privacy Policy</Link>&nbsp;
        </nav>
        <span>&copy; {new Date().getFullYear()}&nbsp;</span>
        <span className='text-nowrap'>{title}</span>
      </small>
      <small className='credits'>
        Website by&nbsp;
        <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer'>
          Vincent Reynaud
        </a>
      </small>
    </footer>
  );
}
