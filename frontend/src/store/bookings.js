import { csrfFetch } from './csrf';


const CREATE_BOOKING = 'booking/createBooking';
const VIEW_BOOKING = 'booking/viewBooking';
const DELETE_BOOKING = 'booking/deleteBooking';

const EDIT_BOOKING = 'booking/editBooking';

///////////////////////////Action:



// create new booking
const createBookingAction = (booking) => {
    return {
        type: CREATE_BOOKING,
        payload: booking,
    };
};

// view all bookings that current loggin user reserved
const viewBookingAction = (currentNPastBookings) => {
    return {
        type: VIEW_BOOKING,
        payload: currentNPastBookings,
    };
};

// delete booking as traveller 
const deleteBookingAction = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        payload: bookingId,
    };
};


// edit  booking
const editBookingAction = (booking) => {
    return {
        type: EDIT_BOOKING,
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

// view bookings that current loggin user reserved
export const viewBookingThunk = (userId) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/${userId}`
    );
    const data = await response.json();
    dispatch(viewBookingAction({ incomingBookings: data.incomingBookings, pastBookings: data.pastBookings }));
    return response;
};

// delete booking as travellers 
export const deleteBookingThunk = (bookingId) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    dispatch(deleteBookingAction(data.bookingId));
    return response;
};

// edit booking
export const editBookingThunk = (booking) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/${booking.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...booking }),
    });
    const data = await response.json();
    dispatch(editBookingAction(data.booking));
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
        // create booking (No need to update state for current functionality,but keep it here for potential future use), as when go to reservation page, will render all bookings
        case CREATE_BOOKING:
            let newIncomingBookingIds=[];
            state.incomingBookingsIds ? newIncomingBookingIds = [...state.incomingBookingsIds] : newIncomingBookingIds=[]
            newIncomingBookingIds.unshift(action.payload.id);

            let newincomingBookings = {};
            state.incomingBookings ? newincomingBookings = { ...state.incomingBookings } : newincomingBookings = {}
            newincomingBookings[action.payload.id] = action.payload;

            newState = {
                ...state,
                incomingBookings: newincomingBookings,
                incomingBookingsIds: newIncomingBookingIds,
            }

            return newState;
        
        case VIEW_BOOKING:
            const incomingBookings = {};
            const pastBookings = {};
            
            if(action.payload){

            action.payload.incomingBookings.length > 0 && action.payload.incomingBookings.forEach(booking => {
                incomingBookings[booking.id] = booking;
            })

            
            action.payload.pastBookings.length > 0 && action.payload.pastBookings.forEach(booking => {
                pastBookings[booking.id] = booking;
            })
            newState = {
                // do not copy original state when viewing bc allBookings will be the most updated all bookings, otherwise when switching user, the previous logged-in user's  state will not be cleared ( user logout will clear session state, but not other state)
                // ...state, 
                incomingBookings: incomingBookings,
                pastBookings: pastBookings,
                incomingBookingsIds: sortList(action.payload.incomingBookings),
                pastBookingsIds: sortList(action.payload.pastBookings),
            }
            return newState;
            }
            return initialState;
        
        case DELETE_BOOKING:
        
            newState = {
                ...state,
            }
            delete newState.incomingBookings[action.payload]
            newState.incomingBookingsIds = newState.incomingBookingsIds.filter(id => +id !== +action.payload)
            return newState;

        case EDIT_BOOKING:
    
            newState = {...state};

            newState.incomingBookings[action.payload.id] = action.payload;

            return newState;

        default:
            return state;
    }
};

export default bookingsReducer;