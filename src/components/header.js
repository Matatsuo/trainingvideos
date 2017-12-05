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

const Header = props => (
  <header className="header">
    <div className="logo-box">
      <Link to="/">
        <img className="logo" src={logo} alt="medimap-logo" />
      </Link>
    </div>
    <nav className="navigation">
      <ul className="nav-list">
        {props.pages.map(({ node }) => (
          <ListLink to={node.frontmatter.path}>{node.frontmatter.heading}</ListLink>
        ))}
      </ul>
    </nav>
  </header>
);

export { Header };
