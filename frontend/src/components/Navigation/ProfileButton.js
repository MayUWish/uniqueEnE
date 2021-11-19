import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => {
            // console.log('cleanup!!') // to clean whole page click eventlistener, sot that second time to click, will trigger open/true; otherwise, always close/false
            document.removeEventListener("click", closeMenu);
        }
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };
    

    const hosting = (e) => {
        e.preventDefault();
        history.push('/hosting')
    };

    const reservation = (e) => {
        e.preventDefault();
        history.push('/bookings')
    };

    return (
        <div className="profileWrapper">
            {/* <div >
                <button className='profileButton' onClick={openMenu}>
                    <i className="fas fa-address-card" />
                </button>
            </div>
            {showMenu && ( */}
                <div >
                    {/* <li>Wecome {user.username}</li> */}
                    {/* <li>{user.email}</li> */}
                    {/* <li> */}
                    <button className='profileDropDown' onClick={hosting}>Manage Listings</button>
                    <button className='profileDropDown' onClick={reservation}>Your Reservations</button>
                    {/* </li> */}
                    {/* <li> */}
                    <button className='profileDropDown'onClick={logout}>Log Out</button>
                    {/* </li> */}
                </div>
           {/* )} */}
        </div>
    );
}

export default ProfileButton;