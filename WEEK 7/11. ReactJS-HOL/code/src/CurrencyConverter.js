import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit = () => {
    const inr = parseFloat(this.state.rupees);
    const conversionRate = 0.011; // 1 INR = 0.011 EUR (approx)
    const euroValue = inr * conversionRate;

    this.setState({ euro: euroValue.toFixed(2) });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <input
          type="text"
          placeholder="Enter INR amount"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>Euro: €{this.state.euro}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
