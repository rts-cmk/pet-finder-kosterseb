import React from 'react';
import FavouritesComponent from '../components/FavouritesPage/FavouritesComponent';
import Navbar from '../components/Universal/Navbar';

export default function Favourites() {
    return (
        <div className="favourites-page">
            <Navbar />
            <FavouritesComponent />
        </div>
    );
}