import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import * as BookingRedux from "../../../store/bookings";
import * as PublicListingRedux from "../../../store/publicListing";




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
            window.alert('Please login/signup to book.')

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
        <>
            <h3 style={{ textAlign: 'start', marginLeft: '2%' }} >Your Review</h3>

            <form className='bookingForm' onSubmit={handleSubmit} onClick={loggedOutUser}>

                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <label>
                    Rating
                    <input
                        className='bookingInput'
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    // required
                    />
                </label>

                <label>
                    Review
                    <input
                        className='bookingInput'
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    // required
                    />
                </label>

                <button className='bookingFormButton button' type="submit" disabled={!sessionUser} >POST</button>





            </form>


        </>
    );
}

export default ReviewForm;