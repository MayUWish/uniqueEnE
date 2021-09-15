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
  
    Booking.belongsTo(models.Listing, {
      foreignKey: 'listingId',
      sourceKey: models.Listing.id
    });
    // Booking.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Booking;
};