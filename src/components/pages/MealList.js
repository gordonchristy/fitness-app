import React from 'react';

function MealList({ meals }) {
  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            <strong>{meal.meal}</strong> - {meal.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealList;
