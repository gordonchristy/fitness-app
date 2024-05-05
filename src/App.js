import React, { useState, useEffect } from 'react';
import MyRouter from './components/MyRouter';
import NavBar from './components/NavBar';
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [app, setApp] = useState({}); // Correct state initialization
  const [users, setUsers] = useState([]);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const url = 'https://65e15639d3db23f7624ace30.mockapi.io/meals';
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApp(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Fitness App</h1>
      <MyRouter app={app} setApp={setApp} />
    </div>
  );
}

export default App;
