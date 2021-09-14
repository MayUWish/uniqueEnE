import React, { useState } from 'react';
import { Modal } from '../../.././context/Modal';
import AddAmenitiesForm from './AddAmenitiesForm';
import { useSelector } from 'react-redux';


function AddAmenitiesFormModal({listingId}) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) { return null };
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Add Amenities</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddAmenitiesForm listingId={listingId}/>
                </Modal>
            )}

        </div>
    );
}

export default AddAmenitiesFormModal;