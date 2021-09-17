import React, { useState } from "react";
import * as bookingActions from "../../store/bookings";
import { useDispatch} from "react-redux";
import './DeleteBookingForm.css'


function DeleteListingForm({ bookingId }) {
    const dispatch = useDispatch();
 
 
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setErrors([]);
  

        return dispatch(bookingActions.deleteBookingThunk(bookingId))
            .then(()=>{
                setErrors(['Successfully cancelled!']);
     
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
                      Are you sure to cancel the reservation?  
                </div>
                
                <div className='listingSubmitWrapper'>
                    <button className='listingSubmitButton' type="submit">Cancel</button>
                </div>

            </form>

        </>
    );
}

export default DeleteListingForm;