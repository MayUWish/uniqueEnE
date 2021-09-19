'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Reviews', [
      {
        listingId: 1,
        userId: 2,
        review: `Great place to get away! The town has some good places to eat and explore. It’s a good mix of camping and living luxury still with this stay!`,
        rating: 5
      
    },
      {
        listingId: 1,
        userId: 3,
        review: `Nature at its finest! I recommend that everyone should experience this amazing property. The set up has everything you need for glamping in the wilderness. There is a magical family of squirrels that live in the trees right above the dome. They were so enjoyable and such entertainment! I will be back again to experience this unique property!`,
        rating: 4

      },

      {
        listingId: 1,
        userId: 4,
        review: `Perfect for a romantic getaway!!! It’s our anniversary and we had a lot of beautiful memories created there- having a sip while watching sunset inside the dome… our baby girl loves it too!!! The bathroom and toilet are both super clean. And the host is awesome at communicating.
Only thing you need is a bug repellent and you are good to go`,
        rating: 5

      },

      {
        listingId: 2,
        userId: 8,
        review: `I cannot express how amazing this stay was! My daughters and I felt incredibly safe and the communication with the host was beyond timely. I recommend this stay to literally everyone!`,
        rating: 4

      },

      {
        listingId: 3,
        userId: 6,
        review: `Wonderful stay! I couldn’t have asked for better last minute booking. The hosts were fantastic and easy to reach. Location and dome were over the top! I cannot wait to book again in the near future. Thanks for the memories!`,
        rating: 5

      },

      {
        listingId: 3,
        userId: 9,
        review: `The hosts were very on top of communication and the space was spotless!`,
        rating: 4

      },

      {
        listingId: 4,
        userId: 7,
        review: `WOW! This place is truly special. I chose this yurt to propose to my girlfriend and it couldn’t have been a more magical experience. Hosts were so helpful in tips and advice for the weekend around Idyllwild… there was no stone left unturned in our exploration of restaurants, shops, trails, and more. Highly, highly recommend to anyone who is interested.`,
        rating: 5

      },

      {
        listingId: 4,
        userId: 4,
        review: `This place is absolutely wonderful. Although we were hoping for a little river flow but because of the drought it was too dry ): but the experience was still great! Marisa and Daane were accommodating, they have their own organic products for us to use such as sanitizers and universal soap, and other products for the skin and hair which I admired so much! The decorations inside the yurt was on point, and so comfy and cozy. We were nervous to enter at first but felt absolutely comfortable as soon as we settled in. We would love to come back for the winter time to check out the snow! Also, at night you can see a bunch of stars, and when the sun sets, you can hear nothing but nature which is always amazing.`,
        rating: 4

      },

      {
        listingId: 6,
        userId: 1,
        review: `This place was absolutely amazing and beautiful.. I came here for my anniversary and it was everything we imagined it would be. It gets chili at night of course but the fire helped with that a lot. One thing I would say is to make sure you bring a couple dvds or a device that can hook up through a HDMI if you wanted to watch a movie before bed. We forgot ours but we ended up renting a couple movies from a Redbox that was in town. Very cozy and wanted to stay longer. They had a small griddle outside and grill with propane connected so it was easy to cook or to even grab food in town. Can’t wait till I come back.`,
        rating: 5

      },

      {
        listingId: 6,
        userId: 6,
        review: `Great location, stunning views and a cute little airstream, perfect for two.
Deano was a great host, always available and with a lot of love for details. We had a great weekend! Thank you!!`,
        rating: 3

      },

      {
        listingId: 6,
        userId: 5,
        review: `I almost don't want to say how fantastic my stay was, because this is one of those gems you just want to keep to yourself. If you want a quiet getaway in an outstanding location this is it. I (plus my dog) wanted somewhere where I could take a break, get some reading and hiking done, and this more than met my expectations. And the views...absolutely breathtaking. We had a great host and we will definitely be back`,
        rating: 4

      },

      {
        listingId: 6,
        userId: 7,
        review: `Had the most magical stay here. The airstream is thoughtfully designed and well equipped, and the view is absolutely breathtaking. It was the perfect place to unplug and retreat in nature, while still having access to creature comforts when needed. Deano is a true super host. I cannot recommend this listing highly enough.`,
        rating: 5

      },

      {
        listingId: 6,
        userId: 9,
        review: `GREAT!!`,
        rating: 4

      },

      {
        listingId: 7,
        userId: 8,
        review: `What a magical space. Rejuvenating, playful, peaceful, and comfortable!!`,
        rating: 4

      },

      {
        listingId: 8,
        userId: 2,
        review: `Great stay here! Explored Joshua Tree and the towns nearby during the day, and spent 1 night here. Bring food and water and have a cool experience!`,
        rating: 4

      },

      {
        listingId: 10,
        userId: 1,
        review: `Great vibes, great views, beautiful joshua trees right in front. Close to good food, close to the national park. everything as described. Highly recommended if you're visiting Joshua Tree NP.`,
        rating: 5

      },

      {
        listingId: 10,
        userId: 5,
        review: `I broke my leg on our trip so I did not get to enjoy the full experience here but this place was absolutely beautiful. If you enjoy slight luxury in the middle of nature, you’ll love it even more. Definitely recommend`,
        rating: 4

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

    return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });

  }
};
