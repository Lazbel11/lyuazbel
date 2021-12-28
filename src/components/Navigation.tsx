import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { mapNavigationToUrl } from '../config';

export default function Navigation({ brand, links }) {
  const [open, setOpen] = useState(false);

  return (
    <Navbar id='navigation' expand='lg' className='px-2 py-2 px-lg-4 py-lg-3 align-items-start'>
      <div className='container-fluid container-lg flex-lg-column px-0 mx-0 position-relative'>
        <Link className='navbar-brand d-inline-block my-0 mx-0 mb-lg-1 p-2' to='/'>
          {brand}
        </Link>
        <NavbarToggler onClick={() => setOpen(!open)} className='position-absolute p-2'>
          MENU
        </NavbarToggler>
        <Collapse isOpen={open} navbar>
          <Nav className='nav-list mx-0' navbar vertical>
            {links.map((link) => (
              <NavItem className='nav-item' key={link}>
                <Link to={mapNavigationToUrl[link]} activeClassName='active' className='nav-link p-2'>
                  {link}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
