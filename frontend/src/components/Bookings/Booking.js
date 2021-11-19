import toAddImg from '../../images/deFaultImg.jpeg'
// import { useDispatch} from 'react-redux';
// import * as bookingActions from "../../store/bookings";
// import { useState } from 'react';

import {NavLink} from 'react-router-dom';
import EditBookingFormModal from '../EditBookingFromModal';
import DeleteBookingFormModal from '../DeleteBookingFormModal'


const Booking = ({ booking}) => {
    // const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);

    // const DeleteBooking=(e)=>{
    //     setErrors([]);
    //     dispatch(bookingActions.deleteBookingThunk(+e.target.value)).then(() => {
    //         window.alert('Successfully deleted. ')


    //     }).catch(async (res) => {
    //             // console.log('notOK',res)
                
    //             const data = await res.json();
    //             // console.log('notOK', data)
    //         if (data && data.errors) {
    //             window.alert(data.errors[0])                    
    //                 // setErrors(data.errors)};
    //         };
    // })}
    
    return (
        <div className='eachListing'>            
            <img className='img' src={booking.Listing.Images ? (booking.Listing.Images[0] ? booking.Listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>
            <div className='intro'>
                {/* <ul className='error'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul> */}
               
                <h3>{booking.Listing?.title}</h3>  
                <p style={{marginLeft:'1%',fontSize:'small'}}>{booking.Listing?.address}, {booking.Listing?.city}</p>
                <p style={{ marginLeft: '1%', fontSize: 'small' }}>{Number(booking.Listing?.twinBedNum) + Number(booking.Listing?.queenBedNum) + Number(booking.Listing?.kingBedNum) + Number(booking.Listing?.sofaBedNum)} beds, {booking.Listing?.bathroomNum} baths</p>

                <h5>{booking.numGuests} guests' reservation:  </h5>
                <h5 style={{ marginLeft: '1%' }}>from {booking.startDate.slice(0, 10)} to {booking.endDate.slice(0, 10)}</h5>
       
                <div style={{ display: 'flex', flexFlow:'column'}}>
                    <NavLink className='button' to={`/listings/${booking.listingId}`} style={{ textDecoration: 'none', width: '65%',textAlign:'center' }}>To Your Stay</NavLink>
                    

                    <div style={{ display: 'flex', marginTop: '3%', marginBottom: '3%'}}>

                       <EditBookingFormModal booking={booking}/>

                        {/* <button className='button' value={booking.id} onClick={deleteBooking} style={{ textDecoration: 'none', width: '35%' }}>Cancel</button> */}

                        <DeleteBookingFormModal bookingId={booking.id} />

                    </div>

                    
                </div>
          </div>


        
        </div>
    )

};

export default Booking;