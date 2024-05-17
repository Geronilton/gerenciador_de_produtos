import React from "react";
import './cadastro.css'
const cadastro = () => {
    return (
        <div className="divCadastro">
            <div className="cadastro">
            <h2>Cadastro</h2>
            <form>
                <label className="labelNome" htmlFor="nome">Nome</label>
                <br />
                <input className="inputNome" type="text"
                    title="nome" placeholder="Digite seu nome"></input>
                <br />

                <label className="labelEmail" htmlFor="nome">Email</label>
                <br />
                <input className="inputEmail" type="text"
                    title="email" placeholder="Digite seu email"></input>
                <br />
             
                <label className="labelPass" htmlFor="password">Senha</label>
                <br />
                <input className="inputPass" type="text"
                    title="Password" placeholder="Digite sua senha"></input>
                <br />

                <button className="buttonCadastrar">Cadastrar</button>
            </form>
        </div>  
        </div>
    )
}

export default cadastro;