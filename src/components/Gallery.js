import React, { useContext } from 'react';
import UserCard from './UserCard.js';
import AppContext from './store/AppContext.js';

function Gallery() {
  const { app } = useContext(AppContext);
  const { users } = app;

  // This is the gallery that houses the UserCard component which pulls user data from the mock api url and returns that information in the form of cards.
  let show = [];

  for (let x = 0; x < 3; x++) {
    show.push(<UserCard key={x} />);
  }

  const showUsers = users.map(user => <UserCard key={user.id} user={user} />);

  return (
    <>
      Gallery
      <div className='gallery'>
        {showUsers}
        {/* {show} An array of 3 User Cards*/}
      </div>
    </>
  );
}

export default Gallery;