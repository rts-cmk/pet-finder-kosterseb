import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import './AnimalList.scss';

const AnimalList = ({ animals }) => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }
  }, []);

  const handleAnimalClick = (id) => {
    navigate(`/animal/${id}`);
  };

  const toggleFavourite = (e, id) => {
    e.stopPropagation();
    
    let newFavourites;
    if (favourites.includes(id)) {
      newFavourites = favourites.filter(favId => favId !== id);
    } else {
      newFavourites = [...favourites, id];
    }
    
    setFavourites(newFavourites);
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  };

  return (
    <div className="animal-list">
      {animals.map(animal => (
        <div 
          key={animal.id}
          className="animal-card"
          onClick={() => handleAnimalClick(animal.id)}
        >
          <div className="animal-image">
            <img src={animal.image} alt={animal.breed} />
            <button 
              className={`favourite-button ${favourites.includes(animal.id) ? 'active' : ''}`}
              onClick={(e) => toggleFavourite(e, animal.id)}
            >
              <img className='favourite-icon' src="./src/assets/favourite-icon.svg" alt="" />
            </button>
          </div>
          
          <div className="animal-info">
            <h3>{animal.breed}</h3>
            <p className="location">
              <span className="location-icon">📍</span>
              {animal.location}
            </p>
            <p className="description">{animal.short_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimalList;