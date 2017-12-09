import React from 'react';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="pageContainer">
        <h1 className="pageHeader landing">Training Materials</h1>
        <div className="landingContainer">
          <div className="landingDescription">
            <p>To access Medi-Map training materials, select the relevant option below:</p>
          </div>
          <div className="landingPages">
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <button key={node.frontmatter.heading}>
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
