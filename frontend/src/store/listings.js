import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const CREATE_LISTING = 'listing/createListing';
const VIEW_LISTING = 'listing/viewListing';

// create new listing/spot
const createListingAction = (listing) => {
    return {
        type: CREATE_LISTING ,
        payload: listing,
    };
};

// view listing/spot that current loggin user posted
const viewListingAction = (listings) => {
    return {
        type: VIEW_LISTING,
        payload: listings,
    };
};

// create new listing/spot
export const createListingThunk = (listing) => async (dispatch) => {

    const response = await csrfFetch("/api/listings", {
        method: "POST",
        body: JSON.stringify({...listing}),
    });
    const data = await response.json();
    dispatch(createListingAction(data.listing));
    return response;
};

// view listing/spot that current loggin user posted
export const viewListingThunk = (userId) => async (dispatch) => {

    const response = await csrfFetch(`/api/hosting/${userId}`
    // ,{
    //     method: "Post",
    //     body: JSON.stringify({ userId }),
    // }
    );
    const data = await response.json();
    dispatch(viewListingAction(data.listings));
    return response;
};

const initialState = {};

const sortList = (list) => {
    return list.sort((listingA, listingB) => {
        return listingB.createdAt - listingA.createdAt;
    }).map((listing) => listing.id);
};

const listingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_LISTING:
            // listing id as key, and value is listing object;
            const newListingsIds = [...state.listingsIds];
            newListingsIds.push(action.payload.id);
            newState = {
                ...state,
                [action.payload.id]: action.payload,
                listingsIds: newListingsIds,
            }
            return newState;

        case VIEW_LISTING:
            const allListings = {};
            action.payload.forEach(listing=>{
                allListings[listing.id]=listing;
            })
            newState = {
                ...state,
                ...allListings, 
                listingsIds: sortList(action.payload),
            }
            return newState;

        default:
            return state;
    }
};

export default listingReducer ;