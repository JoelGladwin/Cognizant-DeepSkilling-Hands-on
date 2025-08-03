import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    let page;

    if (isLoggedIn) {
      page = (
        <div>
          <h2>Welcome User!</h2>
          <p>You can now book your tickets.</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      page = (
        <div>
          <h2>Welcome Guest!</h2>
          <p>You can browse flight details only.</p>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    }

    return (
      <div>
        <h1>Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;

