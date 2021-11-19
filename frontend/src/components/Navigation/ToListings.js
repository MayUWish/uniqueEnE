import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ToListings() {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => {
            // console.log('cleanup!!') // to clean whole page click eventlistener, so that second time to click, will trigger open/true; otherwise, always close/false
            document.removeEventListener("click", closeMenu);
        }
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };



    const reservation = (e) => {
        e.preventDefault();
        history.push('/bookings')
    };

    return (
        <div >
            <div >
                <button onClick={openMenu}>
                    Where are you going? 
                </button>
            </div>
            {showMenu && (
                <div className="searchDropDown">
                <NavLink className='exploreAllListings' exact to="/listings">
                    All Unique Stays  
                </NavLink>
                <button onClick={reservation}>Idyllwild–Pine Cove</button>
                <button onClick={logout}>Joshua Tree</button>
                <button onClick={logout}>Surprise Me</button>
     
            </div>
            )} 
        </div>
    );
}

export default ToListings;