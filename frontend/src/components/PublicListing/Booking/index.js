import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Booking.css'
import {useParams} from 'react-router-dom';
import * as BookingRedux from "../../../store/bookings";
import * as PublicListingRedux from "../../../store/publicListing";



function BookingForm() {
    const { listingId } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const currentListing = useSelector(state => state.publicListing);
    

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guestNum, setGuestNum] = useState(1);
    const [errors, setErrors] = useState([]);

    

    //when refresh/reload to get state
    useEffect(() => {
        dispatch(PublicListingRedux.viewPublicListingThunk(listingId));
    }, [dispatch, listingId]);

    useEffect(() => {
        if(sessionUser){
            dispatch(BookingRedux.viewBookingThunk(sessionUser.id))
        }
        
    }, [dispatch, sessionUser]);

    // logout user will get error message once it click on the booking form to select date, numberguest...
    const loggedOutUser =  () => {
        if(!sessionUser) {
            window.alert('Please login/signup to book.')
        } 
    }
    
    const reset = () => {
        setStartDate('');
        setEndDate('');
        setGuestNum(1);
        setErrors([])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const newBooking = {
            userId: sessionUser.id,
            listingId:currentListing.id,
            numGuests:guestNum,
            startDate,
            endDate
     
        }
        console.log(newBooking );

        return dispatch(BookingRedux.createBookingThunk(newBooking)).then(()=>{
            setErrors(['Successfully booked.']);
            window.alert('Successfully booked.')
            reset();
            // history.push(`/hosting/${Object.keys(listings)[0]}`)
        }).catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });
           
    };

    

    return (
        <>
            <h3 style={{textAlign:'start'}} >${currentListing.price} / night</h3>
            <form className='bookingForm' onSubmit={handleSubmit} onClick={loggedOutUser}>  

            <ul className='error'>
                {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                ))}
            </ul>
             
                 <label>
                        Check In
                        <input
                            className='bookingInput'
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        // required
                        />
                </label>
                           
                <label>
                        Check Out
                        <input
                            className='bookingInput'
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        // required
                        />
                </label>
                           
                <label>
                        Guests
                        <input
                            className='bookingInputNumber'
                            // type="number"
                            value={guestNum}
                            onChange={(e) => setGuestNum(e.target.value)}
                            placeholder=''                          
                            // max={currentListing.guestNum}
                            // min='1'
                        // required
                        />
                </label>
           

              
                 <button className='bookingFormButton button' type="submit" disabled={!sessionUser} >check Availability</button>

         

              

            </form>

          
        </>
    );
}

export default BookingForm;