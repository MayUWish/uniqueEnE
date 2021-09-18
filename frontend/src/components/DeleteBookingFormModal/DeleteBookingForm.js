import React, { useEffect, useState } from "react";
import * as bookingActions from "../../store/bookings";
import { useSelector,useDispatch} from "react-redux";
import './DeleteBookingForm.css'
import * as BookingRedux from "../../store/bookings";

function DeleteBookingForm({ bookingId }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
 
 
    const [errors, setErrors] = useState([]);

    // !!unmounted to clean up, otherwise strorafe leak warning
    useEffect(() => {


        return () => dispatch(BookingRedux.viewBookingThunk(sessionUser.id))

    }, [dispatch, sessionUser]);

   

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

    // if (!bookingId) return null;
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

export default DeleteBookingForm;