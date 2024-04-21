import React from 'react';
import { Button } from 'react-bootstrap';
import videoBackground from './videoBackground.mp4'; // Added space after 'from'

//This is the homepage of my app that contains a header entitled "Unique Fitness App"
//and the slogan "Fitness Your Way". It also contains a button that the user can click on to be taken to the User Info Page that contains the Dashboard. That is what the handleGetStarted function is for.
    const Home = () => {
    const handleGetStarted = () => {
    };

    return (
        <div className="homepage">
            <video autoPlay loop muted className="video-background">
                <source src={videoBackground} type="video/mp4"/>
            </video>
            <div className="content">
                <h1>Unique Fitness App</h1>
                <p>Fitness Your Way</p>
                <Button variant="primary" onClick={handleGetStarted}>Get Started</Button>
            </div>
        </div>
    );
};

export default Home;