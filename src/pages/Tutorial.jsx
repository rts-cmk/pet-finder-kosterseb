import React from 'react';
import './Tutorial.sass';
import { useNavigate } from 'react-router';

const BackgroundImage = '../../assets/tutorial-background.svg';



export default function Tutorial() {
    const navigate = useNavigate();

    const navigateToNextPage = () => {
        navigate('/home');
    };

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
                <button onClick={navigateToNextPage}>Next</button>
            </div>
        </>
    );
}