import React from "react";
import Link from "gatsby-link";
import logo from "../resources/images/medimap.png";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <ListLink to="/hospice">Hospice</ListLink>
      <ListLink to="/resthome">Rest Home</ListLink>
    </ul>
  </nav>
);

const Header = () => (
  <header
    className="header"
    style={{
      backgroundColor: "rgb(255, 255, 255)",
      borderBottom: "solid 1px rgb(183, 183, 183)",
      minHeight: "20vh",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <div className="logo-box" style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          textTransform: "uppercase"
        }}
      >
        <img
          className="logo"
          src={logo}
          style={{ width: "248px", height: "119px", margin: "0" }}
          alt="medimap-logo"
        />
      </Link>
    </div>
    <Navigation />
  </header>
);

export { Header, Navigation };
