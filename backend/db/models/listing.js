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

    // listing vs image
    Listing.hasMany(models.Image, { foreignKey: 'listingId' });

  };
  return Listing;
};