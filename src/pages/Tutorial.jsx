import React from 'react';
import './Tutorial.sass';

const BackgroundImage = '../../assignment_assets/background.svg';

export default function Tutorial() {
    return (
        <div className="tutorial-page">
            <img src={BackgroundImage} alt="Background" className="background-image" />
            <div className="tutorial-content">
                <h1>Welcome to the Tutorial Page for Mets!</h1>
                <p>Get ready to look for some great pets out there!</p>
            </div>
        </div>
    );
}