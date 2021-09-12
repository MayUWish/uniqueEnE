import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateListingForm from './CreateListingForm';
import { useSelector } from 'react-redux';


function CreateListingFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div >
            <button className='' onClick={() => setShowModal(true)}>Create Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateListingForm user={sessionUser}/>
                </Modal>
            )}
        </div>
    );
}

export default CreateListingFormModal;