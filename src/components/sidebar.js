import React from 'react';

const Sidebar = props => (
  <ol className="video-nav" onClick={props.handleClick}>
    {props.videos.length > 0
      ? props.videos.map(video => (
        <li
          key={video.index}
          id={video.index}
          title={video.title}
          className={props.index == video.index ? 'active' : ''}
        >
          {video.title}
        </li>
        ))
      : null}
  </ol>
);

export default Sidebar;
