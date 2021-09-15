import React, { useState, useEffect } from 'react';
import { Modal } from '../.././context/Modal';
import DeleteAmenitiesForm from './DeleteAmenitiesForm';
import { useSelector, useDispatch } from 'react-redux';
import * as listingActions from "../../store/listings";


function DeleteAmenitiesFormModal({listingId}) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const listings = useSelector(state => state.hosting);



    //when refresh, the logged-in user has hosting state
    useEffect(() => {
        sessionUser && dispatch(listingActions.viewListingThunk(sessionUser.id));
    }, [dispatch, sessionUser]);


    let currentListing;
    listings ? currentListing = listings[listingId] : currentListing = {};


    if (!sessionUser || +sessionUser.id !== +currentListing?.userId ) { return null };
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