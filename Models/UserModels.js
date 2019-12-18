const dbConfig = require('../config/databaseConfig');



const User = dbConfig.sequelize.define('user',
    //atributes
    {
        id: {
            type: dbConfig.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: dbConfig.Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: dbConfig.Sequelize.TEXT,
            allowNull: false
        }

    }, {
        freezeTablename: true,
        tableName: 'user_table'
    }

);

User.sync({ force: true })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })
    // Now the `users` table in the database corresponds to the model definition
    // return User.create({
    //   username: 'John',
    //   password: 'Hancock'
    // });

module.exports = User;