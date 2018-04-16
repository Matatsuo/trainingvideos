import React from 'react';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-container">
        <h1 className="page-header landing">Training Materials</h1>
        <div className="landing-container">
          <div className="landing-description">
            <p>To access Medi-Map training materials please select the relevant option below:</p>
          </div>
          <div className="landing-pages">
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <button className="button-page" key={node.frontmatter.heading}>
                <Link
                  style={{ display: 'block', height: '100%' }}
                  activeClassName="active"
                  to={node.frontmatter.path}
                >
                  {node.frontmatter.heading}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            heading
            path
          }
        }
      }
    }
  }
`;
