import React, { useReducer, useEffect, useState, useContext } from 'react';
import MyRouter from './components/MyRouter';
import NavBar from './components/NavBar';
import AppReducer from './components/store/AppReducer';
import AppContext from './components/store/AppContext';
import axios from 'axios';
import './App.css';
import Home from './components/pages/Home';

function App() {
  const initialState = []

  const [app, setApp] = useReducer(AppReducer,initialState);
  const [users, setUsers] = useState([]);
  const [on, setOn] =useState(false);
  const AppContext = React.createContext ();
  
  

  useEffect(() => {
    let url = 'https://65e15639d3db23f7624ace30.mockapi.io/Users';
    const getUsers = async () => {
      let res = await axios.get(url)
      setApp({type: 'loadedUsers', payload:res.data})
    }
    getUsers()
  }, []);

  return (
    <AppContext.Provider value={{app,setApp}} >
      <div className="App-header">
        <NavBar/>
        Fitness App
        <MyRouter />


      </div>

    </AppContext.Provider>
    
  );



}

function Board() {
  const value =  useContext(AppContext);
  return (
    <div>
      <h1> {value}</h1>
      <Home/>
    </div>
  );
}


export default App;
