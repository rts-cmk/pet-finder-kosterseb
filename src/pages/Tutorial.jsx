import React from 'react';
import './Tutorial.sass';

const BackgroundImage = '../../assignment_assets/background.svg';

export default function Tutorial() {
    return (
        <div className="tutorial-page">
            <img src={BackgroundImage} alt="Background" className="background-image" />
            <div className="tutorial-content">
                <h1>Welcome to the Tutorial Page</h1>
                <p>This is where the tutorial content will go.</p>
            </div>
        </div>
    );
}
