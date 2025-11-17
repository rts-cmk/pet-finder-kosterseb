import React from 'react';
import './FavouritesComponent.sass';

export default function FavouritesComponent() {
    return (
        <div className="favourites-component">
            <h2>Your Favourites</h2>
            <p>Here are the animals you have marked as favourites.</p>
            {/* Favourites list content goes here */}
        </div>
    );
}