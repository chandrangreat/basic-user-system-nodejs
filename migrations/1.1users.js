const Sequelize = require('sequelize');

const tableName = 'Users';

async function up(queryInterface) {
  await queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    username: {
      type: Sequelize.CHAR(200),
      allowNull: false,
    },
    email: {
      type: Sequelize.CHAR(50),
      allowNull: false,
    },
    password: {
      type: Sequelize.CHAR(250),
      allowNull: false,
    },
  });
}

async function down(queryInterface) {
  await queryInterface.dropTable(tableName);
}

module.exports = { up, down };
