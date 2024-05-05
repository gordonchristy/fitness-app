import React, { useState } from 'react';
import VideoCarousel from './VideoCarousel';
import Gallery from './Gallery';
import MealForm from './MealForm';
import MealList from './pages/MealList';


//This code contains the function that houses the user form that updates the meal list page. It also contains the gallery with the user cards and information along  with the video carousel that users can click on to watch fitness videos.
function Dashboard() {
    const [meals, setMeals] = useState([]);

    const addMeal = (newMeal) => {
        setMeals([...meals, newMeal]);
    };

    return (
        <div className='App'>
            <h1>Dashboard</h1>
            <Gallery />
            <VideoCarousel />
            <MealForm onAddMeal={addMeal} />
            <MealList meals={meals} />
        </div>
    );
}

export default Dashboard;
   