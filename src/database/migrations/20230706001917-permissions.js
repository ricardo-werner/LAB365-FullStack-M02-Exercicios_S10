'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
          await queryInterface.createTable('permissions', { 
            id: {type : Sequelize.INTEGER , primaryKey: true, autoIncrement: true},
            description: {type: Sequelize.STRING, allowNull: false},
            createdAt: {type: Sequelize.DATE, allowNull: false},
            updatedAt: {type: Sequelize.DATE, allowNull: false},
            deleteAt: {type: Sequelize.DATE, allowNull: true},
          },{
            paranoid: true,
            underscored: true,
          });
    
  },

  async down (queryInterface, Sequelize) {
      
     await queryInterface.dropTable('permissions');
    
  }
};
