import React, { useState } from 'react';
import axios from 'axios';

function UserCard({ user, onDelete, onUserActivity }) {
  const [like, setLike] = useState(false);

  const deleteUser = () => {
    onDelete(user.id);
    axios.delete(`https://65e15639d3db23f7624ace30.mockapi.io/users/${user.id}`)
      .then(response => {
        // Handle deletion if necessary
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className={`uCard ${like ? 'favorite' : ''}`}>
      UserCard Component
      <img className='pic' src="https://www.pexels.com/search/fitness/" alt="" />
      <h6>{user.meal}</h6>
      <button onClick={deleteUser}>Delete User</button>
      <button onClick={onUserActivity}>Log Your Activity</button>
    </div>
  );
}

export default UserCard;
