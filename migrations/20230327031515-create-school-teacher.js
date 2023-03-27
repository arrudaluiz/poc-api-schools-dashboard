'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SchoolsTeachers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4 
      },
      shoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Schools',
          key: 'id',
          as: 'shoolId'
        }
      },
      teacherId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Teachers',
          key: 'id',
          as: 'teacherId'
        }
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
    await queryInterface.dropTable('SchoolsTeachers');
  }
};