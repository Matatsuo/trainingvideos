import React from 'react';
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
    if (document.getElementsByClassName('videoToggle')) {
      document.getElementsByClassName('videoToggle')[0].style.display = 'none';
    }
  }

  authenticate(e) {
    e.preventDefault();
    if (this.state.authToken === this.state.passcode) {
      sessionStorage.setItem('authToken', this.state.authToken);
      // window.location.reload();
      document.getElementsByClassName('passcodeForm')[0].style.display = 'none';
      document.getElementsByClassName('videoToggle')[0].style.display = 'block';
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
