import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import DeleteListingForm from './DeleteListingForm';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as listingActions from "../../store/listings";




function DeleteListingFormModal() {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const hosting = useSelector(state => state.hosting);
    const  {listingId}  = useParams();

    const dispatch = useDispatch();
    // console.log(hosting[listingId]?.userId)
    // console.log(sessionUser?.id)

    //first loading; when refresh, still can access to specific listing that user posted as host
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);
    
    // require authentication/loggin AND authurizaiton: logged-in user id = listing's userId
    if (!sessionUser || +hosting[listingId]?.userId !== +sessionUser?.id ) {
        return null;
        // return (<h3 style={{ color: '#f0a04b' }}>No authorization.</h3>)
    };

    return (
        <div >
            <button className='button' onClick={() => setShowModal(true)}>Delete Listing</button>
            
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteListingForm listingId={listingId}/>
                </Modal>
            )}

        </div>
    );
}

export default DeleteListingFormModal;