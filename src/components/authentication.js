import React from 'react';
import Passcode from './passcode';

export default class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      passcode: 'test123',
      authToken: '',
      error: false,
    };

    this.authenticate = this.authenticate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.checkStorage();
  }

  authenticate(e) {
    if (this.state.authToken === this.state.passcode) {
      localStorage.setItem('authToken', this.state.authToken);
      return true;
    }
    e.preventDefault();
    this.setState({ error: true });

    return false;
  }

  handleChange(e) {
    this.setState({ authToken: e.target.value, error: false });
  }

  checkStorage() {
    localStorage.getItem('authToken') &&
      this.setState({
        authToken: localStorage.getItem('authToken'),
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
