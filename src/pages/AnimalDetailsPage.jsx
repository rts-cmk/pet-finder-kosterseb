import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import './AnimalDetailsPage.scss';
import AnimalDetails from '../components/Universal/AnimalDetails';

const AnimalDetailsPage = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setAnimal(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching animal:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!animal) {
    return <div className="error">Animal not found</div>;
  }

  return (
    <div className="animal-details-page">
      <AnimalDetails animal={animal} />
      
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default AnimalDetailsPage;