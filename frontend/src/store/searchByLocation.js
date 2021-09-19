import { csrfFetch } from './csrf';


const SEARCH_LOCATION_LISTINGS = 'listing/searchListingByLocation';



///////////////////////////Action:



// search listings/spots by location for both loggin user and loggout user 
const searchByLocationAction = (listings) => {
    return {
        type: SEARCH_LOCATION_LISTINGS,
        payload: listings,
    };
};







//////////////////////////////////////////Thunk:


// search listings/spots by location
export const searchByLocationActionThunk = (city) => async (dispatch) => {

    const response = await csrfFetch(`/api/search/city`, {
        method: "POST",
        body: JSON.stringify({ city }),
    });
    const data = await response.json();
    dispatch(searchByLocationAction(data.listings));
    return response;
};



///////////////////////////// reducer:
const initialState = {};

const sortList = (list) => {
    return list.sort((listingA, listingB) => {
        return listingA.createdAt - listingB.createdAt;
    }).map((listing) => listing.id);
};

const searchByLocation = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case SEARCH_LOCATION_LISTINGS:
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

export default searchByLocation;