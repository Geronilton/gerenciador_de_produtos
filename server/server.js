const express = require('express')
const router = express.Router()
const app = express()
// const Tarefa = require('../models/Tarefa')
const User = require('../models/User')
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(router);


router.post("/cadastro",async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        await User.create({name, email,password});

        res.status(201).send("Usuário cadastrado com sucesso");
    }catch(error){
        console.log("error ao cadastrar",error);
        res.status(500).send('Erro ao criar usuário');
    }
 });

router.post("/login", async (req, res) => {
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
});



 
router.get("/",async (req,res) =>{
    res.send("servidor funcionando!!");

});

app.listen(3001,() => {
    console.log('Servidor rodando na porta 3001');
});

module.exports = router;