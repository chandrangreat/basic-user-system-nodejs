const Sequelize = require('sequelize');
const Umzug = require('umzug');

const sequelize = new Sequelize('user_system', 'admin', 'root@123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: { sequelize },
  logging: false,
  migrations: {
    params: [sequelize.getQueryInterface()],
    path: './migrations',
    pattern: /\.js$/,
  },
});

const task = (process.argv[2] || '').trim();

switch (task) {
  case 'up':
    umzug.up().then((result) => {
      console.log('Migrations up went successful!', result);
      process.exit(0);
    });
    break;
  case 'down':
    umzug.down().then((result) => {
      console.log('Migrations down went successful!', result);
      process.exit(0);
    });
    break;
  default:
    break;
}
