import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
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
                <h2>{`Explore&Enjoy`}</h2>
            </NavLink>
            <div>
                <a className='contact' href='https://www.linkedin.com/in/meitongqu/' target='blank'>
                    <i className="fab fa-linkedin fa-2x" />
                </a>

                <a className='contact' href='https://github.com/MayUWish' target='blank'>
                    <i className="fab fa-github fa-2x" />
                </a>
            </div>
                       
         
            {isLoaded && sessionLinks}           
        </div>
    );
}

export default Navigation;