import React from 'react';
import VideoContainer from '../components/videoContainer';
import Authentication from '../components/authentication';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const { markdownRemark: page } = data;

  const authToken = typeof window !== 'undefined' && window.sessionStorage.getItem('authToken');

  return (
    <div className="page-container">
      <Helmet title={`Medi-Map Training | ${page.frontmatter.heading}`} />
      <h1 className="page-header">{page.frontmatter.heading}</h1>
      {authToken === null || authToken.toLowerCase() !== page.frontmatter.code.toLowerCase() ? (
        <Authentication passcode={page.frontmatter.code} />
      ) : null}

      <div className="video-toggle">
        {page.frontmatter.playlist ? (
          <VideoContainer playlist={page.frontmatter.playlist} heading={page.frontmatter.heading} />
        ) : null}
      </div>

      <div dangerouslySetInnerHTML={{ __html: page.html }} className="page-content" />
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
      html
    }
  }
`;
