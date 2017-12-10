import React from 'react';
import VideoContainer from '../components/videoContainer';
import Authentication from '../components/authentication';

export default function Template({ data }) {
  const { markdownRemark: page } = data;

  const authToken = typeof window !== 'undefined' && window.sessionStorage.getItem('authToken');

  return (
    <div className="page-container">
      <h1 className="page-header">{page.frontmatter.heading}</h1>
      {authToken === null || authToken !== page.frontmatter.code ? (
        <Authentication passcode={page.frontmatter.code} />
      ) : null}

      <div className="video-toggle">
        {page.frontmatter.playlist ? (
          <VideoContainer playlist={page.frontmatter.playlist} heading={page.frontmatter.heading} />
        ) : null}
      </div>
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
        code
      }
    }
  }
`;
