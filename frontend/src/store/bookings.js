import { csrfFetch } from './csrf';


const CREATE_BOOKING = 'booking/createBooking';
const VIEW_BOOKING = 'booking/viewBooking';



///////////////////////////Action:



// create new booking
const createBookingAction = (booking) => {
    return {
        type: CREATE_BOOKING,
        payload: booking,
    };
};

// view all bookings that current loggin user reserved
const viewBookingAction = (bookings) => {
    return {
        type: VIEW_BOOKING,
        payload: bookings,
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

// view bookings that current loggin user reserved
export const viewBookingThunk = (userId) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/${userId}`
    );
    const data = await response.json();
    dispatch(viewBookingAction(data.bookings));
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
            state.BookingsIds ? newBookingIds = [...state.BookingsIds] : newBookingIds=[]
            newBookingIds.unshift(action.payload.id);
            newState = {
                ...state,
                [action.payload.id]: action.payload,
                BookingsIds: newBookingIds,
            }

            return newState;
        
        case VIEW_BOOKING:
            const allBookings = {};
            action.payload.forEach(booking => {
                allBookings[booking.id] = booking;
            })
            newState = {
                // do not copy original state when viewing bc allBookings will be the most updated all bookings, otherwise when switching user, the previous logged-in user's  state will not be cleared ( user logout will clear session state, but not other state)
                // ...state, 
                ...allBookings,
                BookingsIds: sortList(action.payload),
            }
            return newState;

        default:
            return state;
    }
};

export default bookingsReducer;