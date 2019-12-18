const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('db_api', 'root', 'Yagya@436233', {
    host: 'localhost',
    dialect:'mysql'
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  module.exports ={
      Sequelize,
      sequelize
  }