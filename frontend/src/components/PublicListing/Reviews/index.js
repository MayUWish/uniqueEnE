import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as PublicListingRedux from "../../../store/publicListing";


const Reviews = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const currentListing = useSelector(state => state.publicListing);
    const [isLoaded, setIsLoaded] = useState(false);
    
    let totalRating=0;
    let numberOfRating = currentListing?.Reviews?.length;
    currentListing?.Reviews?.forEach(({rating})=>totalRating+=Number(rating));
    let averageRating = 0;
    if (numberOfRating) {
        averageRating = (totalRating / numberOfRating).toFixed(1);
    }
    
    //when refresh/reload to get state, setIsLoaded very Important!!! otherwise,it will be undefined
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId)).then(() => setIsLoaded(true));

    }, [dispatch, listingId]);
    if (!currentListing) return null;

    return (
     
        <>
            {isLoaded && <>
            
                <h4>{numberOfRating||0} Reviews(<i class="fas fa-star" />{averageRating||'None'})</h4>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:'5px'}}>
                {currentListing?.Reviews?.map(({ review, User, id }, index) => (
                <div key={`review_${id}`} 
                    style={{ width:'45%',
                    padding:'2%' ,
                    textAlign:'justify',
                    maxHeight: '120px',
                    overflow:'auto'
                    }}>
                        <span key={`reviewUser_${id}`} 
                        
                        style={{fontWeight:'bold'}} > 
                        { User?.username}: </span> 
                        <span key={`reviewContent_${id}`}
                        >{review}</span>
                </div>
                ))}

            </div>

                </>

            }
   

       
       </>
    )

};

export default Reviews;