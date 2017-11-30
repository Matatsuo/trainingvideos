import React from 'react';
import Link from 'gatsby-link';
import { Navigation } from '../components/header';

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
        <div>
          <h1 className="pageHeader">Medi-Map Training</h1>
          <p> Under construction, will look prettier soon</p>
          <p>
            What I am working on:<ul>
              <li>
                Changing video in the playlist will update the active video in the sidebar (change
                color)
              </li>
            </ul>
          </p>
          <p>Select the relevant training module to begin:</p>
          <div className="customerLinks">
            <Navigation />
          </div>
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
            heading
            playlist
          }
        }
      }
    }
  }
`;
