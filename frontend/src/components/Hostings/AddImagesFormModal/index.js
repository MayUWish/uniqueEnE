import React, { useState } from 'react';
import { Modal } from '../../.././context/Modal';
import AddImagesForm from './AddImagesForm';
import { useSelector } from 'react-redux';



function AddImagesFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) { return null };
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Add Images</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddImagesForm />
                </Modal>
            )}

        </div>
    );
}

export default AddImagesFormModal;