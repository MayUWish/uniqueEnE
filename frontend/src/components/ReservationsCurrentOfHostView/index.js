
import { useSelector } from 'react-redux';


const Reservations = ({ listings }) => {

    const sessionUser = useSelector(state => state.session.user);
   
    if (!sessionUser) { return null };
    // console.log(listings)
    
    const toDate = (yearMonthDay) => {
        const year = yearMonthDay.split('-')[0];
        const month = yearMonthDay.split('-')[1];
        const day = yearMonthDay.split('-')[2];

        //new Date take month -1 as month
        const date = new Date(year, month - 1, day);
        return date;

    }
    
    const today = (new Date()).setHours(0,0,0,0)

    return (
        
        <div  style={{ width: '50%',  marginLeft: '1%', display:'flex',flexDirection:'column' }}>
            {listings?.map(listing => (
                (listing.Bookings&&listing.Bookings.length > 0) && <div key={`currentReservationListing_${listing.id}`} style={{border:'1px solid #d3d3d3',
                margin:'2%', borderRadius:'10px'}}>
                    <h3>{listing.title}</h3>
                    <h4 style={{marginLeft:'5%'}}>{listing.address},{listing.city}</h4>
                    <h4 style={{ marginLeft: '5%' }}>Reservations:</h4>
                    {listing.Bookings.map(booking=>(
                        (toDate(booking.endDate.slice(0, 10)) - today >= 0) && <div key={`currentReservation_${booking.id}`}>
                            <p style={{ marginLeft: '8%' }}>{`> by`} {booking.User.username}</p>
                            <p style={{ marginLeft: '10%' }}>from {booking.startDate.slice(0, 10)} to {booking.endDate.slice(0, 10)}</p>
                            
                        </div>
                    ))}
                </div>
                ))}
        </div>
          
      

    )

};

export default Reservations ;