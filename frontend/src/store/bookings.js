import { csrfFetch } from './csrf';


const CREATE_BOOKING = 'booking/createBooking';



///////////////////////////Action:



// create new booking
const createBookingAction = (booking) => {
    return {
        type: CREATE_BOOKING,
        payload: booking,
    };
};






//////////////////////////////////////////Thunk:



// create new booking
export const createBookingThunk = (booking) => async (dispatch) => {

    const response = await csrfFetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify({ ...booking}),
    });
    const data = await response.json();
    dispatch(createBookingAction(data.booking));
    return response;
};


///////////////////////////// reducer:
const initialState = {};

// old - new for booking
const sortList = (list) => {
    return list.sort((listingA, listingB) => {
        return listingB.startDate - listingA.startDate;
    }).map((listing) => listing.id);
};

const bookingsReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case CREATE_BOOKING:
            let newBookingIds=[];
            state.bookingsIds ? newBookingIds = [...state.bookingsIds] : newBookingIds=[]
            newBookingIds.unshift(action.payload.id);
            newState = {
                ...state,
                [action.payload.id]: action.payload,
                bookingsIds: newBookingIds,
            }

            return newState;

        default:
            return state;
    }
};

export default bookingsReducer;