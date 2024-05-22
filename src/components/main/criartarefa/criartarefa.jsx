import React,{useState} from "react";
import axios from "axios";
import './criartarefa.css'

const Criartarefa = () =>{
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleclick= ()=>{
        try{
            axios.post('http://localhost:3001/criartarefa',{
                titulo:titulo,
                descricao:descricao
            })
            alert("enviado com sucesso")
        }catch(error){
            console.log("Erro ao enviar os dados(cliente)",error)
            alert("Erro ao enviar os dados(cliente)")
        }
    }

    return(
    <div className="criarTarefa">
        <div className="tarefa">
            <h2 className="subtitle">Criar uma tarefa</h2>
            <form>
                <input className="titleTarefa" 
                type="text" 
                placeholder="Adicione um titulo"
                value={titulo}
                onChange={(e)=> setTitulo(e.target.value)}
                />
                <br />
                <br />
                <textarea className="desTarefa"
                type="text"
                placeholder="Adicione uma descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}/>
                <br />
                <button className="submit" onClick={handleclick}>Criar</button>
            </form>
        </div>
    </div>
    )
}

export default Criartarefa;