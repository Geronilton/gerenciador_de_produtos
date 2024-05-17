const Sequelize = require('sequelize')
const db = require('./db')
const User = require('./User')


const Tarefa = db.define('tarefas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_termino: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    userId: { // Foreign key para associar a tarefa ao usuário
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // Nome da tabela de usuários
            key: 'id'
        }
        }
    })

User.hasMany(Tarefa, {
    foreignKey: 'userId'
});
Tarefa.belongsTo(User, {
    foreignKey: 'userId'
});


Tarefa.sync();
User.sync();

module.exports = Tarefa;