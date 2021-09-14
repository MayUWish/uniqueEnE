import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import * as listingActions from "../../store/listings";
import './listing.css'

const Listing = () => {
    const {listingId} = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // all listings for current logged-in user
    const listings = useSelector(state => state.hosting);
    
    
    
    //when refresh, the logged-in user has hosting state
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);

   
    let currentListing;
    listings?currentListing = listings[listingId]:currentListing={};

    
    // edit listing sent out message 'No Authorization'. Thus here no need to send another message
    if (!sessionUser) { return null};

    return (

        <div style={{ margin:'auto 3%' }}>
            <div className='listingTitle'> 
                <h2>{currentListing?.title}</h2>
                <h3>{currentListing?.city}, {currentListing?.state}, {currentListing?.country}</h3>
            </div>
            <div className='listingImages'>
                {currentListing?.Images.slice(0,5).map( ({url,id},index) =>(
                    <img id={`image${index + 1}`} key={id} src={url} alt='listingImage'></img>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <NavLink style={{ display: 'block', textDecoration: 'none',border:'1px solid lightgray',fontWeight:'bold'}} to={`/hosting/${listingId}/images`}>Show all photos </NavLink>
            </div>
            
            
        
       
        </div>

    )

};

export default Listing;