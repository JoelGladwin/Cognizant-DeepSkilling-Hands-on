import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const offices = [
    {
      name: 'Deepskillking Space',
      rent: 55000,
      address: 'No.12, Mount Road, Chennai'
    },
    {
      name: 'Sales Hub',
      rent: 62000,
      address: '5th Ave, Anna Nagar, Chennai'
    }
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>
      <img src="office.jpg" alt="Office Space" width="400" />

      <h2>Available Offices</h2>
      {offices.map((office, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {office.name}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {office.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
