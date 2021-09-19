import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as PublicListingRedux from "../../../store/publicListing";


const Reviews = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);
    const [isLoaded, setIsLoaded] = useState(false);
    
    //when refresh/reload to get state, setIsLoaded very Important!!! otherwise,it will be undefined
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId)).then(() => setIsLoaded(true));

    }, [dispatch, listingId]);
    if (!currentListing) return null;

    return (
     
        <>
            {isLoaded && <>
            
            <h3>{currentListing?.Reviews?.length} Reviews:</h3>
          
                {currentListing?.Reviews?.map(({ review, User, id }, index) => (
                <div key={`review_${id}`}>
                    {User?.username}: {review}
                </div>
            ))}

                </>

            }
   

       
       </>
    )

};

export default Reviews;