'use strict';

/** @type {import('sequelize-cli).Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'Posts',
    {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
      },
      title: {
          type: Sequelize.STRING,
          validate: {notEmpty: {msg: "El título no puede estar vacío"}}
        },
      body: {
          type: Sequelize.TEXT,
          validate: {notEmpty: {msg: "El cuerpo del post no puede estar vacío"}}
       },
      attachmentId: {
          type: Sequelize.INTEGER
      }
    },
     {
    sync: {force: true}
    }
  );
},
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Posts');
 }
};
