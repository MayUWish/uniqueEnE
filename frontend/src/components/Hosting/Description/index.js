import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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


    let currentListing={};
    listings ? currentListing = listings[listingId] : currentListing = {};


    // edit listing sent out message 'No Authorization'. Thus here no need to send another message
    if (!sessionUser) { return null };

    // amenitiesPredefined's index is amentityId, predefined amenity table in db
    const amenitiesPredefined = [
        'Wifi',
        'TV',

        'Air conditioning',
        'Heating',

        'Cooking basics',

        'Free parking on premises',

        'Essentials',

        'Washer',
        'Dryer',
        'Smoke Alarm',
        'Carbon monoxide alarm'
    ]

    
    const currentAmenityIds = currentListing?.ListingAmenities.map(({amenityId})=>amenityId);
    const currentAmenityNames = amenitiesPredefined.filter((amenity, index) => currentAmenityIds?.includes(index + 1))
  


    return (
       <>
            <div style={{ borderBottom: '1px solid lightgray', width: '50%'}}>
            <h2>Unique Stay hosted by {sessionUser.username}</h2>
                <p>{currentListing?.guestNum} guests, {currentListing?.bedroomNum} bedrooms, {Number(currentListing?.twinBedNum) + Number(currentListing?.queenBedNum) + Number(currentListing?.kingBedNum) + Number(currentListing?.sofaBedNum)} beds, {currentListing?.bathroomNum} bathrooms, ${currentListing?.price}/night</p>
        </div>
            <div style={{ borderBottom: '1px solid lightgray', width: '50%'}}>
                <h3 key='Enhanced Clean'>{currentListing?.enhancedClean && 'Enhanced Clean'}</h3>
                <h3 key='Self Checkin'>{currentListing?.selfCheckin && 'Self Checkin'}</h3>

        </div >
            
            <div style={{ borderBottom: '1px solid lightgray', width: '50%' }}>
                <p>{currentListing?.description}</p>

        </div >

            <div style={{ borderBottom: '1px solid lightgray', width: '50%'}}>
            <h3>Where you'll Sleep</h3>
            <p key='twinBedNum'>{currentListing?.twinBedNum} twin beds</p>
            <p key='queenBedNum'>{currentListing?.queenBedNum} queen beds</p>
            <p key='kingBedNum'>{currentListing?.kingBedNum} king beds</p>
            <p key='sofaBedNum'>{ currentListing?.sofaBedNum } sofa beds</p >
        </div>

            <div style={{ borderBottom: '1px solid lightgray', width: '50%'}}>
            <h3>What this place offers</h3>
            {currentAmenityNames.map((amenity,index)=>(
                <p key={index}>{amenity}</p>
            ))}
           
        </div>

       
      </>

    )

};

export default Description;