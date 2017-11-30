import React from 'react';
import Player from '../components/player';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="pageContainer">
      <div className="sidebar">{page.frontmatter.playlist ? <Player /> : null}</div>

      <div className="content">
        <h1 className="pageHeader">{page.frontmatter.heading}</h1>
      </div>
      <div className="sidebar" />
    </div>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        heading
        playlist
      }
    }
  }
`;
