import { useState } from 'react';
import './Location.scss';

const Location = ({ selectedLocation, onLocationChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const locations = [
    'New York City',
    'Atlanta',
    'Philadelphia',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Miami',
    'San Francisco',
    'Seattle',
    'Boston',
    'Denver',
    'Washington D.C.',
    'Austin',
  ];

  const handleLocationSelect = (location) => {
    onLocationChange(location);
    setShowDropdown(false);
  };

  return (
    <div className="location-selector">
      <button 
        className="location-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="location-icon">📍</span>
        <span className="location-text">{selectedLocation}</span>
        <span className="dropdown-icon">▼</span>
      </button>

      {showDropdown && (
        <div className="location-dropdown">
          {locations.map(location => (
            <button
              key={location}
              className={`location-option ${selectedLocation === location ? 'active' : ''}`}
              onClick={() => handleLocationSelect(location)}
            >
              {location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;