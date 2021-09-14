import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateListingForm from './CreateListingForm';
import { useSelector } from 'react-redux';



function CreateListingFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    
    if (!sessionUser) {
        return (<h3 style={{color:'#f0a04b'}}>
            Please login/signup to become a host.
        </h3>)
    };
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