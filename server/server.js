const express = require('express')
const router = require('./routes')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(router);
 
router.get("/",async (req,res) =>{
    res.send("servidor funcionando!!");
});

app.listen(3001,() => {
    console.log('Servidor rodando na porta 3001');
});

module.exports = router;