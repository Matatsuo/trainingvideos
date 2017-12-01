import React, { Component } from 'react';
import Sidebar from './sidebar';
import Player from './player';

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistData: [],
      index: 0,
      playlist: props.playlist,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPlaylistVideos();
  }

  fetchPlaylistVideos() {
    const googleApi =
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=';
    const playlist = this.state.playlist;
    const fields =
      '&fields=etag%2Citems(etag%2Csnippet(description%2CplaylistId%2Cposition%2CresourceId%2FvideoId%2Ctitle))&key=';
    const apiKey = 'AIzaSyBpN0o_sLiSra6RQfFyKlIMx3tQoIjWos8';
    fetch(googleApi + playlist + fields + apiKey)
      .then(response => response.json())
      .then(result =>
        result.items.map(video => ({
          title: `${video.snippet.title}`,
          index: `${video.snippet.position}`,
        })))
      .then(playlistData =>
        this.setState({
          playlistData,
        }))
      .catch(error => console.log('Youtube API failed to fetch data', error));
  }

  handleClick(event) {
    console.log(event.target.title);
    this.setState({ index: event.target.title });
  }

  setPlaylist(playlist) {
    this.setState({ playlist });
  }

  render() {
    const { playlistData, index, playlist } = this.state;

    return (
      <div className="videoContainer">
        <div className="sidebar">
          <Sidebar index={index} videos={playlistData} handleClick={this.handleClick} />
        </div>
        <div className="content">
          <h1 className="pageHeader">{this.props.heading}</h1>
          <Player index={index} playlist={playlist} />
        </div>
        <div className="sidebar" />
      </div>
    );
  }
}

export default VideoContainer;
