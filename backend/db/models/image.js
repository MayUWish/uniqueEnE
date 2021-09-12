'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listingId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here

    //  image vs listing
    Image.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };
  return Image;
};