import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const CREATE_LISTING = 'listing/createListing';
const CREATE_IMAGE = 'listing/createImage';
const VIEW_LISTING = 'listing/viewListing';


// create new listing/spot
const createListingAction = (listing) => {
    return {
        type: CREATE_LISTING ,
        payload: listing,
    };
};

// add images to listing
const createImageAction = (image) => {
    return {
        type: CREATE_IMAGE,
        payload: image,
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

// add images to listings
export const createImageThunk = (image) => async (dispatch) => {

    const response = await csrfFetch("/api/images", {
        method: "POST",
        body: JSON.stringify({ ...image}),
    });
    const data = await response.json();
    dispatch(createImageAction(data.image));
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

            
        case CREATE_IMAGE:
            // listing id as key, and value is listing object;
            // each listing has a key of images, value is an array of images object
            const newListingState = {...state[action.payload.listingId]}
            newListingState.images ? newListingState.images.push(action.payload):newListingState.images=[]
            newState = {
                ...state,
                [action.payload.listingId]: newListingState,
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