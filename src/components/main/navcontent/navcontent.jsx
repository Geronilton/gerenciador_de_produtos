import React from "react";
import './navcontent.css';
import { Link } from "react-router-dom";


const NavContent = () =>{
    return(
        <div className="navContent">
        <nav>
           <Link to='#' >
            <div className="boxAdiciona">
                    <span>Adicionar uma tarefa</span>
                </div>
           </Link>

           <Link to='#' >
            <div className="boxPendente">
                    <span>Pendente</span>
                </div>
           </Link>     
           
            <Link to='#' >
            <div className="boxConcluido">
                    <span>Concluido</span>
                </div>
           </Link>

           


        </nav>
        </div>
    )
}

export default NavContent;