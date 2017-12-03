import React, { Component } from 'react';
import PropTypes from 'prop-types';

let loadYT;
const youtube = 'https://www.youtube-nocookie.com/embed/videoseries?list=';
const v = '&index=';

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
    };

    this.onReady = this.onReady.bind(this);
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
        height: this.props.height || 390,
        width: this.props.width || 640,
        videoId: youtube + this.props.playlist + v + this.props.index,
        playerVars: {
          rel: 0,
          showinfo: 0,
          autoplay: 0,
        },
        events: {
          onReady: this.onReady,
          onStateChange: this.onStateChange,
        },
      });
    });
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`);
    this.setState({
      player: event.target,
    });
  }

  onStateChange(event) {
    // when video in playlist ends on its own
    // update index state
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

  // prevents autoplay on initial load by playingVideoIndex of next prop
  // playVideoAt(index) autoplays by default
  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.props.index) {
      this.player.playVideoAt(nextProps.index);
    }
  }

  render() {
    return (
      <div className="playerWrapper">
        <div
          ref={r => {
            this.youtubePlayer = r;
          }}
        />
      </div>
    );
  }
}

Player.propTypes = {
  videoId: PropTypes.string.required,
  width: PropTypes.number,
  height: PropTypes.number,
  onStateChange: PropTypes.func,
};
