import './AnimalDetails.scss';

const AnimalDetails = ({ animal }) => {
  return (
    <div className="animal-details">
      <div className="animal-hero">
        <img src={animal.image} alt={animal.breed} className="hero-image" />
      </div>

      <div className="animal-content">
        <h1>{animal.breed}</h1>
        <p className="location">
          <span className="location-icon">📍</span>
          {animal.location}
        </p>

        <div className="animal-attributes">
          <div className="attribute">
            <img src="/assets/species.svg" alt="Species" />
            <span>{animal.breed}</span>
          </div>
          <div className="attribute">
            <img src="/assets/gender-icon.svg" alt="Gender" />
            <span>{animal.gender === 'male' ? 'Male' : 'Female'}</span>
          </div>
        </div>

        <div className="animal-description">
          <p>{animal.long_description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;