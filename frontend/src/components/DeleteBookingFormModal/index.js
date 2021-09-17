import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import DeleteBookingForm from './DeleteBookingForm';





function DeleteBookingFormModal({ bookingId }) {
    const [showModal, setShowModal] = useState(false);

   
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)} >Cancel</button>
            
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteBookingForm bookingId={bookingId}/>
                </Modal>
            )}

        </div>
    );
}

export default DeleteBookingFormModal;