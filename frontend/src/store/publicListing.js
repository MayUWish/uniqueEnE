import { csrfFetch } from './csrf';


const VIEW_PUBLIC_LISTING = 'listing/viewPublicListing';



///////////////////////////Action:



// view specific listing/spot for both loggin user and loggout user 
const viewListingAction = (listing) => {
    return {
        type: VIEW_PUBLIC_LISTING,
        payload: listing,
    };
};







//////////////////////////////////////////Thunk:



// view listing/spot that current loggin user posted
export const viewPublicListingThunk = (listingId) => async (dispatch) => {

    const response = await csrfFetch(`/api/listings/${listingId}`
    );
    const data = await response.json();
    dispatch(viewListingAction(data.listing));
    return response;
};



///////////////////////////// reducer:
const initialState = {};

// const sortList = (list) => {
//     return list.sort((listingA, listingB) => {
//         return listingA.createdAt - listingB.createdAt;
//     }).map((listing) => listing.id);
// };

const publicListingReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case VIEW_PUBLIC_LISTING:
            // const allListings = {};
            // action.payload.forEach(listing => {
            //     allListings[listing.id] = listing;
            // })
            newState = action.payload
            
            return newState;

        default:
            return state;
    }
};

export default publicListingReducer;