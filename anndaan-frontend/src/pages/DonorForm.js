import React, { useState } from 'react';

function DonorForm() {
  const [formData, setFormData] = useState({
    name: '',
    foodType: '',
    quantity: '',
    location: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Donor Form Submitted:', formData);
    // TODO: Send to backend via axios
  };

  return (
    <div className="container mt-4">
      <h2>Donate Surplus Food</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" className="form-control mb-2" onChange={handleChange} />
        <input name="foodType" placeholder="Type of Food" className="form-control mb-2" onChange={handleChange} />
        <input name="quantity" placeholder="Quantity (e.g. 10 meals)" className="form-control mb-2" onChange={handleChange} />
        <input name="location" placeholder="Pickup Location" className="form-control mb-2" onChange={handleChange} />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default DonorForm;
