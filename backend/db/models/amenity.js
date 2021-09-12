'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: {
      type:DataTypes.STRING,
      validate: {
        isIn: [['Wifi',
                'TV',

                'Air conditioning',
                'Heating',

                'Cooking basics',

                'Free parking on premises',

                'Essentials',

                'washer',
                'dryer',
                'Smoke Alarm',
                'Carbon monoxide alarm'             
          ]],
      }
    },
    iconUrl: {
      type:DataTypes.STRING,
    }
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here

    //amenity vs listing through listingamenity
    const columnMapping = {
      through: 'ListingAmenity',
      otherKey: 'listingId',
      foreignKey: 'amenityId',
      // as: 'amenityToListing',
    }
    Amenity.belongsToMany(models.Listing, columnMapping);

  };
  return Amenity;
};