import React, { useState } from 'react';
import { Modal } from '../../.././context/Modal';
import EditReviewForm from './EditReviewForm';
import { useSelector } from 'react-redux';





function EditReviewFormModal({ id, user,review,rating }) {


    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    // rename to pass in edit form which includes cinst review, rating declare
    const reviewcontent = review;
    const ratingN = rating;





    if (!sessionUser || +sessionUser.id !== +user.id) { return null };
    return (
        <div style={{display:'inline'}}>
            <button className='button' onClick={() => setShowModal(true)}>Edit</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReviewForm id={id} reviewcontent={reviewcontent} ratingN={ratingN} setShowModal={setShowModal}/>
                </Modal>
            )}

        </div>
    );
}

export default EditReviewFormModal;