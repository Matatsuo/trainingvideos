import React from "react";

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div>
      <h2 className="pageHeader">{page.frontmatter.title}</h2>
      {page.frontmatter.videos
        ? page.frontmatter.videos.map(vid => (
            <div>
              <aside className="sidebar">{vid.video.title}</aside>
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
