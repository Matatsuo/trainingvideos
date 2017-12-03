import React from 'react';
import Player from '../components/player';
import Sidebar from '../components/sidebar';
import VideoContainer from '../components/videoContainer';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="pageContainer">
      {/* <Authentication page={page.frontmatter.path} />if authenticated do <VideocContainer> below, else { render <Authentication />}
*/}

      {page.frontmatter.playlist ? (
        <VideoContainer playlist={page.frontmatter.playlist} heading={page.frontmatter.heading} />
      ) : null}
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
