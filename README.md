UniqueEnE, a fullstack clone of AirBnB, is an application that allows users to explore, reserve and review unique stays as a traveller, and manage their listings and check reservations of their listings as a host.

Live Link: [UniqueEnE](https://uniqueene.herokuapp.com/)

# UniqueEnE at a Glance

## User Authentication
Users are able to signup and login through a modal form on any page with a navigation bar. The users credentials is then authenticated and would be displayed with the error messages of any invalid inputs. A demo user was implemented to bypass signing up.

![Authentication](/react-app/src/images/readMe/authentication.gif)

## Listings
Logged-out and Logged-in users are able to explore all the listings and view the specific listing page.

![Explore Listings](/react-app/src/images/readMe/viewListings.gif) 

As a host, logged-in users are able to create and edit listings, and delete listings that do not have any incoming or current reservations, as well as to add and delete images and amenities of each listing. 

![Manage Listings](/react-app/src/images/readMe/manageListings.gif) 

## Bookings
As a traveller, logged-in users can view, update and cancel their reservations that have not started yet, via 'Your Reservations' at navigation bar, and make reservations on specific listing page.

![Bookings](/react-app/src/images/readMe/bookings.gif) 

## Reviews
Logged-in users can create, edit and delete reviews on specific listing page, only if the user has a reservation of the listing that has started, to prevent fake reviews.

![Reviews](/react-app/src/images/readMe/reviews.gif) 

# Technologies 
UniqueEnE is built with Express and PostgreSQL on the backend, and JavaScript, React and Redux on the frontend. Styling is implemented with vanilla CSS. 

##### Custom backend logic and validation to prevent booking conflict
```jsx
router.post(
    '/',
    validateBooking,
    requireAuth,
    asyncHandler(async (req, res,next) => {
        ......
        // to check if booking date has conflict with existing bookings
        const existingBookings = await Booking.findAll({
            where:{listingId},
            order: [["startDate"]],       
        });         
        let isDateConflicted = existingBookings.some(booking => !((booking.startDate - endDate >= 0) || (booking.endDate - startDate <= 0)))
        //array of array [startDate,endDate], only return conflicted date
        // filter out undefined(if it does not meet if statement, it will return undefined(map) )
        const today = (new Date()).setHours(0, 0, 0, 0)
        const existingBookingDates = (existingBookings.map(booking=>{            
            if (!((booking.startDate - endDate >= 0) || (booking.endDate - startDate <= 0))){
                return [booking.startDate, booking.endDate]
            } 
        })).filter(confilctedEl => confilctedEl);
                      
        ...... for other validations to ensure user authentication and spot's capacity

        else if (endDate - startDate <= 0 ){
            // check endDate is more than startDate
            const err = Error('Bad request.');
            err.errors = [`Check-in date should be be early than check-out date.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (startDate - today < 0 || endDate - today <= 0){
             // check endDate and startDate must be greated than today;
            const err = Error('Bad request.');
            err.errors = [`Booking dates should be today or in the future.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (isDateConflicted) {
            // to check if booking date has conflict with existing bookings
            const message = existingBookingDates.map(date => `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`)
            const err = Error('Bad request.');
            err.errors = [`Conflict with the following existing bookings.`, ...message];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } 
        ......
    }),
);
```

##### Frontend algorithm to dynamically display price breakdown per user's input for reservation
```jsx

//Return dates with Zero hour, minute, second, ms
const toDate = (yearMonthDay) => {
    const year = yearMonthDay.split('-')[0];
    const month = yearMonthDay.split('-')[1];
    const day = yearMonthDay.split('-')[2];
    const date = new Date(year, month - 1, day);
    return date;
}
    
//Return number of days, given 2 dates with Zero hour, minute, second, ms
const numberOfDays = (startDate, endDate)=>{
    return Math.round (+(endDate-startDate)/(24*60*60*1000),0);
}
    
{(startDate && endDate && toDate(endDate) > toDate(startDate)) && (
    <div style={{ textAlign: 'start',fontWeight:'bold' }}>
        Price Breakdown:

        <p style={{ marginLeft: '9%', fontWeight:'normal'}}>${currentListing?.price}/night *</p>
                        
        <p style={{ marginLeft: '10%', fontWeight: 'normal' }}>{numberOfDays(toDate(startDate), toDate(endDate))} nights</p>
                  
        <p style={{ marginLeft: '2%'}}>Total: ${(+currentListing?.price * (+numberOfDays(toDate(startDate), toDate(endDate)))).toLocaleString()}</p>
    </div>
    )}
```

# Future Implementations
- Google Map API
- Search by location, number of guests, check-in and check-out dates
