'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    numGuests: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
     //Booking vs Listing
    Booking.belongsTo(models.Listing, {
      foreignKey: 'listingId',
      sourceKey: models.Listing.id
    });

    //Booking vs User
    Booking.belongsTo(models.User, {
      foreignKey: 'userId',
      sourceKey: models.User.id
    });
  };
  return Booking;
};