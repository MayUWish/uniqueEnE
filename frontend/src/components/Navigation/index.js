import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ToListings from './ToListings';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className='loginSignup'>
                <LoginFormModal />
                <SignupFormModal />
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
            </div>
        );
    }

    return (
        <div className ='nav'>
            <NavLink className ='home' exact to="/">
                <h2>{`UniqueEnE`}</h2>
            </NavLink>

            <div style={{display:'flex'}}>         
            {/* <NavLink className='exploreAllListings' exact to="/listings">
                <h3 style={{ color: '#183a1d' }}>{`<  Click To Explore All Unique Stays  >`}</h3>
            </NavLink> */}
            <ToListings />
            </div>
            {isLoaded && sessionLinks}   
            
        </div>
    );
}

export default Navigation;