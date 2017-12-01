import React from 'react';
// import axios from 'axios';

class ApiStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0,
      playlist: this.props.playlist,
    };
  }

  componentDidMount() {
    const googleApi =
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=';
    const playlist = this.state.playlist;
    const fields =
      '&fields=etag%2Citems(etag%2Csnippet(description%2CplaylistId%2Cposition%2CresourceId%2FvideoId%2Ctitle))&key=';
    const apiKey = 'AIzaSyBpN0o_sLiSra6RQfFyKlIMx3tQoIjWos8';
    fetch(googleApi + playlist + fields + apiKey)
      .then(response => {
        if (!response.ok) {
          throw Error('Youtube API request failed');
        }
        return response;
      })
      .then(result => result.json())
      .then(result => {
        const data = result.items;
        this.setState({
          data,
        });
      });
  }

  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }
}

export default ApiStore;
