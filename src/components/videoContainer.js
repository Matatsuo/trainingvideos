import React, { Component } from 'react';
import Sidebar from './sidebar';
import Player from './player';

const googleApi =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=';

const fields =
  '&fields=etag%2Citems(etag%2Csnippet(description%2CplaylistId%2Cposition%2CresourceId%2FvideoId%2Ctitle))&key=';
const apiKey = 'AIzaSyBpN0o_sLiSra6RQfFyKlIMx3tQoIjWos8';

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistData: [],
      index: 0,
      playlist: props.playlist,
      playlists: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handlePlayer = this.handlePlayer.bind(this);
  }

  checkStorage() {
    localStorage.getItem(`playlist${this.state.playlist}`) &&
      this.setState({
        playlistData: JSON.parse(localStorage.getItem(`playlist${this.state.playlist}`)),
      });
  }

  componentDidMount() {
    this.checkStorage();

    const date = localStorage.getItem('dataDate');
    const dataDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - dataDate) / (1000 * 60)); // in minutes
    const tooOld = dataAge >= 360;

    if (tooOld || !localStorage.getItem(`playlist${this.state.playlist}`)) {
      this.fetchPlaylistVideos();
    } else {
      console.log(`Using data from localStorage that is ${dataAge} minutes old (refreshes every 6 hours).`);
    }
  }

  setPlaylist(playlist) {
    this.setState({ playlist });
  }

  handleClick(event) {
    this.setState({ index: event.target.title });
    // player.playVideoAt(index);
  }

  handlePlayer(playerIndex) {
    this.setState({ index: playerIndex });
    console.log(`vid: ${playerIndex} ${this.state.index}`);
  }

  fetchPlaylistVideos() {
    const apiLink = googleApi + this.state.playlist + fields + apiKey;

    const myHeaders = new Headers({
      'Accept-Encoding': 'gzip',
      'User-Agent': 'medimaptraining (gzip)',
      'Cache-Control': 'public, max-age=36000',
    });

    const myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    const myRequest = new Request(apiLink, myInit);

    fetch(myRequest)
      .then(response => response.json())
      .then(result =>
        result.items.map(video => ({
          title: `${video.snippet.title}`,
          index: `${video.snippet.position}`,
          playlistId: `${video.snippet.playlistId}`,
        })))
      .then(playlistData =>
        this.setState({
          playlistData,
          playlist: playlistData[0].playlistId,
        }))
      .catch(error => console.log('Youtube API failed to fetch data', error));
  }

  componentWillUpdate(nextProps, nextState) {
    // this data is the playlist.list payload, not each page's playlist
    localStorage.setItem(`playlist${this.state.playlist}`, JSON.stringify(nextState.playlistData));
    localStorage.setItem('dataDate', Date.now());
  }

  render() {
    const {
      playlistData, index, playlist, playlists,
    } = this.state;
    playlists.push(playlistData);
    console.log(`vid${index}`);

    return (
      <div>
        {playlistData.length > 0 ? (
          <div className="videoContainer">
            <div className="sidebar">
              <Sidebar index={index} videos={playlistData} handleClick={this.handleClick} />
            </div>
            <div className="content">
              <h1 className="pageHeader">{this.props.heading}</h1>
              <h2 className="videoTitle">{playlistData[{ index }]}</h2>
              <Player index={index} playlist={playlist} handlePlayer={this.handlePlayer} />
            </div>
            <div className="sidebar" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default VideoContainer;
