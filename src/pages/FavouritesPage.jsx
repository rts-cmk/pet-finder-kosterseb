import { useState, useEffect } from 'react';
import './FavouritesPage.scss';
import FavouritesComponent from '../components/FavouritesPage/FavouritesComponent';

const FavouritesPage = ({ user }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Get favourites from localStorage
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      const favouriteIds = JSON.parse(savedFavourites);
      
      // Fetch favourite animals
      Promise.all(
        favouriteIds.map(id => 
          fetch(`http://localhost:4000/dogs/${id}`).then(res => res.json())
        )
      )
        .then(data => setFavourites(data))
        .catch(err => console.error('Error fetching favourites:', err));
    }
  }, []);

  const removeFavourite = (id) => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      const favouriteIds = JSON.parse(savedFavourites);
      const newFavourites = favouriteIds.filter(favId => favId !== id);
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      setFavourites(favourites.filter(fav => fav.id !== id));
    }
  };

  return (
    <div className="favourites-page">
      <h1>My Favourites</h1>
      {favourites.length === 0 ? (
        <div className="no-favourites">
          <p>You haven't added any favourites yet!</p>
        </div>
      ) : (
        <FavouritesComponent 
          favourites={favourites}
          onRemove={removeFavourite}
        />
      )}
    </div>
  );
};

export default FavouritesPage;