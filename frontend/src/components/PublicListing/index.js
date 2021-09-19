import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink,useParams } from 'react-router-dom';

import * as PublicListingRedux from "../../store/publicListing";
import './listing.css'
import Description from './Description';
import Booking from './Booking'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const PublicListing = () => {
    const {listingId} = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);
    const [isLoaded, setIsLoaded] = useState(false);

    let totalRating = 0;
    let numberOfRating = currentListing?.Reviews?.length;
    currentListing?.Reviews?.forEach(({ rating }) => totalRating += Number(rating));
    let averageRating = 0;
    if (numberOfRating) {
        averageRating = (totalRating / numberOfRating).toFixed(1);
    }
   

    //when refresh/reload to get state, setIsLoaded very Important!!! otherwise,it will be undefined
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId)).then(() => setIsLoaded(true));
       
    }, [dispatch, listingId]);

    

   
    // let currentListing;
    // publicListing ? currentListing = publicListing:currentListing={};

    if (!currentListing) return null;

    return (
        <>
        {isLoaded && ( <div style={{ margin:'auto 3%' }}>

            {/* for intro section */}
            <div className='listingTitle'> 
                <h2>{currentListing?.title}</h2>
                    <h3>{numberOfRating || 0} Reviews(<i className="fas fa-star" />{averageRating || 'None'})  {currentListing ? currentListing.city + ', ' : ''} {currentListing?currentListing.state+', ':''} {currentListing?.country}</h3>
            </div>

            {/* for image section */}
            <div className='listingImages'>
                {currentListing?.Images?.slice(0,5).map( ({url,id},index) =>(
                    <img id={`image${index + 1}`} key={id} src={url} alt='listingImage'></img>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <NavLink   
                    style={{ display: 'block', color: '#183a1d', 
                    textDecoration: 'none', border: '1px solid lightgray', 
                    fontWeight: 'bolder', borderRadius:'5px',padding:'0.1%' }}
                    to={`/listings/${listingId}/images`}                    
                    >Show all photos </NavLink>
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
            <Reviews />
            <ReviewForm />
                
        </div>)}
        </>
    )

};

export default PublicListing;