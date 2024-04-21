import React from 'react'
import { Link } from 'react-router-dom'

//This is my navbar component that provides some sort of call to action. I want it to be listed at the top of each page.

function NavBar() {
    return (
        <div>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/userinfo'>
                <button>User Info Page</button>
            </Link>
            <Link to='/meallist'>
                <button>Meal List</button>
            </Link>
        </div>
    )
}

export default NavBar;