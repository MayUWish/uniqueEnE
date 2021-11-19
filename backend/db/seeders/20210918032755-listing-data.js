'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Listings', [
      {
        userId: 9,
        address: '777 health street',
        city: 'Idyllwild-Pine Cove',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Moon Pine Glamping - Geodesic Dome in the forest',
        description: `Join us in the forest for a beautiful, unique experience. Our 16-foot geodesic dome was built on a secluded portion of the property. This is a studio with a queen bed and a sofa bed that folds out to a full size bed. Please note this is truly a glamping experience but we have done our best to offer some amenities and make it as comfortable as possible.

        This is perfect for a couple or small family looking for a luxury camping experience.We are a short 5-minute drive to downtown Idyllwild.There are hiking trails within walking distance from the property.`,
        price: 185.00,
        guestNum: 4,
        bedroomNum: 2,
        bathroomNum: 1,
        twinBedNum: 1,
        queenBedNum: 2,
        kingBedNum: 0,
        sofaBedNum: 1,
        enhancedClean: true,
        selfCheckin: true,
     },

      {
        userId: 9,
        address: '999 happy street',
        city: 'Twentynine Palms',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Stargazing oasis bubble with pool, hot tub & A/C',
        description:`Located just a short 17 minute drive from the center of Joshua Tree, located on 5 acres and completely enclosed in a gated oasis for you to enjoy. This bubble sits facing Joshua Tree National park and Indian Cove, which gives you outstanding unobstructed views . Come and sleep in comfort under the stars with a queen size bed completely enclosed in your starry bubble oasis. Of a day enjoy the swimming pool and as the night falls relax in the hot tub and enjoy a glass of wine.

        When you settle in for the night, plug your phone into the projector and watch a movie  from the comfort of bed.

        A truly once and a lifetime stay.`,
        price: 120.00,
        guestNum: 2,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 0,
        enhancedClean: true,
        selfCheckin: true,
      },

      {
        userId: 1,
        address: '666 pretty street',
        city: 'Joshua Tree',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Area 55 Futuro House',
        description: `An original Futuro House restored for the ultimate Glamping experience! There are Only 85 in the world, 19 in the USA, and only 1 available you can stay a night in and that’s AREA 55 Glamping tour experience in Joshua Tree CA! Book us and get the experience!
        
        This is a completely off-grid glamping experience. Before booking Please be sure to view our “Other things to note” The idea is to disconnect, kick back on the queen size daybed and enjoy, but still have those perks of having some connected amenities when needed. You can enjoy our many fun board games, and with our solar power for small electronic devices to keep your devices charged. You can enjoy Our in-house Bluetooth sound system and coffee maker. Fresh water for hot outdoor showers and private restrooms, with Outdoor kitchen area with propane grill island to make your favorite food and eat by the fire pit under the stars!`,
        price: 200.00,
        guestNum: 4,
        bedroomNum: 2,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 1,
        sofaBedNum: 1,
        enhancedClean: true,
        selfCheckin: true,
      },

      {
        userId: 1,
        address: '222 dream street',
        city: 'Idyllwild-Pine Cove',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Creekside Eco-Luxe "Be Well" Yurt',
        description: `Nestled peacefully amongst ancient pine trees, the Be Well Yurt is a sanctum in the wild, beautifully situated alongside historic Strawberry Creek. Gaze up at the stars through the clear dome top, as you're lulled to sleep by sounds of the seasonal bubbling brook below. Enjoy slow mornings on the deck, with views of towering pine & cedar trees. A sanctuary with every comfort you can imagine - a stay at the Be Well Yurt is an unforgettable experience.

        Peace & rejuvenation is what you will find at the Wildland "Be Well Yurt". Located along Strawberry Creek, the land offers access to nearby hiking trails, with a spectacular view of Lily Rock just down the street. Inside you will find soothing neutral tones & a commitment to eco-friendly, organic, & upcycled materials. The "Be Well Yurt" is a haven for deep relaxation with forest views.`,
        price: 150.00,
        guestNum: 2,
        bedroomNum: 0,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 0,
        enhancedClean: true,
        selfCheckin: false,
      },
      
      {
        userId: 9,
        address: '111 preety street',
        city: 'Sebastopol',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Modern Yurt with Vineyard Views',
        description: `Welcome to The Rising Moon Yurt!

        Yurt living encompasses a calming, light-filled space, inspiring and guiding those who are seeking a different kind of trip... the kind of living that encourages a deeper engagement with one’s surroundings.


        The Rising Moon Yurt is perched on a southern facing hillside with sweeping views of redwood trees and vineyards. Located at the top of our property, The Rising Moon Yurt exudes the feeling of solitude. Furnished with all of the modern conveniences, and a California Modern vibe, we set out to create a unique yurt experience which has every single comfort of a boutique hotel; from making locally roasted organic coffee in the morning, choosing the perfect record to put on as the sun sets, practicing some morning yoga on the deck, or by soaking in the outdoor cast iron tub surrounded by a starry night sky. Designed with country living in mind, our hope is that you enjoy being surrounded by nature!`,
        price: 210.00,
        guestNum: 2,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 0,
        enhancedClean: true,
        selfCheckin: false,
      },
      
      {
        userId: 2,
        address: '555 lake street',
        city: 'Half moon bay',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Coastal Airstream Dream (Sunrise) - new listing',
        description: `Private location on 9 acres on the coastal cliffs just south of Half Moon Bay. Massive views of the Pacific. Stunning views and sunsets.

      Fully loaded 2021 Airstream with a queen bed, shower and toilet, hot water, stove, A/C, refrig, sink, kitchen table (also converts to bed), propane fire pit, dish ware, bbq, TV and WiFi.

      One other guest Airstream on the property that is discreetly located well away. You can checkout/book the other Airstream here:`,
        price: 300.00,
        guestNum: 2,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 1,
        enhancedClean: true,
        selfCheckin: false,
      },


      {
        userId: 3,
        address: '123 forest street',
        city: 'Aptos',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'The Mushroom Dome Retreat & LAND of Paradise Suite',
        description: `As we are no longer allowed by Santa Cruz county to rent the Mushroom Dome Cabin, we are now listing the LAND of Paradise Suite, a room in our unique home. (LAND: Love And Nature Divine) Make a reservation for the Suite and you will have unlimited access to the Mushroom Dome Retreat.

        We have 10 acres next to land without fences so you will get to enjoy nature: just hang out on the deck, take a hike in the woods, watch the hummingbirds on our deck, go to the beach or gaze at the stars - as long as the moon isn't full. ; - ) During the summer, if there isn't any nightly fog, we can see the Milky Way here.

        To check our availability, click on the "Request to Book" link. If you want to stay here on a weekend, you will usually need to make your reservation request about 5 months in advance.
        We have another listing: the Hummingbird Haven. It usually has more availability.
        (Please read all of this description before making a reservation request: we want our guests to be comfortable with our provisions.)

        The cozy and clean semi-rustic retreat space has a loft under a geodesic dome (the "mushroom cap"). In the loft is a Queen-sized super popular Casper Mattress which allows for very comfortable meditation and/or sleeping and just hanging out. We provide clean sheets and pillow cases. Plenty of blankets are also provided.`,
        price: 160.00,
        guestNum: 3,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 1,
        enhancedClean: true,
        selfCheckin: false,
      },

      {
        userId: 5,
        address: '567 forest street',
        city: 'Joshua Tree',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'Purty Yurty and Mini Me',
        description: `
       Need to get away and relax in nature? Come and stay here, if available, you can book right up until midnight on the day of check in.

      If you are looking to rage and party in the desert this is NOT the right place.

      However, if you need to take a break from the stresses of daily life, watch stunning sunrises and sunsets, stargaze and enjoy some peace and quiet. Situated on 5 acres of land, Purty Yurty and Mini Me have got you covered.

      We only accept bookings with verified government ID, so please add that if you haven't already and you will be able to book instantly. Once booked, read your confirmation email from Airbnb or look at the itinerary within the Airbnb app, it will include the house manual and self check in information, you can head to the yurt(s) and check in whenever you want, it is a self check in space.

      Call myself or the manger if you have any questions or need assistance.`,
        price: 165.00,
        guestNum: 4,
        bedroomNum: 2,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 2,
        kingBedNum: 0,
        sofaBedNum: 0,
        enhancedClean: true,
        selfCheckin: true,
      },


      {
        userId: 6,
        address: '789 forest street',
        city: 'Vista',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: '22 Tipi at Wishing Well mini Ranch',
        description: `
       Wishing Well mini Ranch has 3 Airbnb spaces over 2+ acres w/ friendly farm animals! 1962 Airstream & Events at Wishing Well mini Ranch. On Airbnb Choose "unique stays" then "farm stays"

        Tipi has bathroom, hot/cold shower, propane fire pit, fridge, mini kitchen, Wifi, 2 twin beds, queen bed w/comfy bedding.During rainy season may need to cancel heavy rain/storm
        
        Guests are welcome to relax and enjoy all outdoor areas. Multiple relaxing landscaped areas to enjoy on our ranch with Nigerian dwarf milking goats, miniature horses, llama, and chickens. There is also a Spa available.
        
        You are welcome to access all outdoor areas around the property. Guests may access the Spa, orange trees, grass, and sitting areas by walking up the lit easement to the back yard of the main house . There is also a washing machine and dryer available just inside the garage side door.`,
        price: 170.00,
        guestNum: 4,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 1,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 0,
        enhancedClean: true,
        selfCheckin: false,
      },

      {
        userId: 9,
        address: '789 forest street',
        city: 'Joshua Tree',
        state: 'California',
        country: 'US',
        latitude: '90',
        longitude: '180',
        title: 'The Little Dipper: Off-Grid Tiny Home by Moon Camp',
        description: `
       NO DISCOUNTS AT THIS TIME. THANKS FOR YOUR UNDERSTANDING!

Relax and recharge at this unique sanctuary where outdoor living and everyday comfort co-exist in harmony. This tiny home is located just minutes from Joshua Tree National Park and highlights compact living without compromise.

Enjoy the stars at night in this idyllic vacation spot surrounded by stunning desert views. A modern design with contemporary amenities makes this desert retreat the perfect way to experience tiny home living.
The space
Nestled minutes from the entrance of Joshua Tree National Park sits this beautifully designed tiny home. Redefining compact living, our modern sanctuary features a bright living area equipped with a flat-screen TV equipped with Apple TV (we unfortunately do not have cable) and a fold-down couch, that can sleep 1. The living space flows seamlessly into a corridor with a built-in table for two on one wall, and ample storage on the other. The storage unit doubles as the stairs which lead you up to a wide, comfortable loft featuring a Queen size palette bed and breathtaking views of the surrounding environment.`,
        price: 150.00,
        guestNum: 3,
        bedroomNum: 1,
        bathroomNum: 1,
        twinBedNum: 0,
        queenBedNum: 1,
        kingBedNum: 0,
        sofaBedNum: 1,
        enhancedClean: true,
        selfCheckin: true,
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

    return queryInterface.bulkDelete('Listings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
