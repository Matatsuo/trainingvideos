import React from 'react';

const youtube = 'https://www.youtube-nocookie.com/embed/videoseries?list=';
const v = '&index=';

const Player = props => (
  <div>
    <iframe
      title={props.index}
      className="ytPlayer"
      width="560"
      height="315"
      src={youtube + props.playlist + v + props.index}
      frameBorder="0"
      gesture="media"
      allow="encrypted-media"
      allowFullScreen
    />
  </div>
);

export default Player;
