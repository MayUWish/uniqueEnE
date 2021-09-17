import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm';
import { useSelector} from 'react-redux';





function EditBookingFormModal({ booking }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    // const bookings = useSelector(state => state.bookings.incomingBookings);
    // const bookingId = booking.id;


    //first loading; 
    // useEffect(() => {
    //     sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    // }, [dispatch, sessionUser]);
    
    // require authentication/loggin AND authurizaiton: logged-in user id = boooking's userId
    if (!sessionUser || +booking?.userId !== +sessionUser?.id ) {
        return null;
    };

    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)} style={{ textDecoration: 'none' }}>Edit</button>
            
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditBookingForm booking={booking}/>
                </Modal>
            )}

        </div>
    );
}

export default EditBookingFormModal;