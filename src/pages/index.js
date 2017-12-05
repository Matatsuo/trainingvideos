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
        <h1 className="pageHeader">Medi-Map Training Materials</h1>
        <div className="landingContainer">
          <p>What I did:</p>
          <p>Creating new pages automatically adds it to the header navigation bar</p>
          <p>Started styling the video pages</p>
          <p>What I'm doing:</p>
          <p>Automatically add page links to the home page and style it</p>
          <div className="customerLinks" />
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
