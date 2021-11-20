'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */

    return queryInterface.bulkInsert('ListingAmenities', [
      {
        listingId: 1,
        amenityId: 1
    },
      {
        listingId: 1,
        amenityId: 2
      },
      {
        listingId: 1,
        amenityId: 3
      },
      {
        listingId: 1,
        amenityId: 4
      },
      {
        listingId: 1,
        amenityId: 5
      },
      {
        listingId: 1,
        amenityId: 6
      },
      {
        listingId: 1,
        amenityId: 7
      },
      {
        listingId: 1,
        amenityId: 8
      },
      {
        listingId: 1,
        amenityId: 9
      },
      {
        listingId: 1,
        amenityId: 10
      },
      {
        listingId: 1,
        amenityId: 11
      },


      {
        listingId: 2,
        amenityId: 1
      },
      {
        listingId: 2,
        amenityId: 2
      },
      {
        listingId: 2,
        amenityId: 3
      },
      {
        listingId: 2,
        amenityId: 4
      },
      {
        listingId: 2,
        amenityId: 5
      },
      {
        listingId: 2,
        amenityId: 6
      },
      {
        listingId: 2,
        amenityId: 7
      },
      {
        listingId: 2,
        amenityId: 8
      },
      {
        listingId: 2,
        amenityId: 9
      },
    

      {
        listingId: 3,
        amenityId: 1
      },
      {
        listingId: 3,
        amenityId: 2
      },
      {
        listingId: 3,
        amenityId: 3
      },
      {
        listingId: 3,
        amenityId: 4
      },
      {
        listingId: 3,
        amenityId: 5
      },
      {
        listingId: 3,
        amenityId: 6
      },
      {
        listingId: 3,
        amenityId: 7
      },
      {
        listingId: 3,
        amenityId: 8
      },
    
      {
        listingId: 3,
        amenityId: 10
      },
      

    
      {
        listingId: 4,
        amenityId: 2
      },
      {
        listingId: 4,
        amenityId: 3
      },
      {
        listingId: 4,
        amenityId: 4
      },
      {
        listingId: 4,
        amenityId: 5
      },
      {
        listingId: 4,
        amenityId: 6
      },
      {
        listingId: 4,
        amenityId: 7
      },
      {
        listingId: 4,
        amenityId: 8
      },
      {
        listingId: 4,
        amenityId: 9
      },
      {
        listingId: 4,
        amenityId: 10
      },
      {
        listingId: 4,
        amenityId: 11
      },


     
      {
        listingId: 5,
        amenityId: 3
      },
      {
        listingId: 5,
        amenityId: 4
      },
      {
        listingId: 5,
        amenityId: 5
      },
      {
        listingId: 5,
        amenityId: 6
      },
      {
        listingId: 5,
        amenityId: 7
      },
      {
        listingId: 5,
        amenityId: 8
      },



      {
        listingId: 6,
        amenityId: 1
      },
      {
        listingId: 6,
        amenityId: 2
      },
      {
        listingId: 6,
        amenityId: 3
      },
      {
        listingId: 6,
        amenityId: 4
      },
      {
        listingId: 6,
        amenityId: 5
      },
      {
        listingId: 6,
        amenityId: 6
      },
      {
        listingId: 6,
        amenityId: 7
      },
      {
        listingId: 6,
        amenityId: 8
      },
      {
        listingId: 6,
        amenityId: 9
      },
      {
        listingId: 6,
        amenityId: 10
      },
      {
        listingId: 6,
        amenityId: 11
      },


      
      {
        listingId: 7,
        amenityId: 3
      },
      {
        listingId: 7,
        amenityId: 4
      },
      {
        listingId: 7,
        amenityId: 5
      },
      {
        listingId: 7,
        amenityId: 6
      },
      {
        listingId: 7,
        amenityId: 7
      },
      {
        listingId: 7,
        amenityId: 8
      },
      {
        listingId: 7,
        amenityId: 9
      },
      


      {
        listingId: 8,
        amenityId: 1
      },
      {
        listingId: 8,
        amenityId: 2
      },
      {
        listingId: 8,
        amenityId: 3
      },
      {
        listingId: 8,
        amenityId: 4
      },
      {
        listingId: 8,
        amenityId: 5
      },
      


      
      {
        listingId: 9,
        amenityId: 10
      },
      {
        listingId: 9,
        amenityId: 11
      },


      {
        listingId: 10,
        amenityId: 1
      },
      {
        listingId: 10,
        amenityId: 2
      },
      {
        listingId: 10,
        amenityId: 3
      },
      {
        listingId: 10,
        amenityId: 4
      },
      {
        listingId: 10,
        amenityId: 5
      },
      {
        listingId: 10,
        amenityId: 6
      },
      
      {
        listingId: 10,
        amenityId: 9
      },
      {
        listingId: 10,
        amenityId: 10
      },
      {
        listingId: 10,
        amenityId: 11
      },

      {
        listingId: 11,
        amenityId: 1
      },
      {
        listingId: 11,
        amenityId: 2
      },
      {
        listingId: 11,
        amenityId: 3
      },
      {
        listingId: 11,
        amenityId: 4
      },
      {
        listingId: 11,
        amenityId: 5
      },
      {
        listingId: 11,
        amenityId: 6
      },

      {
        listingId: 11,
        amenityId: 9
      },
      {
        listingId: 11,
        amenityId: 10
      },
      {
        listingId: 11,
        amenityId: 11
      },

      {
        listingId: 12,
        amenityId: 1
      },
      {
        listingId: 12,
        amenityId: 2
      },
      {
        listingId: 12,
        amenityId: 3
      },
      {
        listingId: 12,
        amenityId: 4
      },
      {
        listingId: 12,
        amenityId: 5
      },
      {
        listingId: 12,
        amenityId: 6
      },

      {
        listingId: 12,
        amenityId: 9
      },
      {
        listingId: 12,
        amenityId: 10
      },
      {
        listingId: 12,
        amenityId: 11
      },

      {
        listingId: 13,
        amenityId: 1
      },
      {
        listingId: 13,
        amenityId: 2
      },
      {
        listingId: 13,
        amenityId: 3
      },
      {
        listingId: 13,
        amenityId: 4
      },
      {
        listingId: 13,
        amenityId: 5
      },
      {
        listingId: 13,
        amenityId: 6
      },

      {
        listingId: 13,
        amenityId: 9
      },
      {
        listingId: 13,
        amenityId: 10
      },
      {
        listingId: 13,
        amenityId: 11
      },

      {
        listingId: 14,
        amenityId: 1
      },
      {
        listingId: 14,
        amenityId: 2
      },
      {
        listingId: 14,
        amenityId: 3
      },
      {
        listingId: 14,
        amenityId: 4
      },
      {
        listingId: 14,
        amenityId: 5
      },
      {
        listingId: 14,
        amenityId: 6
      },

      {
        listingId: 14,
        amenityId: 9
      },
      {
        listingId: 14,
        amenityId: 10
      },
      {
        listingId: 14,
        amenityId: 11
      },

      {
        listingId: 15,
        amenityId: 1
      },
      {
        listingId: 15,
        amenityId: 2
      },
      {
        listingId: 15,
        amenityId: 3
      },
      {
        listingId: 15,
        amenityId: 4
      },
      {
        listingId: 15,
        amenityId: 5
      },
      {
        listingId: 15,
        amenityId: 6
      },

      {
        listingId: 15,
        amenityId: 9
      },
      {
        listingId: 15,
        amenityId: 10
      },
      {
        listingId: 15,
        amenityId: 11
      },


      {
        listingId: 16,
        amenityId: 1
      },
      {
        listingId: 16,
        amenityId: 2
      },
      {
        listingId: 16,
        amenityId: 3
      },
      {
        listingId: 16,
        amenityId: 4
      },
      {
        listingId: 16,
        amenityId: 5
      },
      
  
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('ListingAmenities', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
