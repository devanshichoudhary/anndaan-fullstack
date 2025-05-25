import React, { useState } from 'react';

function NGOForm() {
  const [formData, setFormData] = useState({
    name: '',
    requirement: '',
    location: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('NGO Request Submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <h2>NGO – Request Food</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="NGO Name" className="form-control mb-2" onChange={handleChange} />
        <input name="requirement" placeholder="Required Quantity" className="form-control mb-2" onChange={handleChange} />
        <input name="location" placeholder="Delivery Location" className="form-control mb-2" onChange={handleChange} />
        <button className="btn btn-primary">Request</button>
      </form>
    </div>
  );
}

export default NGOForm;
