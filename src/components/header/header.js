import React from "react";
import './header.css'

const Header = () =>{
    return(
    <header>
        <form className="formSearch">
            <input className="inputSearch" 
            type="text" name="search" 
            title="Pesquisar" placeholder="Pesquisar uma tarefa" ></input>
            <button className="buttonSearch" type="submit">Pesquisar</button>
        </form>
    </header>
    );
};

export default Header;