import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

// authentication forms 
import UserRegister from '../Authforms/UserRegister.jsx';
import UserLogin from '../Authforms/UserLogin.jsx';
import PartnerRegister from '../Authforms/PartnerRegister.jsx';
import PartnerLogin from '../Authforms/PartnerLogin.jsx';

// Save/Like
import SaveReel from '../pages/General/Saved.reels.jsx';
import LikedReels from '../pages/General/Liked.reels.jsx';

// Lading Page
import HomePage from '../pages/General/HomePage.jsx';

// Food patner 
import CreateFood from '../pages/food-partner/CreateFood.jsx';
import FoodPartnerDashorad from '../pages/food-partner/FoodPartnerDashorad.jsx';
import FoodPartnerHome from '../pages/food-partner/FoodPartnerHome.jsx';
const AppRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<UserLogin/>}/>
            <Route path='/save' element={<SaveReel/>}/>
            <Route path='/like-reel' element={<LikedReels/>}/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/user/register' element={<UserRegister/>}/>
            <Route path='/food-partner/register' element={<PartnerRegister/>}/>
            <Route path='/food-partner/:id' element={<FoodPartnerDashorad/>}/>
            <Route path='/food-partner/login' element={<PartnerLogin/>}/>
            <Route path='/partner/home' element={<FoodPartnerHome/>}/>
            <Route path='/create-food' element={<CreateFood/>}/>
            <Route path='*' element={<div > Path ERROR</div>}/>

        </Routes>
    </Router>
      
    </>
  )
}

export default AppRoutes
