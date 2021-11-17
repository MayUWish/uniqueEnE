UniqueEnE, a fullstack clone of AirBnB, is an application that allows users to explore, reserve and review unique stays as a traveller, and manage their listings and check reservations of their listings as a host.

Live Link: [UniqueEnE](https://uniqueene.herokuapp.com/)

# Features
User Authentication
Users are able to signup and login through a modal on any page with a navigation bar. The users credentials is then authenticated and would be displayed with the error messages of any invalid inputs. A demo user was implemented to bypass signing up.

# Listings
Logged-in users are able to create and update listings, and delete listings that do not have any incoming or current reservations , as well as to add and delete images and amenities of each listing. 

#  Bookings
Logged-in users can view via 'Your Reservations' at navigation bar, and make reservations on specific listing page, and update and cancel their reservations that have not started yet, 

#  Reviews
Logged-in users can create, edit and delete reviews on specific listing page.

# Technologies 
UniqueEnE is built with Express and PostgreSQL on the backend, and JavaScript, React and Redux on the frontend. Styling is implemented with vanilla CSS. 

##### Custom backend logic and validation to prevent booking conflict, ensure user authentication and spot's capacity 
```jsx
router.post(
    '/',
    validateBooking,
    requireAuth,
    asyncHandler(async (req, res,next) => {
        let { startDate, endDate, userId, listingId, numGuests } = req.body;
        // req data as "2021-09-15", turn it into date, to save at database(No hour/minute/second/ms) and to compare date for validation;
        startDate = toDate(startDate);
        endDate = toDate(endDate);
        
        const user = await User.findByPk(userId);
        const listing = await Listing.findByPk(listingId);

        // to check if booking date has conflict with existing bookings
        const existingBookings = await Booking.findAll({
            where:{listingId},
            order: [["startDate"]],       
        });
        
        // a = new Date(2021,10,9),b = new Date(2021,10,9); a === b is false, thus using a-b ===0 to check if same day;   
        let isDateConflicted = existingBookings.some(booking => !((booking.startDate - endDate >= 0) || (booking.endDate - startDate <= 0)))

        //array of array [startDate,endDate], only return conflicted date
        // filter out undefined(if it does not meet if statement, it will return undefined(map) )
        const today = (new Date()).setHours(0, 0, 0, 0)
        const existingBookingDates = (existingBookings.map(booking=>{            
            if (!((booking.startDate - endDate >= 0) || (booking.endDate - startDate <= 0))){
                return [booking.startDate, booking.endDate]
            } 
        })).filter(confilctedEl => confilctedEl);
                      
        if (+req.user.id !== +userId){
            // logged-in userId is different from booking userId, which means book for others
            const err = Error('Bad request.');
            err.errors = [`You cannot book for other users.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if(!listing){
            // no such listing
            const err = Error('Bad request.');
            err.errors = [`The listing does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (!user ) {
            // no such user
            const err = Error('Bad request.');
            err.errors = [`The user/account does not exist.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if(+user.id===+listing.userId){
            // userId cannot be host's userId, meaning cannot book their own listing
            const err = Error('Bad request.');
            err.errors = [`Please do not book your own listing.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else if (endDate - startDate <= 0 ){
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

        } else if (!Number.isInteger(+numGuests) || numGuests < 1 || numGuests > listing.guestNum){
            //  validate number of guests
            const err = Error('Bad request.');
            err.errors = [`Number of guests must be an integer, from 1 to its max capacity, ${listing.guestNum}.`];
            err.status = 400;
            err.title = 'Bad request.';
            next(err);

        } else{
            // pass validation, then save to database
            const booking = await Booking.create({ startDate, endDate, userId, listingId, numGuests });
            return res.json({
                booking,
            });

        }       
    }),
);
```
