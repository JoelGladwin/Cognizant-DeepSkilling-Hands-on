import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConverter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello = () => {
    alert("Hello! Welcome to the Event Handling App.");
  }

  sayWelcome = (message) => {
    alert(`Message: ${message}`);
  }

  handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  }


  render() {
    return (
      <div>
        <h1>React Event Handling Example</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>
        <button onClick={this.handleClick}>Synthetic Click</button>

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;
