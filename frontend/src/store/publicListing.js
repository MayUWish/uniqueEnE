import { csrfFetch } from './csrf';


const VIEW_PUBLIC_LISTING = 'listing/viewPublicListing';
const CREATE_REVIEW = 'listing/createReview';



///////////////////////////Action:



// view specific listing/spot for both loggin user and loggout user 
const viewListingAction = (listing) => {
    return {
        type: VIEW_PUBLIC_LISTING,
        payload: listing,
    };
};

// add reviews to listing
const createReviewAction = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review,
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

// add reviews to listing
export const createReviewThunk = (review) => async (dispatch) => {

    const response = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({ ...review }),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(createReviewAction(data.review));
        return response;
    } else {
        const err = Error('Server Error.');
        err.errors = [`Server Error. Please try again later.`];
        err.status = 500;
        err.title = 'Server Error.';
        return err;
    }
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

        case CREATE_REVIEW:
            // listing id as key, and value is listing object;
            // each listing has a key of images, value is an array of images object
            newState = {...state};
            newState.Reviews ? newState.Reviews = [...newState.Reviews, action.payload] : newState.Reviews = [action.payload]
            return newState;

        default:
            return state;
    }
};

export default publicListingReducer;