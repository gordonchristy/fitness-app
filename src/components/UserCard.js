import React from 'react';
import axios from 'axios';

function UserCard({ user, onDelete, onUserActivity }) {
  const deleteUser = () => {
    onDelete(user.id);
    axios.delete(`https://65e15639d3db23f7624ace30.mockapi.io/users/${user.id}`)
      .then(response => {
        deleteUser(response.data)
       
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }; 

  return (
    <div className='uCard'>
      <img className='pic' src="https://www.pexels.com/search/fitness/" alt="" />
      <h6>{user.name}</h6>
      <h6>{user.email}</h6>
      <h6>{user.activity}</h6>
      <h6>{user.date}</h6>
      <button onClick={deleteUser}>Delete User</button>
      <button onClick={onUserActivity}>Log Your Activity</button>
    </div>
  );
}

export default UserCard;
