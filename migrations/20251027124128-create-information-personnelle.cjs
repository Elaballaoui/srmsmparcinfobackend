'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InformationPersonnelles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // IDInformationPersonnelle: {
      //   type: Sequelize.INTEGER
      // },
      Matricule: {
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING
      },
      Prenom: {
        type: Sequelize.STRING
      },
      Nom: {
        type: Sequelize.STRING
      },
      EtatPersonnelle: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InformationPersonnelles');
  }
};