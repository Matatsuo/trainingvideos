import React from 'react';
import VideoContainer from '../components/videoContainer';
import Authentication from '../components/authentication';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="pageContainer">
      {/* <Authentication page={page.frontmatter.path} />if authenticated do
      <VideocContainer> below, else { render <Authentication />}
*/}

      {localStorage.getItem('authToken') === null ? <Authentication /> : null}

      {page.frontmatter.playlist && localStorage.getItem('authToken') ? (
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
