import { csrfFetch } from './csrf';

const CREATE_LISTING = 'listing/createListing';

// create new listing/spot
const createListingAction = (listing) => {
    return {
        type: CREATE_LISTING ,
        payload: listing,
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


const initialState = {};

const listingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_LISTING:
            newState = {
                ...state,
                [action.payload.id]: action.payload
            }
            return newState;
        default:
            return state;
    }
};

export default listingReducer ;