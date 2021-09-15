import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as listingActions from "../../store/listings";
import Listing from './Listing'
import './Listing.css'

const HostingsCollection = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const listings = useSelector(state => {
        return state.hosting.listingsIds?.map(id => state.hosting[id]);
    });
    //first loading
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch,sessionUser]);

    if (!sessionUser) { return null };     
    // console.log(listings)

    return (
        
        <div className='listingsWrapper'>
            {listings?.map(listing=>(
                <Listing key={listing.id} listing={listing}/>
            ))}
        </div>
        
    )

};

export default HostingsCollection;

