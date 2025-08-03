import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const referenceNumber = Math.floor(Math.random() * 1000000);
    alert(`Complaint submitted!\nName: ${name}\nComplaint: ${complaint}\nReference No: ${referenceNumber}`);

    // Optional: reset form
    setName('');
    setComplaint('');
  };

  return (
    <div>
      <h2>Complaint Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Complaint:</label><br />
          <textarea
            rows="4"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
