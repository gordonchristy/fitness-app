import React from 'react';

function MealList({ meals }) {
  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meals, index) => (
          <li key={index}>
            <strong>{meals.calories}</strong> - {meals.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealList;
