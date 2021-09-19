import React, { useState, useEffect } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../.././store/publicListing";
import { useDispatch, useSelector } from "react-redux";
import * as publicListingActions from "../../.././store/publicListing";




function DeleteReviewForm({ id }) {
    const dispatch = useDispatch();

    const listing = useSelector(state => state.publicListing);
    const [errors, setErrors] = useState([]);   

    // !!unmounted to clean up, otherwise strorafe leak warning
    useEffect(() => {


        return () => dispatch(publicListingActions.viewPublicListingThunk(listing.id))

    }, [dispatch, listing.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);



        return dispatch(listingActions.deleteReviewThunk(id))
            .then(() => {
                setErrors(['Successfully deleted!']);
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
    
        <form className='listingForm' onSubmit={handleSubmit}>
            <ul className='error'>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <div className='listingInputWrapper'>
                Are you sure to delete this review?
            </div>

            <div className='listingSubmitWrapper'>
                <button className='listingSubmitButton' type="submit">Delete</button>
            </div>

        </form>


    );
}

export default DeleteReviewForm;