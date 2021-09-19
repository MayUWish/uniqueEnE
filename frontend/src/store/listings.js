import { csrfFetch } from './csrf';

const CREATE_LISTING = 'listing/createListing';
const CREATE_IMAGE = 'listing/createImage';
const CREATE_AMENITY = 'listing/createAmenity';
const CREATE_REVIEW = 'listing/createReview';

const VIEW_LISTING = 'listing/viewListing';


const EDIT_LISTING = 'listing/editListing';
const DELETE_LISTING = 'listing/deleteListing';
const DELETE_IMAGE = 'listing/deleteImage';
const DELETE_AMENITY = 'listing/deleteAmenity';

///////////////////////////Action:

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

// add amenities to listing
const createAmenityAction = (amenity) => {
    return {
        type: CREATE_AMENITY,
        payload: amenity,
    };
};

// add reviews to listing
const createReviewAction = (review) => {
    return {
        type: CREATE_REVIEW,
        payload: review,
    };
};


// view listing/spot that current loggin user posted
const viewListingAction = (listings) => {
    return {
        type: VIEW_LISTING,
        payload: listings,
    };
};

// edit  listing/spot
const editListingAction = (listing) => {
    return {
        type: EDIT_LISTING,
        payload: listing,
    };
};

// delete listing/spot
const deleteListingAction = (listingId) => {
    return {
        type: DELETE_LISTING,
        payload: listingId,
    };
};

// delete image, data is {} with imageId and listingId as keys
const deleteImageAction = (data) => {
    return {
        type: DELETE_IMAGE,
        payload: data,
    };
};

//delete amenity,data is {} with amenityId and listingId as keys
const deleteAmenityAction = (data) => {
    return {
        type: DELETE_AMENITY,
        payload: data,
    };
};



//////////////////////////////////////////Thunk:
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

// add amenity to listings
export const createAmenityThunk = (amenity) => async (dispatch) => {

    const response = await csrfFetch("/api/amenities", {
        method: "POST",
        body: JSON.stringify({ ...amenity}),
    });
    const data = await response.json();
    dispatch(createAmenityAction(data.amenity));
    return response;
};

// add rewviews to listing
export const createReviewThunk = (review) => async (dispatch) => {

    const response = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({ ...review }),
    });

    if(response.ok){
    const data = await response.json();
    dispatch(createAmenityAction(data.review));
    return response;
    } else{
        const err = Error('Server Error.');
        err.errors = [`Server Error. Please try again later.`];
        err.status = 500;
        err.title = 'Server Error.';
        throw err;
    }
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


// edit listing/spot
export const editListingThunk = (listing) => async (dispatch) => {

    const response = await csrfFetch(`/api/listings/${listing.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...listing }),
    });
    const data = await response.json();
    dispatch(editListingAction(data.listing));
    return response;
};

// delete listing/spot 
export const deleteListingThunk = (listingId) => async (dispatch) => {

    const response = await csrfFetch(`/api/listings/${listingId}`, {
        method: "DELETE",
        // body: JSON.stringify({ ...listing }),
    });
    const data = await response.json();
    dispatch(deleteListingAction(data.listingId));
    return response;
};

// delete images 
export const deleteImageThunk = (imageId) => async (dispatch) => {

    const response = await csrfFetch(`/api/images/${imageId}`, {
        method: "DELETE",
    });
    const data = await response.json();
   
    dispatch(deleteImageAction(data));
    return response;
};

// delete amenity ,amenity is {} with amenityId and listingId as keys  l
export const deleteAmenityThunk = (amenity) => async (dispatch) => {

    const response = await csrfFetch(`/api/amenities`, {
        method: "DELETE",
        body: JSON.stringify({ ...amenity }),
    });
    const data = await response.json();
    dispatch(deleteAmenityAction(data));
    return response;
};


///////////////////////////// reducer:
const initialState = {};

const sortList = (list) => {
    return list.sort((listingA, listingB) => {
        return listingA.createdAt - listingB.createdAt;
    }).map((listing) => listing.id);
};

const listingReducer = (state = initialState, action) => {
    let newState;
    let newListingState;
    switch (action.type) {
        case CREATE_LISTING:
            // listing id as key, and value is listing object;
            const newListingsIds = [...state.listingsIds];
            newListingsIds.unshift(action.payload.id);
            newState = {
                ...state,
                [action.payload.id]: action.payload,
                listingsIds: newListingsIds,
            }
            return newState;

            
        case CREATE_IMAGE:
            // listing id as key, and value is listing object;
            // each listing has a key of images, value is an array of images object
            newListingState = {...state[action.payload.listingId]}
            newListingState.Images ? newListingState.Images=[...newListingState.Images, action.payload] : newListingState.Images = [action.payload]
            newState = {
                ...state,
                [action.payload.listingId]: newListingState,
            }
            return newState;

        case CREATE_AMENITY:
            // listing id as key, and value is listing object;
            // each listing has a key of images, value is an array of images object
            newListingState = { ...state[action.payload.listingId] }
            newListingState.ListingAmenities ? newListingState.ListingAmenities = [...newListingState.ListingAmenities, action.payload] : newListingState.ListingAmenities = [action.payload]
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
                // do not copy original state when viewing bc allListings will be the most updated all listings, otherwise when switching user, the previous logged-in user's hosting state will not be cleared ( user logout will clear session state, but not hosting state)
                // ...state,
                ...allListings, 
                listingsIds: sortList(action.payload),
            }
            return newState;

        case EDIT_LISTING:
            // listing id as key, and value is listing object
            newState = {
                ...state,

                [action.payload.id]: {
                    ...state[action.payload.id],
                    ...action.payload },
            }
            return newState;

        case DELETE_LISTING:
            // listing id as key, and value is listing object
            newState = {
                ...state,
            }
            delete newState[action.payload.listingId]
            newState.listingsIds= newState.listingsIds.filter(id => +id !== +action.payload.listingId)
            return newState;
        
        case DELETE_IMAGE:
            // listing id as key, and value is listing object
            newState = {
                ...state,
            }
            const imageChangedListing = newState[action.payload.listingId]
            const updatedImages = imageChangedListing.Images.filter(({ id })=> +id !== +action.payload.imageId);
            newState[action.payload.listingId] ={
                ...newState[action.payload.listingId],
                Images: updatedImages

            };
            return newState;

        case DELETE_AMENITY:
            // listing id as key, and value is listing object
            newState = {
                ...state,
            }
            const amenityChangedListing = newState[action.payload.listingId]
            const updatedAmenities = amenityChangedListing.ListingAmenities.filter(({ amenityId }) => +amenityId !== +action.payload.amenityId);
            newState[action.payload.listingId] = {
                ...newState[action.payload.listingId],
                ListingAmenities: updatedAmenities

            };
            return newState;

        case CREATE_REVIEW:
            // listing id as key, and value is listing object;
            // each listing has a key of images, value is an array of images object
            newListingState = { ...state[action.payload.listingId] }
            newListingState.Reviews ? newListingState.Reviews = [...newListingState.Reviews, action.payload] : newListingState.Reviews = [action.payload]
            newState = {
                ...state,
                [action.payload.listingId]: newListingState,
            }
            return newState;

        default:
            return state;
    }
};

export default listingReducer ;