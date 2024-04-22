"use strict";


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
 
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("episodes", null, {});
    await queryInterface.sequelize.query(
      "ALTER SEQUENCE episodes_id_seq RESTART WITH 1",
      { type: Sequelize.QueryTypes.RAW }
    );
  },
};
