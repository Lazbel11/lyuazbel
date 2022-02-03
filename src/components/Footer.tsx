import React from 'react';
import { Link } from 'gatsby';
import { mapLinkIdToIcon } from '../config';
import classNames from 'classnames';

export default function Footer({ title, links, location }) {
  return (
    <footer id='footer'>
      <small className='d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-baseline p-0'>
        <ul className='legal list-unstyled d-flex flex-row ms-0 mb-1 order-1'>
          <li className='me-2 mb-0'>
            <Link to='/imprint'>Imprint</Link>
          </li>
          <li className='me-2 mb-0'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </li>
          <span>&copy; {new Date().getFullYear()}&nbsp;</span>
          <span className='text-nowrap'>{title}</span>
        </ul>
        <span className='separator mx-2 order-2 mb-1'>&middot;</span>
        <span className='credits order-3 mb-1'>
          Website by&nbsp;
          <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer'>
            Vincent Reynaud
          </a>
        </span>
        <span className='separator mx-2 order-4 mb-1'>&middot;</span>
        <ul className='contact list-unstyled d-flex flex-row justify-content-start align-items-baseline order-0 order-md-5 ms-0 mb-1'>
          {links.map((link) => {
            const Icon = mapLinkIdToIcon[link.name.toLowerCase()];
            return (
              <li className='mb-0 me-3' key={link.name}>
                <a
                  className={`iconLink ${link.name.toLowerCase()}`}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </small>
    </footer>
  );
}
