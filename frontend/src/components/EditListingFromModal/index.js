import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditListingForm from './EditListingForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function EditListingFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const hosting = useSelector(state => state.hosting);
    const  {listingId}  = useParams();
    // console.log(hosting[listingId]?.userId)
    // console.log(sessionUser?.id)
    
    // require authentication/loggin AND authurizaiton: logged-in user id = listing's userId
    if (!sessionUser || +hosting[listingId]?.userId !== +sessionUser?.id ) {
        return (<h3 style={{ color: '#f0a04b' }}>No authorization.</h3>)
    };

    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Edit Listing</button>
            
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditListingForm listingId={listingId}/>
                </Modal>
            )}

        </div>
    );
}

export default EditListingFormModal;