import React from 'react'
import { Link } from 'react-router-dom'

//This is my navbar component that provides some sort of call to action. I want it to be listed at the top of each page.

function NavBar() {
    return (
        <div className='navbar'>
            <ul className='nav-links'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/userinfo'>
                    <button>User Info Page</button>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar;