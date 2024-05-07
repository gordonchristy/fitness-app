import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserInfoPage from './pages/UserInfoPage';
import NotFoundPage from './pages/NotFoundPage';



//This is my Router that updates the routes and their components.
function MyRouter() {
    return (
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/userinfo' element={<UserInfoPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        
    )
}
export default MyRouter;