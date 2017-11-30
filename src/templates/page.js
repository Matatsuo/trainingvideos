import React from 'react';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="pageContainer">
      <div className="sidebar">
        <ul>
          {page.frontmatter.videos
            ? page.frontmatter.videos.map(vid => <li>{vid.video.title}</li>)
            : null}
        </ul>
      </div>

      <div className="content">
        {/* <h1 className="pageHeader">{page.frontmatter.heading}</h1> */}
        <div>
          {page.frontmatter.videos
            ? page.frontmatter.videos.map(vid => (
              <div className="videoContainer">
                <h2>{vid.video.title}</h2>
                <iframe
                  className="ytPlayer"
                  width="560"
                  height="315"
                  src={vid.video.link}
                  frameBorder="0"
                  gesture="media"
                  allowFullScreen
                />
              </div>
              ))
            : null}
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
        videos {
          video {
            title
            link
          }
        }
      }
    }
  }
`;
