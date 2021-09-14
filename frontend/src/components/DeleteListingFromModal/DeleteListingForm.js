import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import * as listingActions from "../../store/listings";
import { useDispatch, useSelector } from "react-redux";
import './DeleteListingForm.css'
import { useHistory } from "react-router-dom";

// import { useHistory } from "react-router-dom";

function DeleteListingForm({ listingId }) {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    // const listings = useSelector(state => state.hosting);
    const history = useHistory()
    // const currentListing = listings[listingId]
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setErrors([]);
        // const toDeletedListingId ={
        //     listingId,
        //     // userId: sessionUser.id,
        // }

        return dispatch(listingActions.deleteListingThunk(listingId))
            .then(()=>{
                setErrors(['Successfully deleted!']);
                // reset();
                history.push(`/hosting`)
            })
            .catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });
        
                  
    };


    return (
        <>  
            {/* <button onClick={() => history.push(`/hosting/${Object.keys(listings)[Object.keys(listings).length - 1]}`)}>X</button> */}
            <form className='listingForm' onSubmit={handleSubmit}>
                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className='listingInputWrapper'>
                      Are you sure to delete this listing?  
                </div>
                
                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Delete</button>
                </div>

            </form>

        </>
    );
}

export default DeleteListingForm;