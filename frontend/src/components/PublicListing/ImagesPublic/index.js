import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams,NavLink } from 'react-router-dom';

import * as PublicListingRedux from "../../../store/publicListing";
import './images.css'

const Images = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);
    const [isLoaded, setIsLoaded] = useState(false);

    //when refresh/reload to get state
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId)).then(() => setIsLoaded(true));
    }, [dispatch, listingId]);



    return (
      <>

        { isLoaded && (<div style={{ margin: 'auto 3%' }}>
            <div className ='imagesToListing' >
                <NavLink style={{ display: 'block', textDecoration: 'none', border: '1px solid lightgray', fontWeight: 'bolder' }} to={`/listings/${listingId}`}>Back to listing </NavLink>
            </div>

            <div className='AllImages'>
                {currentListing?.Images.map(({ url, id }, index) => (
                    <img key={`allPublicImages_${id} `}src={url} alt='listingImage'></img>
                ))}
            </div>
            




        </div>)}
    </>

    )

};

export default Images;