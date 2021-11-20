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

      {
        listingId: 11,
        userId: 7,
        review: `Great place to stay! The pictures do not do the house justice, it is far more beautiful in person. The hosts are also great and available as needed!`,
        rating: 4

      },

      {
        listingId: 11,
        userId: 8,
        review: `The treehouse is absolutely breathtaking and beautiful! I fell in love with our little home for the weekend from the minute we set foot inside. It definitely has that cozy and relaxing atmosphere if you're looking to get away from the stress of everyday life. The space was perfect for two people and it had all the necessary amenities for our short stay. The self check-in process was also super convenient, especially if you're unsure on the exact time you'll be arriving. I am already dreaming about coming back!`,
        rating: 5

      },

      {
        listingId: 12,
        userId: 5,
        review: `What a great, one of a kind experience. This is definitely a place to relax and unwind. The breakfasts served each morning were delicious, and the host/staff were very accommodating and friendly. I'll definitely come back during the summer to experience the organic garden in full bloom.`,
        rating: 4

      },

      {
        listingId: 12,
        userId: 6,
        review: `Flapjack Ranch was a great experience. Staying in a treehouse was awesome and the hospitality was exceptional. Wake up in the morning with hot beverages you hoist up to your deck in the trees using a pulley. And then go down to the main house for a delicious gourmet breakfast.`,
        rating: 5

      },

      {
        listingId: 13,
        userId: 3,
        review: `Everything about this place was perfect. We loved the mini hike, the coziness of the treehouse, and the privacy/peacefulness of the area. We’d rebook in a heartbeat!`,
        rating: 4

      },

      {
        listingId: 13,
        userId: 2,
        review: `This treehouse is beautiful and surrounded by redwood pine trees and in a perfectly serene setting. The house was properly equipped with all that we could need . We had an amazing time here. The hosts Mary Jane and Martin were wonderful, friendly and quick respond to all queries. Unfortunately the power went off on the 1st day , but it added to our unique experience in a great way. We would love to come back and stay here again. Thanks once again to the hosts`,
        rating: 5

      },

      {
        listingId: 14,
        userId: 5,
        review: `we had a great time visiting with our two young kids. I love the piano and all of the fragile stuff was easily movable. it was definitely a twisty road to get there, but (Hidden by Airbnb) maps got us there easily. we visited the very close by wild Iris playground which was fantastic and took a hike in the Henry Cowell redwood State Park. beds were comfortable and the views were beautiful! the kitchen had all the cooking things we needed.`,
        rating: 4

      },

      {
        listingId: 14,
        userId: 6,
        review: `This is such a beautiful house! Wonderfully decorated and very spacious! It’s in the woods so it’s a light curvy road adventure if you aren’t used to that. Really pretty surroundings and beautiful trees everywhere! The house is by itself (with attached separate unit) and it’s very quiet and nice. We visited the redwood park close by and we highly recommend it! Great hosts and great house!!`,
        rating: 4

      },

      {
        listingId: 15,
        userId: 5,
        review: `Beautiful location!! We spent a day just watching the beautiful day unfold on the dessert. Around 4pm the quails come, making adorable little noises and they roost up in a tree for the night.`,
        rating: 5

      },

      {
        listingId: 15,
        userId: 6,
        review: `The AirBnB was well located - close to Joshua Tree National Park and restaurants. The home was as advertised, communication was clear and check in/check out were easy. We loved the hammocks, fire pit and large windows. We also appreciated recommendations on grocery stores, restaurants, and things to do in the area. Overall, a great place to stay!`,
        rating: 5

      },

      {
        listingId: 16,
        userId: 7,
        review: `Would recommend the place was very clean and. We had an amazing time`,
        rating: 5

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
