import React from 'react';
import { Link } from 'gatsby';
import { mapLinkIdToIcon } from '../config';
import classNames from 'classnames';

export default function Footer({ title, links, location }) {
  return (
    <footer id='footer'>
      <small className='d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center align-items-baseline p-0'>
        <ul className='contact list-unstyled d-flex flex-row justify-content-start align-items-baseline order-0 order-sm-5 ms-0 mb-1'>
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
        <div className='legal d-flex flex-column flex-sm-row ms-0 mb-0'>
          <ul className='list-unstyled d-flex flex-row mb-1 ms-0'>
            <li className='me-2 mb-0'>
              <Link to='/imprint'>Imprint</Link>
            </li>
            <li className='me-2 mb-0'>
              <Link to='/privacy-policy' className='text-nowrap'>
                Privacy Policy
              </Link>
            </li>
            <li className='me-2 mb-0'>&middot;</li>
            <li className='credits me-2 mb-0'>
              Website by&nbsp;
              <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer' className='text-nowrap'>
                Vincent Reynaud
              </a>
            </li>
          </ul>
          <span className='me-2 mb-0 text-nowrap'>
            &copy; {new Date().getFullYear()} {title}
          </span>
        </div>
      </small>
    </footer>
  );
}
