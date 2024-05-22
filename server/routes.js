const Tarefa = require('../models/Tarefa')
const User = require('../models/User')
const express = require('express')
const router = express.Router()


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send("Email não encontrado");
        }

        if (password !== user.password) {
            return res.status(401).send("Senha incorreta");
        }

        res.status(200).json({ message: "Login realizado com sucesso", user });
        console.log("Login realizado com sucesso");
    } catch (error) {
        res.status(500).send("Erro ao realizar login!");
        console.log("Erro ao realizar login", error);
    }
})


router.post("/cadastro", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.create({ name, email, password });

        res.status(201).send("Usuário cadastrado com sucesso");
    } catch (error) {
        console.log("error ao cadastrar", error);
        res.status(500).send('Erro ao criar usuário');
    }
});



router.post("/criartarefa", async (req, res) => {
    try {
        const { titulo, descricao } = req.body;
        await Tarefa.create({ titulo, descricao });
        res.status(201).send("Tarefa criada com sucesso");
        console.log("tarefa criada!")
    } catch (error) {
        console.log("error ao criar tarefa", error);
        res.status(500).send('Erro ao criar tarefa');
    }
})



module.exports = router;