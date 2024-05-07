import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import videoBackground from './videoBackground.mp4';

const Home = () => {
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/userinfo'); // Directly navigate to the '/userinfo' route       
    };

    return (
        <div className="home">
            <video autoPlay loop muted className="video-background">
                <source src={videoBackground} type="video/mp4"/>
            </video>
            <div className="content">
                <h1>Unique Fitness App</h1>
                <h4>Fitness Your Way</h4>
                <Button variant="primary" onClick={handleGetStarted}>Get Started</Button>
            </div>
        </div>
    );
};

export default Home;
