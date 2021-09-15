import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as PublicListingRedux from "../../../store/publicListing";
import './description.css'

const Description = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);

    //when refresh/reload to get state
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId));
    }, [dispatch, listingId]);

    // let currentListing;
    // publicListing ? currentListing = publicListing : currentListing = {};
  

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
        <div style={{ borderBottom: '1px solid lightgray'}}>
            <h2>Unique Stay hosted by {currentListing?.User.username}</h2>
                <p>{currentListing?.guestNum} guests, {currentListing?.bedroomNum} bedroom, {Number(currentListing?.twinBedNum) + Number(currentListing?.queenBedNum) + Number(currentListing?.kingBedNum) + Number(currentListing?.sofaBedNum)} bed, {currentListing?.bathroomNum} bathroom, ${currentListing?.price}/night</p>
        </div>
            <div style={{ borderBottom: '1px solid lightgray'}}>
                <h3 key='Enhanced Clean'>{currentListing?.enhancedClean && 'Enhanced Clean'}</h3>
                <h3 key='Self Checkin'>{currentListing?.selfCheckin && 'Self Checkin'}</h3>

        </div >
            
            <div style={{ borderBottom: '1px solid lightgray'}}>
                <p>{currentListing?.description}</p>

        </div >

            <div style={{ borderBottom: '1px solid lightgray'}}>
            <h3>Where you'll Sleep</h3>
            <p key='twinBedNum'>{currentListing?.twinBedNum} twin bed</p>
            <p key='queenBedNum'>{currentListing?.queenBedNum} queen bed</p>
            <p key='kingBedNum'>{currentListing?.kingBedNum} king bed</p>
            <p key='sofaBedNum'>{ currentListing?.sofaBedNum } sofa bed</p >
        </div>

            <div style={{ borderBottom: '1px solid lightgray'}}>
            <h3>What this place offers</h3>
            {currentAmenityNames.map((amenity,index)=>(
                <p key={index}>{amenity}</p>
            ))}
           
        </div>

       
      </>

    )

};

export default Description;