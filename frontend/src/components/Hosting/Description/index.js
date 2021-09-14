import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import * as listingActions from "../../../store/listings";
import './description.css'

const Description = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // all listings for current logged-in user
    const listings = useSelector(state => state.hosting);



    //when refresh, the logged-in user has hosting state
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);


    let currentListing;
    listings ? currentListing = listings[listingId] : currentListing = {};


    // edit listing sent out message 'No Authorization'. Thus here no need to send another message
    if (!sessionUser) { return null };

    return (

        <div style={{ margin: 'auto 3%' }}>
 




        </div>

    )

};

export default Description;