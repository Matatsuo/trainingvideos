import React from "react";
import Link from "gatsby-link";

const HospicePage = () => (
  <div>
    <h2 className="pageHeader">Hospice Training</h2>
    <iframe
      className="ytPlayer"
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0VqShxGcrNQZxKC63dGIa0fxN7oK6cO_&amp;rel=0&amp;modestbranding=1"
      frameborder="0"
      modestbranding="1"
      rel="0"
      showinfo="0"
      gesture="media"
      allowfullscreen
    />
    <p>
      To view the demonstrations simply press play to start watching the full
      playlist.
    </p>
    <p>
      To go back or forward a video, push the previous or next buttons.
      Alternatively, you can view and select any video from the playlist by
      clicking the playlist button at the top left of the video player.{" "}
    </p>
  </div>
);

export default HospicePage;
