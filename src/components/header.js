import React from 'react';
import Link from 'gatsby-link';
import logo from '../resources/images/medimap.png';

const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
);

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <ListLink to="/hospice/">Hospice</ListLink>
      <ListLink to="/carefacility/">Care Facility</ListLink>
    </ul>
  </nav>
);

const Header = () => (
  <header className="header">
    <div className="logo-box">
      <Link to="/">
        <img className="logo" src={logo} alt="medimap-logo" />
      </Link>
    </div>
    <Navigation />
  </header>
);

export { Header, Navigation };
