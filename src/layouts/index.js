import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Header, Navigation } from "../components/header";
import logo from "../resources/images/medimap.png";

import "../styles/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Medi Map Training"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <main
      style={{
        margin: "0 auto",
        textAlign: "center",
        minHeight: "80vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
