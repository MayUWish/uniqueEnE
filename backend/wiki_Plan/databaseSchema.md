
// Creating tables
Table Users {
  id int [pk, increment] 
  username varchar
  email varchar
  hashedPassword varbinary
  createdAt timestamp
  updatedAt timestamp

}

Table Listings {
  id int [pk, increment]
  
  userId int
  
  address varchar
  city varchar
  state varchar
  country varchar
  zipcode varchar
  latitude decimal
  longitude decimal
  
  title varchar
  description varchar
  price decimal
  
  guestNum int
  bedroomNum int
  bathroomNum int
  
  twinBedNum int
  queenBedNum int
  kingBedNum int
  sofaBedNum int
  
  enhancedClean boolean
  selfCheckin  boolean
  
  
  createdAt timestamp
  updatedAt timestamp

 }
 
 Table Amenities {
  id int [pk, increment] 
  name varchar
  iconUrl varchar
}


 Table ListingsAmentities {
  id int [pk, increment] 
  listingId int
  amenityId int
}


 Table Images {
  id int [pk, increment] 
  listingId int
  url varchar
  createdAt timestamp
  updatedAt timestamp
}

 Table Reviews {
  id int [pk, increment] 
  listingId int
  userId int
  review text
  rating int
  createdAt timestamp
  updatedAt timestamp
}



 Table Bookings {
  id int [pk, increment] 
  listingId int
  userId int
  startDate datetime
  endDate datetime
  createdAt timestamp
  updatedAt timestamp
}

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: Listings.userId > Users.id

Ref: Listings.id < ListingsAmentities.listingId
Ref: Amenities.id < ListingsAmentities.amenityId

Ref: Listings.id < Images.listingId

Ref: Users.id < Reviews.userId
Ref: Listings.id < Reviews.listingId

Ref: Users.id < Bookings.userId
Ref: Listings.id < Bookings.listingId