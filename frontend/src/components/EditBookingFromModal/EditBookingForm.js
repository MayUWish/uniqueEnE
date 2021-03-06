import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import './Booking.css'

import * as BookingRedux from "../../store/bookings";

import { useHistory } from "react-router-dom";



function EditBookingForm({ booking, setShowModal}) {
   
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
        return Math.round(+(endDate - startDate) / (24 * 60 * 60 * 1000), 0);
        // +(endDate - startDate) / (24 * 60 * 60 * 1000);
    }

    // const reset = () => {
    //     setStartDate('');
    //     setEndDate('');
    //     setGuestNum(1);
    //     setErrors([])
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        const editBooking = {
            id:booking.id,
            userId: booking.userId,
            listingId: booking.listingId,
            numGuests: guestNum,
            startDate,
            endDate

        }
        //console.log(editBooking);

        return dispatch(BookingRedux.editBookingThunk(editBooking)).then(() => {
            setErrors(['Successfully edited.']);
            // window.alert('Successfully booked.')
            // reset();
            history.push('/bookings')
            setShowModal(false)
        }).catch(async (res) => {
            // console.log('notOK',res)
            const data = await res.json();
            // console.log('notOK', data)
            if (data && data.errors) setErrors(data.errors);
        });

    };

    if (!sessionUser || +booking?.userId !== +sessionUser?.id) return null;
    // history.push('/listings')



    return (
        <div style={{ overflow: 'auto', maxHeight: '55%', 
        minWidth: '300px',
        borderRadius: '10px' }}>

            <h3 style={{ textAlign: 'start', marginLeft: '2%' }} >${booking?.Listing.price} /night</h3>

            <form  onSubmit={handleSubmit} onClick={loggedOutUser}>

                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <label style={{ borderTop: '1px solid #d3d3d3' }}>
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

                <label style={{borderBottom:'1px solid #d3d3d3'}}>
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
                   <div style={{ textAlign: 'start', fontWeight: 'bold', marginLeft: '5%' }}>
                        Price Breakdown:
                        <p style={{ marginLeft: '9%', fontWeight: 'normal'}}>${booking?.Listing.price}/night * </p>

                        <p style={{ marginLeft: '10%', fontWeight: 'normal'}}>{numberOfDays(toDate(startDate), toDate(endDate))} nights</p>

                        <p style={{ marginLeft: '2%' }}>Total: ${(+booking?.Listing.price * (+numberOfDays(toDate(startDate), toDate(endDate)))).toLocaleString()}</p>
                    </div>
                )}

                <button className='bookingFormButton button' type="submit" disabled={!sessionUser} 
                 
                >Edit</button>





            </form>


        </div>
    );
}
export default EditBookingForm;