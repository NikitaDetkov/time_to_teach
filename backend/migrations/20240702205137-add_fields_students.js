'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'surname', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addColumn('students', 'name', {
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
