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
            What works:
            <ul>
              <li>
                Adding/editing videos in the youtube playlists updates the site (sidebar and
                playlist) - so don't have to touch the site unless adding a new page.
              </li>
              <li>Clicking on the sidebar loads the appropriate video in the playlist</li>
            </ul>
          </p>
          <p>
            What I am working on right now:<ul>
              <li>
                Show active video in the sidebar - both from clicking on it or from interacting with
                the video player (prev/next buttons)
              </li>
              <li>
                Caching and optimizing youtube api requests so that the page content loads
                immediately
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
