import React from 'react';
import UserCard from './UserCard.js';

function Gallery({ users }) {
  const showAllUsers = users.map(user => (
    <UserCard key={user.id} user={user} />
  ));

  return (
    <>
      
      <div className='gallery'>
        {showAllUsers}
      </div>
    </>
  );
}

export default Gallery;
