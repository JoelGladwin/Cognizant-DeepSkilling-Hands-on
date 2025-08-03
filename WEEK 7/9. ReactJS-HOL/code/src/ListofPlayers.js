import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 80 },
    { name: "Rohit", score: 75 },
    { name: "Dhoni", score: 65 },
    { name: "Hardik", score: 85 },
    { name: "Pant", score: 55 },
    { name: "Shami", score: 45 },
    { name: "Jadeja", score: 90 },
    { name: "Ashwin", score: 60 },
    { name: "Kohli", score: 95 },
    { name: "Rahul", score: 70 },
    { name: "Bumrah", score: 40 },
  ];

  const below70 = players.filter(player => player.score < 70); // <-- arrow function here

  return (
    <div style={{ textAlign: "left", paddingLeft: "20px" }}>
      <h2>All Players</h2>
      <ul >
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
