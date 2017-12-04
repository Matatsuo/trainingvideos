import React from 'react';
import VideoContainer from '../components/videoContainer';
import Authentication from '../components/authentication';

export default function Template({ data }) {
  const { markdownRemark: page } = data;

  const authToken = typeof window !== 'undefined' && window.localStorage.getItem('authToken');

  return (
    <div className="pageContainer">
      {authToken === null ? <Authentication /> : null}

      {page.frontmatter.playlist && authToken ? (
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
