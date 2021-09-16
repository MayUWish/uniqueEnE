import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as listingActions from "../../store/listings";
import * as BookingRedux from "../../store/bookings";
import Booking from './Booking';
import PastBooking from './PastBooking'
import './Booking.css'

const BookingsCollection = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    let incomingBookings=[];
    incomingBookings = useSelector(state => {
        return state.bookings.incomingBookingsIds?.map(id => state.bookings.incomingBookings[id]);
    });
    let pastBookings=[];
    pastBookings = useSelector(state => {
        return state.bookings.pastBookingsIds?.map(id => state.bookings.pastBookings[id]);
    });

    //first loading
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);

    useEffect(() => {
        if (sessionUser) {
            dispatch(BookingRedux.viewBookingThunk(sessionUser.id)).then(() => setIsLoaded(true));
        }

    }, [dispatch, sessionUser]);

    // console.log('(((((',incomingBookings)
    if (!sessionUser) { return null };
   

    return ( 
      <>
        { isLoaded && (<div style={{display:'flex'}}>
                <div className='incomingBookingsWrapper' style={{ width: '50%', borderRight: '2px solid #d3d3d3',marginLeft: '1%' }}>
                    <h3>{'Current & Incoming:'}</h3>
                {(incomingBookings.length > 0) && incomingBookings.map(booking => (
                    <Booking key={booking.id} booking={booking} />
                ))}
            </div>

                <div className='pastBookingsWrapper' style={{ width: '50%', marginLeft:'1%'}}>
                <h3>Past:</h3>
                {(pastBookings.length > 0) && pastBookings.map(booking => (
                    <PastBooking key={booking.id} booking={booking} />
                ))}
            </div>
        </div>)}

      </>

    )

};

export default BookingsCollection;
