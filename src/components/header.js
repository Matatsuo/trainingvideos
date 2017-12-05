import React from 'react';
import Link from 'gatsby-link';
import logo from '../resources/images/medimap.png';

const Navigation = props => (
  <nav className="navigation">
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
    <div className="logo-box">
      <Link to="/">
        <img className="logo" src={logo} alt="medimap-logo" />
      </Link>
    </div>
    <Navigation pages={props.pages} />
  </header>
);

export { Header, Navigation };
