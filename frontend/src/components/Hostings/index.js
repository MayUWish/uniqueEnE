import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as listingActions from "../../store/listings";
import Listing from './Listing'
import ReservationsCurrentOfHostView from '../ReservationsCurrentOfHostView';

import ReservationsPastOfHostView from '../ReservationsPastOfHostView';
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
        <div style={{ display: 'flex' }}>
            <div className='listingsWrapper' style={{ width: '50%', borderRight: '2px solid #d3d3d3', marginLeft: '1%' }}>
                {listings?.map(listing=>(
                    <Listing key={listing.id} listing={listing}/>
                ))}
            </div>
            <div style={{ width: '50%', marginLeft: '1%' }}>
                <h3 style={{ color: 'darkslategray'}}>{`Current&Incoming bookings`}:</h3>
                <ReservationsCurrentOfHostView listings={listings }/>

                <h3 style={{ color: 'darkslategray', borderTop:'2px solid lightgray',width:'80%',paddingTop:'2%' }}>{`Past bookings`}:</h3>
                <ReservationsPastOfHostView listings={listings} />


            </div>
        </div>
        
    )

};

export default HostingsCollection;

