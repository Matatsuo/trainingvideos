import React from "react";

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          {page.frontmatter.videos
            ? page.frontmatter.videos.map(vid => <li>{vid.video.title}</li>)
            : null}
        </ul>
      </nav>

      <div>
        <h1 className="pageHeader">{page.frontmatter.title}</h1>
        <div>
          {page.frontmatter.videos
            ? page.frontmatter.videos.map(vid => (
                <div>
                  <h2>{vid.video.title}</h2>
                  <iframe
                    className="ytPlayer"
                    width="560"
                    height="315"
                    src={vid.video.link}
                    frameborder="0"
                    gesture="media"
                    allowfullscreen
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      <div />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
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
