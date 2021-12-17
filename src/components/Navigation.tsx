import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from 'reactstrap';

export default function Navigation({ links }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Navbar expand='lg' className='navigation col-lg-auto'>
      <NavbarToggler onClick={toggle}>MENU</NavbarToggler>
      <Collapse isOpen={open} navbar>
        <Nav className='nav-list' navbar vertical>
          {links.map((link) => (
            <NavItem className='nav-item' key={link}>
              {link === 'back' ? (
                <Link to='/' className='nav-link'>
                  {link}
                </Link>
              ) : (
                <Link to={'#' + link} activeClassName='active' className='nav-link'>
                  {link}
                </Link>
              )}
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
