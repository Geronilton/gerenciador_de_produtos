import React from "react";
import './navcontent.css';

const navcontent = () =>{
    return(
        <nav>
            <a href="#">
            <div className="boxAdiciona">
                <span>Adicionar uma tarefa</span>
            </div>
            </a>

            <a href="#">
            <div className="boxPendente">
                <span>Pendente</span>
            </div>
            </a>

            <a href="#">
            <div className="boxConcluido">
                <span>Concluido</span>
            </div>
            </a>
     
        </nav>
    )
}

export default navcontent;