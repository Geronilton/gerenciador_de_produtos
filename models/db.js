const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gerentarefa', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelicida!!");
}catch(error) {
    console.log("Erro ao conectar com o banco de dados!!", error);
}

module.exports = sequelize;