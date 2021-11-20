'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Images', [
      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/b2e9de7f-da39-401f-911d-1a294025dbc7.jpg?im_w=1200' 
    },
      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/265e348f-8e11-47fe-bfc1-66aa9eb0cbdb.jpg?im_w=720'
      },

      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/8ba620e7-30d7-404d-8ef4-466f54c9e8c6.jpg?im_w=720'
      },

      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/2d7cd096-48ac-493b-b181-480afc6b11b0.jpg?im_w=1200'
      },

      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/7ecad3da-5667-49d2-8752-2b55b73c67ac.jpg?im_w=1200'
      },

      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/64b3c507-a02b-4ad5-ad16-a672cb5e029e.jpg?im_w=1200'
      },

      {
        listingId: 1,
        url: 'https://a0.muscache.com/im/pictures/b357e20b-a8fb-498f-9cd8-32671031ecd6.jpg?im_w=720'
      },


      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/da3ca2ec-4ca3-4551-aeca-2267f1f8aae8.jpeg?im_w=1200'
      },
      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/91fa4ecf-d7a2-4b44-9256-8638ae5cd0d2.jpeg?im_w=720'
      },
      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/1de89a1b-41e7-4bb0-a2eb-eca7030cee2e.jpeg?im_w=1200'
      },
      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/98b87dc0-db4b-48f6-b7cc-d9cd33e62649.jpeg?im_w=1200'
      },
      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/1d8a8743-aa12-4ccc-8eaa-30e9aeddf356.jpeg?im_w=1200'
      },
      {
        listingId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51885043/original/0d54d4b9-a83d-4434-82ae-525922012278.jpeg?im_w=1200'
      },


      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/5713e6d9-e172-4edf-a5bb-06bac435d8e4.jpg?im_w=720'
      },
      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/87c200a4-86f6-46a8-aee5-9e9c530bf3cd.jpg?im_w=1200'
      },
      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/27b6bc17-c74c-4131-8f7e-31670a632ad0.jpg?im_w=1200'
      },
      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/5e924c90-b6cd-4f8f-bb03-04467399687f.jpg?im_w=1200'
      },
      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/b44d73e9-1a23-4ebf-af96-cb1789301521.jpg?im_w=720'
      },
      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/7691acb8-dd6a-403d-b060-7176bad4610c.jpg?im_w=1200'
      },

      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/d6ba84b4-b294-4d43-b2b0-22573ab082f8.jpg?im_w=720'
      },

      {
        listingId: 3,
        url: 'https://a0.muscache.com/im/pictures/b8f438aa-0044-48ff-b280-27f85bd5ddfa.jpg?im_w=720'
      },


      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/3636d2ae-f6e6-4592-adea-9cd8081bf58b.jpg?im_w=720'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/b49ac76b-c47c-4562-aeae-7482297d7223.jpg?im_w=720'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/c83f77f1-4509-43f5-ae43-84d3efc6ebf2.jpg?im_w=720'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/f1586f8d-1085-480f-8866-0efe70b5d1a3.jpg?im_w=720'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/18e024e4-259f-4d8e-bab2-996447f44e8b.jpg?im_w=720'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/993fd3f8-abcd-4bc4-a6e6-ff531c79b5f2.jpg?im_w=1200'
      },
      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/e363660f-75db-4def-8621-aee1322145db.jpg?im_w=720'
      },

      {
        listingId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43858289/original/c2c17121-255c-4da0-8d9a-f3ea1e336863.jpeg?im_w=1200'
      },

      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/c563705e-14ff-4572-a92e-f08d8fa0d526.jpg?im_w=720'
      },

      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/cb162357-f550-4252-99a5-789de49dd005.jpg?im_w=1200'
      },
      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/b9dafa13-787b-40e5-83dc-362a64ffd742.jpg?im_w=1200'
      },
      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/d877e65e-f422-43f6-9ebd-92f71a47a32b.jpg?im_w=720'
      },
      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/16b95725-4fc0-4a44-9de2-36e1da2bc021.jpg?im_w=1200'
      },
      {
        listingId: 5,
        url: 'https://a0.muscache.com/im/pictures/a67eda6d-d3cc-4504-87c7-3c3bae30d184.jpg?im_w=1200'
      },


      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/38691cf9-b5c6-4052-bc79-60ea4a6ace72.jpg?im_w=1200'
      },
      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/05c1ba91-ca25-483f-83fe-8f566ba120f0.jpg?im_w=720'
      },
      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/5483f195-4689-4d18-9881-6a623d523acf.jpg?im_w=1200'
      },
      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/ffb352c2-c72c-499b-a454-cc63d5ac5627.jpg?im_w=1200'
      },
      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/f4945ea2-3dce-4867-9afe-36dac8bd64af.jpg?im_w=720'
      },
      {
        listingId: 6,
        url: 'https://a0.muscache.com/im/pictures/feed64b0-ff5d-460f-ad52-8a943c194394.jpg?im_w=1200'
      },


      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/9969a1b8-bcd9-4a94-99af-2cf7111104fc.jpg?im_w=720'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/196ee786-763f-4b78-824a-b8fd4bac360e.jpg?im_w=1200'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/17222572/d471046d_original.jpg?im_w=1200'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/7cf2a641-d9a3-44ca-bb0e-9ba2e9877b7c.jpg?im_w=1200'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/c8a76c31-6c36-44ff-b38a-a927aa7a1f6d.jpg?im_w=720'
      },

      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/26675dce-bcc4-402a-9b8f-28e1b4f898be.jpg?im_w=1200'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-19860463/original/a3a8fa56-7b08-4fd0-baad-9f85306acad6.jpeg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/9b87ff5a-b056-4eb3-82e3-9d5efc9323a9.jpg?im_w=1200'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-19860463/original/b0478328-73c3-4bf4-b989-f8d0c65d2dcb.jpeg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/a3527b23-054f-465b-aa0e-947bd65c91f2.jpg?im_w=1200'
      },


      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/bd6b8af1-012b-454d-a3ff-341c087e20dc.jpg?im_w=1200'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/5cc2d10c-a17e-4c14-9638-a239ec6df08b.jpg?im_w=1200'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/72dee017-a3ef-4a00-8d43-41f8f037758a.jpg?im_w=720'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/556801f8-319d-4b2b-883f-9c023209a810.jpg?im_w=720'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/0252a6d6-8913-438d-90fd-700c1986c528.jpg?im_w=720'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/627a06d2-4696-4035-b1aa-a717f9b87727.jpg?im_w=720'
      },


      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/7639b3ce-5c89-4d3f-8059-478f46388c37.jpeg?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/bb00adfc-3815-4fd1-891a-d4a741f1fcd6.jpeg?im_w=720'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/e6f637cd-fb0f-41c0-bd87-116496315307.jpg?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/97a97c48-eaaf-40fb-9379-d2b2e1d070c7.jpeg?im_w=720'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/46af7880-b2b4-48ee-acc9-235e36897a24.jpeg?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-40037019/original/b2de0316-2245-4e8b-b0e9-6330f3c6ab96.jpeg?im_w=1200'
      },

      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/0a04e59f-b0b3-4ef0-a630-cfc2975d0654.jpg?im_w=1200'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/3fafef9d-e8b0-4df0-8044-655932689efd.jpg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/1d6561d8-010a-4308-b0b6-6e96aa449e0a.jpg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/b6623d20-15d7-489a-8b55-470c140a0de3.jpg?im_w=1200'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/fbf3fa94-edea-4e72-9c83-3c996e85ec4d.jpg?im_w=1200'
      },

      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/780449a9-540f-4e15-b434-da6847ac46c7.jpg?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/24764945-c683-49f3-98b2-3294dc921e4c.jpg?im_w=720'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-8293949/original/ebf146e7-ca0f-4b3d-9d37-fc393c97794f.jpeg?im_w=720'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/6a8ccaf0-4bd8-4b4e-a19f-92e4b3d39b8c.jpg?im_w=720'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/627839f1-effc-470d-972b-62da7a6d7596.jpg?im_w=720'
      },


      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1234059/492861b7_original.jpg?im_w=1200'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1233896/19a1babc_original.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1233936/9ae20d4f_original.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1233992/10a35aca_original.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1234088/c727cc06_original.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/1233969/e1c5f8ef_original.jpg?im_w=1200'
      },

      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/d88cf83b-8fe6-4973-b8a6-61c38d369bdc.jpg?im_w=1200'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/42404fbf-3c36-4a55-a1bc-45655d11deca.jpg?im_w=720'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/48e9139a-a351-4a65-bfd1-96ff6442bc5a.jpg?im_w=1200'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/949b1823-3b63-428a-bea9-943613edf8e3.jpg?im_w=1200'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/5bfccf1b-3918-4a00-a68b-de80501fd701.jpg?im_w=1200'
      },


      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49318900/original/7aaedce0-b93b-4f04-8b6e-557679385bb4.jpeg?im_w=1200'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/7cf50c34-d268-4515-82ae-e8c8c773f8c1.jpg?im_w=720'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49318900/original/a1a04623-89f9-4d45-ba7b-a3a1c7a764cf.jpeg?im_w=1200'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49318900/original/44a9fe3e-56fe-4949-9269-1b918b8baf30.jpeg?im_w=1200'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49318900/original/4182c464-38c8-4002-8f2e-850c0155981f.jpeg?im_w=1200'
      },


      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52704531/original/810123a4-5fb8-46e4-a60f-ed33bb539377.jpeg?im_w=1200'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52704531/original/7df6cf2d-991d-4dce-b692-2860dfb6a4f2.jpeg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52704531/original/c49087a3-8813-45bf-9a37-19740c28581b.jpeg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52704531/original/9eabca3c-c804-4bee-ade4-ed84ccc1eb4a.jpeg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52704531/original/141f99d2-0449-4795-bb6d-eefbaf01ef9c.jpeg?im_w=720'
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

    return queryInterface.bulkDelete('Images', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
