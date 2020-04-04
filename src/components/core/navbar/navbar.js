import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__list">
        <NavLink
          to="/calculator"
          className="navbar__item"
          activeClassName="navbar__item--active"
          >
          <i className="fa fa-calculator"></i>
        </NavLink>
        <NavLink
          to="/buffs"
          className="navbar__item"
          activeClassName="navbar__item--active"
          >
          <i className="fa fa-list"></i>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;