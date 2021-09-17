import toAddImg from '../../images/deFaultImg.jpeg'

import {NavLink} from 'react-router-dom';

const Booking = ({ booking}) => {

    
    
    return (
        <div className='eachListing'>
            <img className='img' src={booking.Listing.Images ? (booking.Listing.Images[0] ? booking.Listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img>

            <div className='intro'>
                <h3>{booking.Listing?.title}</h3>
                <p>{booking.Listing?.address}, {booking.Listing?.city}</p>
                <p>{Number(booking.Listing?.twinBedNum) + Number(booking.Listing?.queenBedNum) + Number(booking.Listing?.kingBedNum) + Number(booking.Listing?.sofaBedNum)} beds , {booking.Listing?.bathroomNum} baths</p>

                <h4>{booking.numGuests} guests' reservation:  </h4>
                <h4 >from {booking.startDate.slice(0, 10)} to {booking.endDate.slice(0, 10)}</h4>
       
                <div style={{ display: 'flex', flexFlow:'column'}}>

                    <NavLink className='button' to={`/listings/${booking.listingId}`} style={{ textDecoration: 'none', width: '65%',textAlign:'center', marginBottom:'2%' }}>To Your Stay</NavLink>
                </div>
          </div>


        
        </div>
    )

};

export default Booking;