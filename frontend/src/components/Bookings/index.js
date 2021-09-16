import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import * as listingActions from "../../store/listings";
import * as BookingRedux from "../../store/bookings";
import Booking from './Booking'
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

    console.log('(((((',incomingBookings)
    if (!sessionUser) { return null };
   

    return ( 
      <>
        { isLoaded && (<div>
            <div className='incomingBookingsWrapper'>
                {(incomingBookings.length > 0) && incomingBookings.map(booking => (
                    <Booking key={booking.id} booking={booking} />
                ))}
            </div>

            {/* <div className='pastBookingsWrapper'>
                    {(pastBookings.length > 0) && pastBookings.map(booking => (
                    <Booking key={booking.id} booking={booking} />
                ))}
            </div> */}
        </div>)}

      </>

    )

};

export default BookingsCollection;
