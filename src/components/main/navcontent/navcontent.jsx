import React from "react";
import './navcontent.css';
import { Link } from "react-router-dom";


const NavContent = () =>{
    return(
        <div className="navContent">
        <nav>
        
                <Link to='criarProduto' >
                <div className="boxAdiciona">
                    <div><span>Cadastrar Produto</span></div>
                </div>
                </Link>
        

           <Link to='listagemProdutos' >
            <div className="boxlistagem">
                    <span>listar Produto</span>
                </div>
           </Link>     
           
            <Link to='estoque' >
            <div className="boxEstoque">
                    <span>Estoque</span>
                </div>
           </Link>
        </nav>
        </div>
    )
}

export default NavContent;