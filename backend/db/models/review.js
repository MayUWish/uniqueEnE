'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here

    //  reviews vs listing
    Review.belongsTo(models.Listing, { foreignKey: 'listingId' });
    //  reviews vs user
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};