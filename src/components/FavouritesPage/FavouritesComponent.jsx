import { useNavigate } from 'react-router';
import './FavouritesComponent.scss';

const FavouritesComponent = ({ favourites, onRemove }) => {
  const navigate = useNavigate();

  const handleAnimalClick = (id) => {
    navigate(`/animal/${id}`);
  };

  return (
    <div className="favourites-grid">
      {favourites.map(animal => (
        <div 
          key={animal.id}
          className="favourite-card"
          onClick={() => handleAnimalClick(animal.id)}
        >
          <div className="favourite-image">
            <img src={animal.image} alt={animal.breed} />
            <button 
              className="remove-button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(animal.id);
              }}
            >
              ✕
            </button>
          </div>
          
          <div className="favourite-info">
            <h3>{animal.breed}</h3>
            <p className="location">
              <span className="location-icon">📍</span>
              {animal.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouritesComponent;