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
            console.log('notOK',res)
            const data = await res.json();
            // console.log('notOK', data)
            if (data && data.errors) setErrors(data.errors);
        });

    };

    return (
        <div style={{border:'1px solid #d3d3d3',borderRadius:'10px',
        width:'35%',
        marginTop:'2%'}}>
            <h3 style={{ textAlign: 'start', marginLeft: '2%' }} >Your Review:</h3>

            <form 
            className='reviewForm' 
            onSubmit={handleSubmit} onClick={loggedOutUser}>

                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <label>
                    Rating
                    <input
                        className='reviewInput'
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        style={{ width: '25%' }}
                    // required
                    />
                </label>

                <label>
                    Review
                    <textarea
                        className='reviewInput'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        style={{width:'55%'}}
                    // required
                    />
                </label>

                <button className='reviewFormButton button' type="submit" disabled={!sessionUser} >POST</button>





            </form>


        </div>
    );
}

export default ReviewForm;