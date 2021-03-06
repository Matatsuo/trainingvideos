import React, { Component } from 'react';
import PropTypes from 'prop-types';

let loadYT;
const youtube = 'https://www.youtube-nocookie.com/embed/videoseries?list=';
// &showinfo=0?ecver=2 or &ytp-pause-overlay=0 for maybe removing suggested videos on pause
const v = '&rel=0&showinfo=0&index=';

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.onStateChange = this.onStateChange.bind(this);
  }

  componentDidMount() {
    if (!loadYT) {
      loadYT = new Promise(resolve => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    loadYT.then(YT => {
      this.player = new YT.Player(this.youtubePlayer, {
        videoId: youtube + this.props.playlist + v + this.props.index,
        playerVars: {
          rel: 0,
          showinfo: 0,
          autoplay: 0,
          origin: 'https://learn.medimap.co.nz',
        },
        events: {
          onStateChange: this.onStateChange,
        },
      });
    });
  }

  // prevents autoplay on initial load by playingVideoIndex of next prop
  // playVideoAt(index) autoplays by default
  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.props.index) {
      this.player.playVideoAt(nextProps.index);
    }
  }

  onStateChange(event) {
    if (this.player.getPlayerState() <= 0) {
      const playerIndex = this.player.getPlaylistIndex();
      if (playerIndex !== this.props.index) {
        this.props.handlePlayer(playerIndex);
      }
    }

    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(event);
    }
  }

  render() {
    return (
      <div className="yt-container">
        {!this.youtubePlayer ? (
          <div className="yt-loading">
            <div className="sk-circle">
              <div className="sk-circle1 sk-child" />
              <div className="sk-circle2 sk-child" />
              <div className="sk-circle3 sk-child" />
              <div className="sk-circle4 sk-child" />
              <div className="sk-circle5 sk-child" />
              <div className="sk-circle6 sk-child" />
              <div className="sk-circle7 sk-child" />
              <div className="sk-circle8 sk-child" />
              <div className="sk-circle9 sk-child" />
              <div className="sk-circle10 sk-child" />
              <div className="sk-circle11 sk-child" />
              <div className="sk-circle12 sk-child" />
            </div>
          </div>
        ) : null}
        <div
          className="yt-player"
          ref={r => {
            this.youtubePlayer = r;
          }}
        />
      </div>
    );
  }
}

Player.propTypes = {
  videoId: PropTypes.string,
  onStateChange: PropTypes.func,
};
