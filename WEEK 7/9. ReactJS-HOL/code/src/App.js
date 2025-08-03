import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; 

  return (
    <div className="App">
      <h1 style={{ textAlign: "left", paddingLeft: "20px" }}>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

