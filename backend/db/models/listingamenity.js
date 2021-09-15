'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingAmenity = sequelize.define('ListingAmenity', {
    listingId: DataTypes.INTEGER,
    amenityId: DataTypes.INTEGER
  }, {});
  ListingAmenity.associate = function(models) {
    // associations can be defined here
    
  };
  return ListingAmenity;
};