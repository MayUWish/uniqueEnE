import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Booking.css'
import {useParams} from 'react-router-dom';
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
        // return dispatch(sessionActions.login({  })).catch(
        //     async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //     }
        // );
    };

    

    return (
        <>
            <h3 style={{textAlign:'start'}} >${currentListing.price} / night</h3>
            <form className='' onSubmit={handleSubmit}>
                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className=''>
                    <label>
                        Check In
                        <input
                            className=''
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        // required
                        />
                    </label>
                </div>

                <div className=''>
                    <label>
                        Check Out
                        <input
                            className=''
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        // required
                        />
                    </label>
                </div>
                <div className='' >
                    <label>
                        Guests
                        <input
                            className=''
                            type="number"
                            value={guestNum}
                            onChange={(e) => setGuestNum(e.target.value)}
                            placeholder=''
                            style={{width:'65%'}}
                        // required
                        />
                    </label>
                </div>

                <div className=''>
                    <button className='' type="submit" disabled={!sessionUser}>CheckAvailability</button>

                </div>

            </form>

          
        </>
    );
}

export default BookingForm;