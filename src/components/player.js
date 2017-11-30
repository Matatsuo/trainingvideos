import React, { Component } from 'react';
import Link from 'gatsby-link';
// import axios from 'axios';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLFP_4LMrnuUQH6fCERbR021Dx-NbWo2rk&key=AIzaSyDG34-sBk3xK8rdg6kqTXUp4WdY83wrpn4')
      .then(response => {
        if (!response.ok) {
          throw Error('Youtube API request failed');
        }
        return response;
      })
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.items.map((item, i) => (
            <li key={i} title={item.snippet.position}>
              {item.snippet.title}
              {/* {item.snippet.description} +
              {item.snippet.position} +
              {item.contentDetails.videoId} +
              {item.snippet.playlistId} */}
            </li>
          )),
        });
      });
  }

  handleClick(event) {
    console.log(event.data);
    console.log(`test${event.target.title}`);
    this.setState({ index: event.target.title });
  }

  render() {
    const videos = this.state.data;
    const index = this.state.index;
    const youtube = 'https://www.youtube-nocookie.com/embed/videoseries?list=';
    const playlistId = 'PLFP_4LMrnuUQH6fCERbR021Dx-NbWo2rk';
    const vTag = '&v=';
    const videoId = 'N8IYyhev4oo';
    const v = '&index=';
    console.log(videos);
    console.log(`index${index}`);

    return (
      <div>
        <ul className="videoNav" onClick={this.handleClick}>
          {Object.values(videos)}
        </ul>
        <div>
          <iframe
            title={index}
            className="ytPlayer"
            width="560"
            height="315"
            src={youtube + playlistId + v + index}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Player;
