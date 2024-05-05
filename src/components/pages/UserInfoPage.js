import React from 'react'
import { Link } from "react-router-dom";
import Dashboard from '../Dashboard';


//This is the User Info Page that contains the Dashboard component its components (the gallery component that houses the user cards pulled from the mockapi link, the video carousel that houses fitness video links from YouTube, and the meal form that enables a user to input his or her meals.)



function UserInfoPage () {
  return (
    <div className='userpage'>
      <h6>UserInfoPage</h6>
            <Link to = {Dashboard}>Go to Dashboard</Link>
    </div>
  );
};

export default UserInfoPage;