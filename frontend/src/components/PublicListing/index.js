import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,useParams } from 'react-router-dom';

import * as PublicListingRedux from "../../store/publicListing";
import './listing.css'
import Description from './Description';
import Booking from './Booking'

const PublicListing = () => {
    const {listingId} = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);

    const [isLoaded, setIsLoaded] = useState(false);

       
    //when refresh/reload to get state, setIsLoaded very Important!!! otherwise,it will be undefined
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId)).then(() => setIsLoaded(true));
       
    }, [dispatch, listingId]);

    

   
    // let currentListing;
    // publicListing ? currentListing = publicListing:currentListing={};

    

    return (
        <>
        {isLoaded && ( <div style={{ margin:'auto 3%' }}>

            {/* for intro section */}
            <div className='listingTitle'> 
                <h2>{currentListing?.title}</h2>
                <h3>{currentListing ? currentListing.city + ', ' : ''}{currentListing?currentListing.state+', ':''} {currentListing?.country}</h3>
            </div>

            {/* for image section */}
            <div className='listingImages'>
                {currentListing?.Images?.slice(0,5).map( ({url,id},index) =>(
                    <img id={`image${index + 1}`} key={id} src={url} alt='listingImage'></img>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <NavLink style={{ display: 'block', textDecoration: 'none', border: '1px solid lightgray', fontWeight: 'bold' }} to={`/listings/${listingId}/images`}>Show all photos </NavLink>
            </div>
            
            
            {/* for details section */}           
            {/* description component width is set as 60% at component file; booking is set width of 35% */}
            <div className='listingDescriptionBookingWrapper'>
          
                <div className='listingDescription'>
                    <Description/>
                </div>

                <div className='bookingFrom' >
                     <Booking />

                </div>

            </div>
                
        </div>)}
        </>
    )

};

export default PublicListing;