import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

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
            // console.log('cleanup!!') // to clean whole page click eventlistener, sot that second time to click, will trigger open/true; otherwise, always close/false
            document.removeEventListener("click", closeMenu);
        }
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="profileWrapper">
            <div >
                <button className='profileButton' onClick={openMenu}>
                    <i className="fas fa-address-card" />
                </button>
            </div>
            {showMenu && (
                <div >
                    {/* <li>Wecome {user.username}</li> */}
                    {/* <li>{user.email}</li> */}
                    {/* <li> */}
                    <button className='profileDropDown' onClick={logout}>Manage Listings</button>
                    {/* </li> */}
                    {/* <li> */}
                    <button className='profileDropDown'onClick={logout}>Log Out</button>
                    {/* </li> */}
                </div>
            )}
        </div>
    );
}

export default ProfileButton;