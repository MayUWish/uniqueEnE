import { csrfFetch } from './csrf';


const VIEW_PUBLIC_LISTING = 'listing/viewPublicListing';
const CREATE_REVIEW = 'listing/createReview';
const DELETE_REVIEW = 'listing/deleteReview';


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

// delete reviews as traveller 
const deleteReviewAction = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        payload: reviewId,
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

// delete review as travellers  
export const deleteReviewThunk = (reviewId) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    dispatch(deleteReviewAction(data.reviewId));
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
    let newReviews;
    

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

        case DELETE_REVIEW:

            newState = {
                ...state,
            }
            newReviews = newState.Reviews.filter(({ id }) => +id !== +action.payload)
            
            newState.Reviews = newReviews;
            return newState;

        default:
            return state;
    }
};

export default publicListingReducer;