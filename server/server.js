const express = require('express')
const router = express.Router()
const app = express()
const Tarefa = require('../models/Tarefa')

app.use(router);

router.get("/",async (req,res) =>{
    res.send("servidor funcionando!!");

});

app.listen(3001,() => {
    console.log('Servidor rodando na porta 3001');
});

module.exports = router;