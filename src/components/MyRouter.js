import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserInfoPage from './pages/UserInfoPage';
import NotFoundPage from './pages/NotFoundPage';
import MealList from './pages/MealList';


//This is my Router that updates the routes and their components.
function MyRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/userinfo' element={<UserInfoPage />} />
            <Route path='/meallist' element={<MealList/> } />
            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}
export default MyRouter;