'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingAmenity = sequelize.define('ListingAmenity', {
    listingId: DataTypes.INTEGER,
    amenityId: DataTypes.INTEGER
  }, {});
  ListingAmenity.associate = function(models) {
    // associations can be defined here

    //ListingAmenity vs Listing
    ListingAmenity.belongsTo(models.Listing, {
      foreignKey: 'listingId',
      sourceKey: models.Listing.id
    });

    // ListingAmenity vs Amenity

    ListingAmenity.belongsTo(models.Amenity, {
      foreignKey: 'amenityId',
      sourceKey: models.Amenity.id
    });
    
  };
  return ListingAmenity;
};