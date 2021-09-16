// import toAddImg from '../../images/toAddImg.jpg'

import {NavLink} from 'react-router-dom';

const Booking = ({ booking}) => {

    
    
    return (
        <div className='eachListing'>
         
            {/* <img className='img' src={listing.Images ? (listing.Images[0] ? listing.Images[0].url : toAddImg) : toAddImg} alt='listingImage' ></img> */}
            
            <div className='intro'>
                <h5>{booking.Listing?.title}</h5>
                <p>{booking.Listing?.address}, {booking.Listing?.city}</p>
                <p>{Number(booking.Listing?.twinBedNum) + Number(booking.Listing?.queenBedNum) + Number(booking.Listing?.kingBedNum) + Number(booking.Listing?.sofaBedNum)} beds , {booking.Listing?.bathroomNum} baths</p>

                <p>Reservation from {booking.startDate.slice(0, 10)} to {booking.endDate.slice(0, 10)} </p>
       
                <div style={{ display: 'flex', flexFlow:'column'}}>

                    <NavLink className='button' to={`/listings/${booking.listingId}`} style={{ textDecoration: 'none', height: '24px', width: '75px' }}>YourStay</NavLink>
                </div>
          </div>
        
        </div>
    )

};

export default Booking;