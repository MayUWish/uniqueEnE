import React, { useState } from 'react';
import { Modal } from '../.././context/Modal';
import DeleteAmenitiesForm from './DeleteAmenitiesForm';
import { useSelector } from 'react-redux';


function DeleteAmenitiesFormModal({listingId}) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) { return null };
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Delete Amenities</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteAmenitiesForm listingId={listingId}/>
                </Modal>
            )}

        </div>
    );
}

export default DeleteAmenitiesFormModal;