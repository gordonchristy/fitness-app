import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCarousel from '../VideoCarousel';
import Gallery from '../Gallery';
import MealForm from '../MealForm';
import UserCard from '../UserCard';

function Dashboard() {
    const [meals, setMeals] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from the mock API
        axios.get('https://65e15639d3db23f7624ace30.mockapi.io/users')
            .then(response => {
                // Set the users state with the data received from the API
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once, when the component mounts

    const addMeal = (newMeal) => {
        setMeals([...meals, newMeal]);
    };

    return (
        <div className='dboard'>
            {/* Pass users data to the Gallery component */}
            <Gallery users={users} />
            <VideoCarousel  />
            <MealForm onAddMeal={addMeal} />
        </div>
    );
}

export default Dashboard;
