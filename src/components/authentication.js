import React from 'react';
import PropTypes from 'prop-types';
import Passcode from './passcode';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: props.passcode,
      authToken: '',
      error: false,
    };

    this.authenticate = this.authenticate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.checkStorage();
    if (document.getElementsByClassName('video-toggle')) {
      document.getElementsByClassName('video-toggle')[0].style.display = 'none';
      document.getElementsByClassName('page-header')[0].style.padding = '8vh 4vh';
    }

    if (document.getElementsByClassName('page-content')) {
      document.getElementsByClassName('page-content')[0].style.display = 'none';
    }
  }

  authenticate(e) {
    e.preventDefault();
    if (this.state.authToken === this.state.passcode) {
      sessionStorage.setItem('authToken', this.state.authToken);
      // window.location.reload();
      document.getElementsByClassName('passcode-form')[0].style.display = 'none';
      document.getElementsByClassName('video-toggle')[0].style.display = 'block';
      document.getElementsByClassName('page-content')[0].style.display = 'block';
      document.getElementsByClassName('page-header')[0].style.padding = '4vh';
      return true;
    }
    this.setState({ error: true });

    return false;
  }

  handleChange(e) {
    this.setState({ authToken: e.target.value, error: false });
  }

  checkStorage() {
    sessionStorage.getItem('authToken') &&
      this.setState({
        authToken: sessionStorage.getItem('authToken'),
      });
  }

  render() {
    return (
      <Passcode
        handleChange={this.handleChange}
        error={this.state.error}
        authenticate={this.authenticate}
      />
    );
  }
}

Authentication.propTypes = {
  passcode: PropTypes.string.isRequired,
};
