import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import './Booking.css'

import * as BookingRedux from "../../store/bookings";

import { useHistory } from "react-router-dom";



function EditBookingForm({ booking}) {
   
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    
     
    // frontend input: e.g. startDate: "2021-09-15"
    const toDate = (yearMonthDay) => {
        const year = yearMonthDay.split('-')[0];
        const month = yearMonthDay.split('-')[1];
        const day = yearMonthDay.split('-')[2];

        //new Date take month -1 as month
        const date = new Date(year, month - 1, day);
        return date;

    }

    // console.log( booking.startDate) 
    const [startDate, setStartDate] = useState(booking.startDate.slice(0,10));
    const [endDate, setEndDate] = useState(booking.endDate.slice(0, 10));
    const [guestNum, setGuestNum] = useState(booking.numGuests);
    const [errors, setErrors] = useState([]);



 
    // useEffect(() => {
    //     if (sessionUser) {
    //         dispatch(BookingRedux.viewBookingThunk(sessionUser.id))
    //     }

    // }, [dispatch, sessionUser]);

    // logout user will get error message once it click on the booking form to select date, numberguest...
    
    const loggedOutUser = () => {
        if (!sessionUser) {
            window.alert('Please login/signup to book.')

        }
    }


    

    //for date without hour,minutes,seconds, ms
    const numberOfDays = (startDate, endDate) => {
        return +(endDate - startDate) / (24 * 60 * 60 * 1000);
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

        const editBooking = {
            userId: sessionUser.id,
            listingId: booking.listingId,
            numGuests: guestNum,
            startDate,
            endDate

        }
        console.log(editBooking);

        // return dispatch(BookingRedux.createBookingThunk(newBooking)).then(() => {
        //     // setErrors(['Successfully booked.']);
        //     // window.alert('Successfully booked.')
        //     reset();
        //     history.push('/bookings')
        // }).catch(async (res) => {
        //     // console.log('notOK',res)
        //     const data = await res.json();
        //     // console.log('notOK', data)
        //     if (data && data.errors) setErrors(data.errors);
        // });

    };

    if (!sessionUser || +booking?.userId !== +sessionUser?.id) return null;
    // history.push('/listings')



    return (
        <>
            <h3 style={{ textAlign: 'start', marginLeft: '2%' }} >${booking?.Listing.price} /night</h3>

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

                {(startDate && endDate && toDate(endDate) > toDate(startDate)) && (
                    <div style={{ textAlign: 'start', fontSize: 'large', fontWeight: 'bold', marginLeft: '5%' }}>
                        Price Breakdown:
                        <p style={{ marginLeft: '9%' }}>${booking?.Listing.price} x {numberOfDays(toDate(startDate), toDate(endDate))} nights</p>

                        <p style={{ marginLeft: '9%' }}>Total: ${(+booking?.Listing.price * (+numberOfDays(toDate(startDate), toDate(endDate)))).toLocaleString()}</p>
                    </div>
                )}

                <button className='bookingFormButton button' type="submit" disabled={!sessionUser} >Edit</button>





            </form>


        </>
    );
}
export default EditBookingForm;