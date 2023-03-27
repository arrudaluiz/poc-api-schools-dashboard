'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classrooms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      closed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      schoolId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Schools',
          key: 'id',
          as: 'schoolId'
        }
      },
      teacherId: {
        type: Sequelize.UUID,
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
    await queryInterface.dropTable('Classrooms');
  }
};