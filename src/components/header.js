import React from 'react';
import Link from 'gatsby-link';
import logo from '../resources/images/medimap.png';

const menuToggle = e => {
  if (document.getElementById('menu-toggle').checked) {
    document.getElementById('menu-toggle').checked = false;
  } else {
    document.getElementById('menu-toggle').checked = true;
  }
};

const hideMenu = e => {
  document.getElementById('menu-toggle').checked = false;
};

const Navigation = props => (
  <nav className="navigation">
    <input type="checkbox" className="menu-toggle" id="menu-toggle" />
    <div className="menu" onClick={menuToggle}>
      Menu
    </div>
    <div className="pages">
      <div className="pages-container">
        <ul className="nav-list">
          {props.pages.map(({ node }) => (
            <li key={node.frontmatter.heading}>
              <Link activeClassName="active" to={node.frontmatter.path} onClick={hideMenu}>
                {node.frontmatter.heading}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const Header = props => (
  <header className="header">
    <Link to="/">
      <img className="logo" src={logo} alt="medimap-logo" onClick={hideMenu} />
    </Link>
    <Navigation pages={props.pages} />
  </header>
);

export { Header, Navigation };
