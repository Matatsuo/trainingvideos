import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div
  style={{width: '70vw',}}>
    <h2>Training Videos</h2>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0VqShxGcrNQZxKC63dGIa0fxN7oK6cO_" frameborder="0" modestbranding="1" gesture="media" allowfullscreen></iframe>
    <p>To view the demonstrations simply press play to start watching the full playlist.</p>
    <p> To go back or forward a video, push the previous or next buttons. Alternatively, you can view and select any video from the playlist by clicking the playlist button at the top left of the video player. </p>
  </div>
)

export default IndexPage
