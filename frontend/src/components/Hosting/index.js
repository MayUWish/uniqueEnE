import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateListingForm from './CreateListingForm';
import { useSelector } from 'react-redux';


function CreateListingFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    
    if (!sessionUser) {return null};
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Create Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateListingForm/>
                </Modal>
            )}
        </div>
    );
}

export default CreateListingFormModal;