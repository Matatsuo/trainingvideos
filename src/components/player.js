import React, { Component } from 'react';
import Link from 'gatsby-link';
// import axios from 'axios';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0,
      playlist: props.playlist,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // this.checkStorage();
  }

  // data stored in localStorage should be the full playlist payload, not individual playlists,
  // so that each page fetches their relevant playlist from the localStorage payload. This way
  // each page doesn't have the same data displayed.
  // need to find a way of using localStorage in cWM() on gatsby build
  checkStorage() {
    localStorage.getItem('data') &&
      this.setState({
        data: JSON.parse(localStorage.getItem('data')),
        // do i need to setstate of index/playlist?
      });
  }

  componentDidMount() {
    // this.fetchPlaylists();

    const date = localStorage.getItem('dataDate');
    const dataDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - dataDate) / (1000 * 60)); // in minutes
    const tooOld = dataAge >= 360;

    // if (tooOld) {
    this.fetchPlaylistItems();
    // } else {
    //  console.log(`Using data from localStorage that is ${dataAge} minutes old (refreshes every 6 hours).`);
    // }
  }

  fetchPlaylistItems() {
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
      .then(data =>
        this.setState({
          data,
        }))
      .catch(error => console.log('Youtube API failed to fetch data', error));
  }

  componentWillUpdate(nextProps, nextState) {
    // this data is the playlist.list payload, not each page's playlist
    localStorage.setItem('data', JSON.stringify(nextState.data));
    localStorage.setItem('dataDate', Date.now());
  }

  handleClick(event) {
    console.log(event.data);
    console.log(`test${event.target.title}`);
    this.setState({ index: event.target.title });
  }

  render() {
    const { data, index, playlist } = this.state;
    const youtube = 'https://www.youtube-nocookie.com/embed/videoseries?list=';
    const v = '&index=';
    const showInfo = '&amp;showinfo=0';
    const auto = '&autoplay=1';
    console.log(data);
    console.log(`index${index}`);

    return (
      <div>
        <ul className="videoNav" onClick={this.handleClick}>
          {data.length > 0
            ? data.map(video => (
              <li key={video.index} title={video.index}>
                {video.title}
              </li>
              ))
            : null}
          {/* {Object.keys(videos).map(k => videos[k])} */}
        </ul>
        <div>
          <iframe
            title={index}
            className="ytPlayer"
            width="560"
            height="315"
            src={youtube + playlist + v + index}
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
