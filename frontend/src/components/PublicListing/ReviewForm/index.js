import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import * as PublicListingRedux from "../../../store/publicListing";
import './ReviewForm.css';





function ReviewForm() {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);

   

    // logout user will get error message once it click on the review form 
    const loggedOutUser = () => {
        if (!sessionUser) {
            window.alert('Please login/signup to review.')

        }
    }




    const reset = () => {
        setRating('');
        setReview('');
        setErrors([])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const newReview = {
            userId: sessionUser.id,
            listingId,
            rating,
            review
        }
        //console.log(newReview );

        return dispatch(PublicListingRedux.createReviewThunk(newReview)).then(() => {
            reset();     
        }).catch(async (res) => {
            //console.log('notOK',res)
            const data = await res.json();
            // console.log('notOK', data)
            if (data && data.errors) setErrors(data.errors);
        });

    };

    return (
        <div >
            <form 
            className='reviewForm' 
            onSubmit={handleSubmit} onClick={loggedOutUser}>

                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <label>
                    <div style={{ textAlign: 'center' }}> Rating: </div>
                    <input
                        className='reviewInput'
                        type="number"
                        min="1"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        style={{ width: '100%' }}
                    // required
                    />
                </label>

                <label>
                    <div style={{textAlign:'center'}}> Review: </div>
                    <textarea
                        className='reviewInput2'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='Leave a review of your stay ...'
                    // required
                    />
                </label>

                <button className='reviewFormButton button' type="submit" disabled={!sessionUser} >POST Review</button>


            </form>


        </div>
    );
}

export default ReviewForm;