import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,  useParams } from 'react-router-dom';

import * as listingActions from "../../store/listings";


const DeleteImagesLink= () => {
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
    if (!sessionUser||+sessionUser.id!==+currentListing?.userId) { return null };

    return (
             
                <NavLink className='button' style={{ display: 'block', textDecoration: 'none', border: '1px solid lightgray', fontWeight: 'bolder' }} to={`/hosting/${listingId}/images/delete`}>Delete Images </NavLink>   

    )

};

export default DeleteImagesLink;