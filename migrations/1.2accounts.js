const Sequelize = require('sequelize');

const tableName = 'Accounts';

async function up(queryInterface) {
  await queryInterface.createTable(tableName, {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    type: {
      type: Sequelize.CHAR(200),
      allowNull: false,
    },
    name: {
      type: Sequelize.CHAR(50),
      allowNull: false,
    },
    balance: {
      type: Sequelize.CHAR(250),
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  });
}

async function down(queryInterface) {
  await queryInterface.dropTable(tableName);
}

module.exports = { up, down };
