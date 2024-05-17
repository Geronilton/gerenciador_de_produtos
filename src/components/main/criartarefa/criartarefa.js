import React from "react";
import './criartarefa.css'

const Criartarefa = () =>{
    return(
    <div className="criarTarefa">
        <div className="tarefa">
            <h2 className="subtitle">Criar uma tarefa</h2>
            <form>
                <input className="titleTarefa" type="text" placeholder="Adicione um titulo"/>
                <br />
                <br />
                <textarea className="desTarefa" type="text" placeholder="Adicione uma descrição"/>
                <br />
                <button className="submit">Criar</button>
            </form>
        </div>
    </div>
    )
}

export default Criartarefa;