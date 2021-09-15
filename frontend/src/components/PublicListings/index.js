import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



import * as publicListingsAll from "../../store/publicListingsAll";
import PublicListing from './PublicListing'
import './Listing.css'

const ListingsCollection = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    const listings = useSelector(state => state.publicListingsAll.listingsIds?.map(id => state.publicListingsAll[id]) );
    
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

export default ListingsCollection;

