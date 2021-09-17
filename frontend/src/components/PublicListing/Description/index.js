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
  

    if (!currentListing) return null;
    return (
       <>
        <div style={{ borderBottom: '1px solid lightgray'}}>
            <h2>Unique Stay hosted by {currentListing?.User.username}</h2>
                <p>{currentListing?.guestNum} guests, {currentListing?.bedroomNum} bedrooms, {Number(currentListing?.twinBedNum) + Number(currentListing?.queenBedNum) + Number(currentListing?.kingBedNum) + Number(currentListing?.sofaBedNum)} beds, {currentListing?.bathroomNum} bathrooms, ${currentListing?.price}/night</p>
        </div>
            <div style={{ borderBottom: '1px solid lightgray'}}>
                {currentListing?.enhancedClean && <h3 key='Enhanced Clean'><i class="fas fa-home" />{currentListing?.enhancedClean && '  Enhanced Clean'}</h3>}
                {currentListing?.selfCheckin &&<h3 key='Self Checkin'><i class="fas fa-suitcase" />{currentListing?.selfCheckin && '  Self Checkin'}</h3>}

        </div >
            
            <div style={{ borderBottom: '1px solid lightgray', textAlign: 'justify'}}>
                <p>{currentListing?.description}</p>

        </div >

            <div style={{ borderBottom: '1px solid lightgray'}}>
            <h3><i class="fas fa-bed" /> {` Where you'll Sleep`}</h3>
                {currentListing?.twinBedNum > 0 && <p key='twinBedNum' style={{marginLeft:'1%'}}>-{currentListing?.twinBedNum} twin beds </p>}
                {currentListing?.queenBedNum >0 &&<p key='queenBedNum' style={{ marginLeft: '1%' }}>-{currentListing?.queenBedNum} queen beds</p>}
                {currentListing?.kingBedNum>0 && <p key='kingBedNum' style={{ marginLeft: '1%' }}>-{currentListing?.kingBedNum} king beds</p>}
                {currentListing?.sofaBedNum > 0 && <p key='sofaBedNum' style={{ marginLeft: '1%' }}>-{ currentListing?.sofaBedNum } sofa beds</p >}
        </div>

            <div style={{ borderBottom: '1px solid lightgray'}}>
            <h3><i class="fas fa-bath" /> {` What this place offers`}</h3>
            {currentAmenityNames.map((amenity,index)=>(
                <p style={{ marginLeft: '1%' }} key={index}>-{amenity}</p>
            ))}
           
        </div>

       
      </>

    )

};

export default Description;