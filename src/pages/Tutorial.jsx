import React from 'react';
import './Tutorial.sass';

const BackgroundImage = '../../assignment_assets/Animal.svg';

export default function Tutorial() {
    return (
        <>
        <div className="tutorial-page">
            <img src={BackgroundImage} alt="Background" className="background-image" />
            <div className="tutorial-content">
                <h1>Welcome to the Tutorial Page for METS!</h1>
                <p>Get ready to look for some great pets out there!</p>
            </div>
        </div>
        <div className="next-button">
                <button>Next</button>
            </div>
        </>
    );
}