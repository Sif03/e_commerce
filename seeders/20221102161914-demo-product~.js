'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Mouse Asus",

        price: 222,

        description: "New asus mouse",
        
        CategoryId: 2,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "iPhone 12",

        price: 222,

        description: "New asus mouse",

        CategoryId : 5,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Logitech Keyboard",

        price: 345,

        description: "New keyboard form Logitech",
        
        CategoryId: 1,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "iPad 7",

        price: 999,

        description: "New apple phone",

        CategoryId : 4,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        name: "Pc gaming",

        price: 3333,

        description: "New Pc",
        
        CategoryId : 3,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
    ]);
  },
  
  async down(queryInterface, Sequelize) {},
};
