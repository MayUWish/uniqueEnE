import React, { useState} from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../.././store/publicListing";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from 'react-router-dom';




function EditReviewForm({ id, reviewcontent,ratingN }) {
    const { listingId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [rating, setRating] = useState(ratingN);
    const [review, setReview] = useState(reviewcontent);
    const [errors, setErrors] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);
        const updatedReview = {
            id,
            userId: sessionUser.id,
            listingId,
            rating,
            review
        }

        return dispatch(listingActions.editReviewThunk(updatedReview))
            .then(() => {
                setErrors(['Successfully updated! Please click outside the form to return to the listing.']);
                // reset();

            })
            .catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });

    };


    return (

        <div style={{
            border: '1px solid #d3d3d3', borderRadius: '10px',
            width: '50%',
            margin: '2% 0'
        }}>
            <form
                className='reviewForm'
                onSubmit={handleSubmit} >

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
                        style={{ width: '100%' }}
                    // required
                    />
                </label>

                <label>
                    Review
                    <textarea
                        // className='reviewInput'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        style={{ rows: '100', width: '150%' }}
                    // required
                    />
                </label>

                <button className='reviewFormButton button' type="submit" disabled={!sessionUser} >Edit</button>


            </form>


        </div>
    );
}

export default EditReviewForm;