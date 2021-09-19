import React, { useState} from 'react';
import { Modal } from '../../.././context/Modal';
import DeleteReviewForm from './DeleteReviewForm';
import { useSelector} from 'react-redux';




function DeleteReviewFormModal({ id, user }) {


    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user);


    


    if (!sessionUser || +sessionUser.id !== +user.id) { return null };
    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Delete</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteReviewForm id={id} />
                </Modal>
            )}

        </div>
    );
}

export default DeleteReviewFormModal;