import React from 'react';
import UserCard from './UserCard.js';

function Gallery({ users }) {
  // This block will only display the first three users
  let show = [];
  for (let x = 0; x < 3 && x < users.length; x++) {
    show.push(<UserCard key={x} user={users[x]} />);
  }

  // This block will display all users
  const showUsers = users.map(user => <UserCard key={user.id} user={user} />);

  return (
    <>
      Gallery
      <div className='gallery'>
        {/* Displaying only the first three users */}
        {show}
        
        {/* Displaying all users */}
        {/* {showUsers} */}
      </div>
    </>
  );
}

export default Gallery;
