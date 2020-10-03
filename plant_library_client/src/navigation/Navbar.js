import React from 'react';
import NavLink from './NavLink';

const navLinks = ['Home', 'Plants'];

const Navbar = () => {
  return navLinks.map((link) => <NavLink link={link} />);
};

export default Navbar;