import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,  useParams } from 'react-router-dom';

import * as listingActions from "../../store/listings";
import './listing.css'
import Description from './Description'

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
    if (!sessionUser || +sessionUser.id !== +currentListing?.userId) { return null};

    return (

        <div style={{ margin:'auto 3%' }}>

            {/* for intro section */}
            <div className='listingTitle'> 
                <h2>{currentListing?.title}</h2>
                <h3>{currentListing ? currentListing.city + ', ' : ''}{currentListing?currentListing.state+', ':''} {currentListing?.country}</h3>
            </div>

            {/* for image section */}
            <div className='listingImages'>
                {currentListing?.Images.slice(0,5).map( ({url,id},index) =>(
                    <img id={`image${index + 1}`} key={id} src={url} alt='listingImage'></img>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <NavLink style={{ display: 'block', color:'#183a1d',
                textDecoration: 'none', border: '1px solid lightgray', 
                    fontWeight: 'bolder', borderRadius: '5px', padding: '0.1%'}}
                to={`/hosting/${listingId}/images`}>
                    Show all photos 
                    </NavLink>
            </div>
            
            {/* for details section, grid 2 by 2 when it is public */}
          
            <div className='listingDescription'>
                <Description />

            </div>
         
            
        
       
        </div>

    )

};

export default Listing;