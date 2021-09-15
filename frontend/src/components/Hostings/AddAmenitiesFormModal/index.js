import React, { useState, useEffect } from 'react';
import { Modal } from '../../.././context/Modal';
import AddAmenitiesForm from './AddAmenitiesForm';
import { useSelector,  useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import * as listingActions from "../../../store/listings";

function AddAmenitiesFormModal({listingId}) {
    // inorder to use at specific listing page as well
    let url = useParams();
    if (!listingId) {

        listingId = url.listingId;
    }

    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    // all listings for current logged-in user
    const listings = useSelector(state => state.hosting);


    //when refresh, the logged-in user has hosting state
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);


    let currentListing;
    listings ? currentListing = listings[listingId] : currentListing = {};


    if (!sessionUser || +sessionUser.id !== +currentListing?.userId) { return null };
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