import React, { useContext, useEffect, useState } from 'react';
import AppContext from './store/AppContext.js';
import axios from 'axios';


//This is the UserCard component that pulls the user data from the mock api and returns it in the form of cards to display on the Dashboard component.

function UserCard({ user }) {
  const { app, setApp } = useContext(AppContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(app.users);
  }, [app.users]);

  const userInfo = users.find(u => u.name === user.name);
  const [like, setLike] = useState(false);

  if (!userInfo || user.name === 'Not Found') return null;

  const deleteUser = () => {
    setApp({ type: 'deleteUser', payload: user.id });
    axios.delete(`https://api.example.com/users/${user.id}`)
      .then(response => {
        setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const userActivity = () => {
    setApp({ type: 'userActivity', payload: userInfo.fitnessActivity });
  };

  return (
    <div className={`uCard ${like ? 'favorite' : ''}`}>
      UserCard Component
      <img className='pic' src="https://www.pexels.com/search/fitness/" alt="" />
      <h6>{user.name}</h6>
      <button onClick={deleteUser}>Delete User</button>
      {userInfo ? 
        <button>Log Your Activity</button> : 
        <button onClick={userActivity}>Submit</button>
      }
    </div>
  );
}

export default UserCard;