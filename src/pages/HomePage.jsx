import { useState, useEffect } from 'react';
import './HomePage.scss';
import Category from '../components/HomePage/Category';
import Location from '../components/HomePage/Location';
import AnimalList from '../components/HomePage/AnimalList';
import Notifications from '../components/Universal/Notifications';
import MiniProfileMenu from '../components/Universal/MiniProfileMenu';

const HomePage = ({ user }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dogs');
  const [selectedLocation, setSelectedLocation] = useState('New York City');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    // Fetch dogs from json-server
    fetch('http://localhost:4000/dogs')
      .then(res => res.json())
      .then(data => {
        setAnimals(data);
        setFilteredAnimals(data);
      })
      .catch(err => console.error('Error fetching animals:', err));
  }, []);

  useEffect(() => {
    // Filter animals by location
    const filtered = animals.filter(animal => 
      animal.location === selectedLocation
    );
    setFilteredAnimals(filtered);
  }, [selectedLocation, animals]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // In a full implementation, this would fetch different types of animals
    // For now, we're only working with dogs
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <div className="profile-icon" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          {user && <img src={user.image} alt="Profile" />}
        </div>
        
        <Location 
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
        />
        
        <div className="notification-icon" onClick={() => setShowNotifications(!showNotifications)}>
          <img src="/assets/notification-bell.svg" alt="Notifications" />
        </div>
      </div>

      <Category 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <AnimalList animals={filteredAnimals} />

      {showNotifications && (
        <Notifications onClose={() => setShowNotifications(false)} />
      )}

      {showProfileMenu && (
        <MiniProfileMenu 
          user={user}
          onClose={() => setShowProfileMenu(false)} 
        />
      )}
    </div>
  );
};

export default HomePage;