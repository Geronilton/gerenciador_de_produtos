const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
    },
});

User.sync();

module.exports = User;