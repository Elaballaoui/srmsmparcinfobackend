'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MarcheAppelOffres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TitreMarche: {
        type: Sequelize.STRING
      },
      NumeroMarche: {
        type: Sequelize.STRING
      },
      DescriptionMarche: {
        type: Sequelize.STRING
      },
      DateMarche: {
        type: Sequelize.DATE
      },
      IDFournisseur: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('MarcheAppelOffres');
  }
};