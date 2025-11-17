import React from 'react';
import FavouritesComponent from '../components/FavouritesPage/FavouritesComponent';
import Navbar from '../components/Universal/Navbar';
import AnimalDetails from '../components/Universal/AnimalDetails';

export default function Favourites() {
    return (
        <div className="favourites-page">
            <Navbar />
            <FavouritesComponent />
            <AnimalDetails />
        </div>
    );
}