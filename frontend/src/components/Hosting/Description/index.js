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
        <div >
            <h2>Unique Stay hosted by {sessionUser.username}</h2>
                <p>{currentListing?.guestNum} guests, {currentListing?.bedroomNum} bedroom, {Number(currentListing?.twinBedNum) + Number(currentListing?.queenBedNum) + Number(currentListing?.kingBedNum) + Number(currentListing?.sofaBedNum)} bed, {currentListing?.bathroomNum} bathroom, ${currentListing?.price}/night</p>
        </div>
        <div>
                <h3>{currentListing?.enhancedClean && 'Enhanced Clean'}</h3>
                <h3>{currentListing?.selfCheckin && 'Self Checkin'}</h3>

        </div>
            <p>{currentListing?.description}</p>
        <div>

        </div>
            <h3>Where you'll Sleep</h3>
            <p>{currentListing?.twinBedNum} twin bed</p>
            <p>{currentListing?.queenBedNum} queen bed</p>
            <p>{currentListing?.queenBedNum} queen bed</p>
            <p>{ currentListing?.queenBedNum } queen bed</p >
        <div>

        </div>
            <h3>What this place offers</h3>
            {currentAmenityNames.map(amenity=>(
                <p>{amenity}</p>
            ))}
           
        <div>

        </div>
      </>

    )

};

export default Description;