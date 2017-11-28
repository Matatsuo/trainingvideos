import React from "react";
import Link from "gatsby-link";
import { Navigation } from "../components/header";

const IndexPage = () => (
  <div>
    <h2 className="pageHeader">Medi Map Training</h2>
    <p> Under construction, will look prettier soon</p>
    <p>Select the relevant training module to begin:</p>
    <div className="customerLinks">
      <Navigation />
    </div>
  </div>
);

export default IndexPage;

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
