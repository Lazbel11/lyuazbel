import React from 'react';
import { Link } from 'gatsby';
import { mapLinkIdToIcon } from '../config';
import classNames from 'classnames';

export default function Footer({ title, links, location }) {
  const isLinkIcons = location?.pathname !== '/';
  return (
    <footer id='footer'>
      <small className='d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center align-items-baseline p-0'>
        <ul className='list-unstyled ms-0 mb-0 d-flex flex-row justify-content-start align-items-baseline'>
          {links.map((link) => {
            const Icon = mapLinkIdToIcon[link.name.toLowerCase()];
            return (
              <li
                className={classNames('mb-1', {
                  'me-2': !isLinkIcons,
                  'me-4': isLinkIcons,
                })}
                key={link.name}
              >
                <a
                  className={classNames({ iconLink: isLinkIcons })}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {isLinkIcons ? <Icon /> : link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='legal list-unstyled ms-0 mb-0 d-flex flex-row mb-1'>
          <li className='me-2 mb-0'>
            <Link to='/imprint'>Imprint</Link>
          </li>
          <li className='me-2 mb-0'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </li>
          <span>&copy; {new Date().getFullYear()}&nbsp;</span>
          <span className='text-nowrap'>{title}</span>
        </ul>
        <span className='credits'>
          Website by&nbsp;
          <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer'>
            Vincent Reynaud
          </a>
        </span>
      </small>
    </footer>
  );
}
