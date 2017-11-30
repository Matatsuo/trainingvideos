import React from 'react';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="pageContainer">
      <div className="sidebar">
        <ul>{page.frontmatter.playlist ? <li>{page.frontmatter.playlist}</li> : null}</ul>
      </div>

      <div className="content">
        <h1 className="pageHeader">{page.frontmatter.heading}</h1>
        <div>
          <iframe
            className="ytPlayer"
            width="560"
            height="315"
            src={page.frontmatter.playlist}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
      <div className="sidebar" />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        heading
        playlist
      }
    }
  }
`;
