import React from "react";
import Link from "gatsby-link";
import { Navigation } from "../components/header";

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="pageContainer">
        <h1 className="pageHeader">Medi Map Training</h1>
        <p> Under construction, will look prettier soon</p>
        <p>Select the relevant training module to begin:</p>
        <div className="customerLinks">
          <Navigation />
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            videos {
              video {
                title
                link
              }
            }
          }
        }
      }
    }
  }
`;
