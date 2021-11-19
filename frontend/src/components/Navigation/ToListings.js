import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom";
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

    
    const allListing = (e) => {
        e.preventDefault();
        history.push('/listings')
    };


    const location = (e) => {
        e.preventDefault();
        history.push('/bookings')
    };

    return (
        <div >
            <div >
                <button onClick={openMenu} className='searchButton'>
                    Where are you going? 
                </button>
            </div>
            {showMenu && (
                <div className="searchDropDown">                
                    <button onClick={allListing} className='searchButtonSmall'>
                        <i class="fas fa-globe"> All Unique Stays</i>
                    </button>

                    <button onClick={location } className='searchButtonSmall'>
                        <i class="fas fa-globe"> Joshua Tree</i>
                    </button>
                    <button onClick={location } className='searchButtonSmall'>
                        <i class="fas fa-globe"> Idyllwild–Pine Cove</i>
                    </button>
                    <button onClick={location } className='searchButtonSmall'>
                        <i class="fas fa-globe"> Santa Cruz</i>
                    </button>

                    <button onClick={location } className='searchButtonSmall'>
                        <i class="fas fa-globe"> Surprise Me</i>
                    </button>
     
            </div>
            )} 
        </div>
    );
}

export default ToListings;