import React from 'react';

function IndianPlayers() {
  const T20players = ["Virat", "Rohit", "Pant", "Hardik"];
  const RanjiTrophy = ["Pujara", "Rahane", "Jadeja", "Ashwin"];


  const [odd1, odd2, ...oddRest] = T20players;
  const [even1, even2, ...evenRest] = RanjiTrophy;


  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ textAlign: "left", paddingLeft: "20px" }}>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {oddRest.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {evenRest.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
