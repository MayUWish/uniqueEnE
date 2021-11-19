import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


import * as publicListingsAll from "../../store/publicListingsAll";
import PublicListing from '../PublicListings/PublicListing'
import '../PublicListings/Listing.css'

const ListingsCollectionFiltered = () => {
    let { location } = useParams();
    // space at url is %20
    location = location.split('%20').join(' ')
    
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
      
    const listings = useSelector(state => state.publicListingsAll.listingsIds?.map(id => state.publicListingsAll[id]))?.filter(listing => {
      if (location === 'Surprise Me'){
        return !['Joshua Tree', 'Idyllwild-Pine Cove', 'Santa Cruz'].includes(listing.city)
      } else {
        return listing.city === location
      }
    });
 
    //first loading

    useEffect(() => {
        dispatch(publicListingsAll.viewPublicListingsThunk()).then(() => setIsLoaded(true));
    }, [dispatch]);


    return (
      <>
        {isLoaded && (
        <div className='listingsWrapper'>
            {listings?.map(listing=>(
                <PublicListing  key={listing.id} listing={listing}/>
            ))}
      
        </div>)}
      </>
        
    )

};

export default ListingsCollectionFiltered;

