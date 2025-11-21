import React from 'react';
import FavouritesComponent from '../components/FavouritesPage/FavouritesComponent';
import Navbar from '../components/Universal/Navbar';
import MiniProfileMenu from "../components/Universal/MiniProfileMenu";
import Notifications from "../components/Universal/Notifications";
import AnimalDetails from '../components/Universal/AnimalDetails';
import './FavouritesPage.scss';

export default function Favourites() {
    return (
        <div className="favourites-page">
            <Navbar />
            <MiniProfileMenu />
            <Notifications />
            <FavouritesComponent />
            <AnimalDetails />
        </div>
    );
}