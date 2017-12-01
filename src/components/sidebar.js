import React from 'react';

const Sidebar = props => (
  <ul className="videoNav" onClick={props.handleClick}>
    {props.videos.length > 0
      ? props.videos.map(video => (
        <li key={video.index} title={video.index}>
          {video.title}
        </li>
        ))
      : null}
  </ul>
);

export default Sidebar;
