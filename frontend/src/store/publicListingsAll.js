import { csrfFetch } from './csrf';


const VIEW_PUBLIC_LISTINGS = 'listing/viewPublicListings';



///////////////////////////Action:



// view all listings/spots for both loggin user and loggout user 
const viewListingsAction = (listings) => {
    return {
        type: VIEW_PUBLIC_LISTINGS,
        payload: listings,
    };
};







//////////////////////////////////////////Thunk:


// view all listings/spots 
export const viewPublicListingsThunk = () => async (dispatch) => {

    const response = await csrfFetch(`/api/listings`
    );
    const data = await response.json();
    dispatch(viewListingsAction(data.listings));
    return response;
};



///////////////////////////// reducer:
const initialState = {};

const sortList = (list) => {
    return list.sort((listingA, listingB) => {
        return listingA.createdAt - listingB.createdAt;
    }).map((listing) => listing.id);
};

const publicListingsAllReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case VIEW_PUBLIC_LISTINGS:

           
            const allListings = {};
            action.payload.forEach(listing => {
                allListings[listing.id] = listing;
            });
            newState = {
                // do not copy original state when viewing bc it is all listings
                // ...state,
                ...allListings,
                listingsIds: sortList(action.payload),
            }

            return newState;

        default:
            return state;
    }
};

export default publicListingsAllReducer;