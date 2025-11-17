import React from 'react';
import './Navbar.sass';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MyApp</div>
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/favourites">Favourites</a></li>
                <li><a href="/chat">Chat</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    );
}