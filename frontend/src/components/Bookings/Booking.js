// import toAddImg from '../../images/toAddImg.jpg'
import { useDispatch} from 'react-redux';
import * as bookingActions from "../../store/bookings";
import { useState } from 'react';

import {NavLink} from 'react-router-dom';

const Booking = ({ booking}) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const deleteBooking=(e)=>{
        setErrors([]);
        dispatch(bookingActions.deleteBookingThunk(+e.target.value)).then(() => {
            window.alert('Successfully deleted.')


        }).catch(async (res) => {
                // console.log('notOK',res)
                const data = await res.json();
                // console.log('notOK', data)
                if (data && data.errors) setErrors(data.errors);
            });
    }
    
    
    return (
        <div className='eachListing'>
         
            {/* <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img> */}
            

            <div className='intro'>
                <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <h3>{booking.Listing?.title}</h3>
                <p>{booking.Listing?.address}, {booking.Listing?.city}</p>
                <p>{Number(booking.Listing?.twinBedNum) + Number(booking.Listing?.queenBedNum) + Number(booking.Listing?.kingBedNum) + Number(booking.Listing?.sofaBedNum)} beds , {booking.Listing?.bathroomNum} baths</p>

                <h4>{booking.numGuests} guests' reservation:  </h4>
                <h4 >from {booking.startDate.slice(0, 10)} to {booking.endDate.slice(0, 10)}</h4>
       
                <div style={{ display: 'flex', flexFlow:'column'}}>

                    <NavLink className='button' to={`/listings/${booking.listingId}`} style={{ textDecoration: 'none', height: '12%', width:'50%', marginBottom:'2%' }}>Check Your Stay</NavLink>
                    <button className='button' value={booking.id} onClick={deleteBooking} style={{ textDecoration: 'none', height: '7%', width: '50%' }}>Cancel Reservation</button>
                </div>
          </div>
        
        </div>
    )

};

export default Booking;