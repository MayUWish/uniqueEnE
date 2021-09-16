import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as listingActions from "../../store/listings";




function EditBookingFormModal({ booking }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    // const bookings = useSelector(state => state.bookings.incomingBookings);
    const bookingId = booking.id;

    const dispatch = useDispatch();
    // console.log(hosting[listingId]?.userId)
    // console.log(sessionUser?.id)

    //first loading; 
    // useEffect(() => {
    //     sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    // }, [dispatch, sessionUser]);
    
    // require authentication/loggin AND authurizaiton: logged-in user id = boooking's userId
    if (!sessionUser || +booking?.userId !== +sessionUser?.id ) {
        return null;
        // return (<h3 style={{ color: '#f0a04b' }}>No authorization.</h3>)
    };

    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)} style={{ textDecoration: 'none', height: '7%', width: '50%' }}>Edit</button>
            
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditBookingForm bookingId={bookingId}/>
                </Modal>
            )}

        </div>
    );
}

export default EditBookingFormModal;