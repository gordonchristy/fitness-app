import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

//This is the meal form that uses the useState hook to change the state when a user enters their meal data and the date. That information is then entered on the Meal List page. The meal form should go on the Dashboard underneath the video carousel. 

function MealForm({ onAddMeal }) {
  const [meal, setMeal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the callback function with the new meal and date
    onAddMeal({ meal, date });
    // Clear the form fields after submission
    setMeal('');
    setDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formMeal">
        <Form.Label>Meal</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Button className= 'button' variant="primary" type="submit">
        Add Meal
      </Button>
    </Form>
  );
}

export default MealForm;
