'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    guestNum: DataTypes.INTEGER,
    bedroomNum: DataTypes.INTEGER,
    bathroomNum: DataTypes.INTEGER,
    twinBedNum: DataTypes.INTEGER,
    queenBedNum: DataTypes.INTEGER,
    kingBedNum: DataTypes.INTEGER,
    sofaBedNum: DataTypes.INTEGER,
    enhancedClean: DataTypes.BOOLEAN,
    selfCheckin: DataTypes.BOOLEAN
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    
    // listing vs user
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
   
    // listing vs user through booking;No cascading delete.
    const bookingMapping = {
      through: 'Booking',
      otherKey: 'userId',
      foreignKey: 'listingId',
      // as: 'listingBookedByUser'
    }
    Listing.belongsToMany(models.User, bookingMapping);

  

    // listing vs image
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true });

    //listing hasmany amenities with cascade deleting, to keep db clean,  but no cascade deleting on join table;
    Listing.hasMany(models.ListingAmenity, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true });

    // listing vs amenity through listingamenity
    const columnMapping = {
      through: 'ListingAmenity',
      otherKey: 'amenityId',
      foreignKey: 'listingId',
      // as: 'listingToAmenity',
    }
    Listing.belongsToMany(models.Amenity, columnMapping);

  };
  return Listing;
};