import React from 'react';
import Link from 'gatsby-link';
import logo from '../resources/images/medimap.png';

const Navigation = props => (
  <nav className="navigation">
    <label htmlFor="menu-toggle">Menu</label>
    <input type="checkbox" className="menu-toggle" id="menu-toggle" value="off" />
    <ul className="nav-list">
      {props.pages.map(({ node }) => (
        <li key={node.frontmatter.heading}>
          <Link activeClassName="active" to={node.frontmatter.path}>
            {node.frontmatter.heading}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Header = props => (
  <header className="header">
    <Link to="/">
      <img className="logo" src={logo} alt="medimap-logo" />
    </Link>
    <Navigation pages={props.pages} />
  </header>
);

export { Header, Navigation };
