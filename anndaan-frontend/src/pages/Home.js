import React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/Map';
import './Home.css'; // optional: for styling

const dummyLocations = [
  { lat: 18.5204, lng: 73.8567, name: 'Donor 1' },
  { lat: 18.5310, lng: 73.8500, name: 'NGO Shelter 1' },
];

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">AnnDaan – Fight Hunger, End Waste 🍱</h1>

      <MapComponent locations={dummyLocations} />

      <div className="mt-5 d-flex flex-column gap-3">
        <Link to="/donate" className="btn btn-success btn-lg">
          I'm a Donor – Donate Surplus Food
        </Link>
        <Link to="/request" className="btn btn-primary btn-lg">
          I'm an NGO – Request Food
        </Link>
        <Link to="/volunteer" className="btn btn-warning btn-lg">
          I'm a Volunteer – Help with Delivery
        </Link>
      </div>
    </div>
  );
}

export default Home;
