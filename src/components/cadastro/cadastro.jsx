import React, { useState } from "react";
import './cadastro.css';
import { api } from "../../services/api";

const Cadastro = () => {

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      const data ={
        name,
        email,
        password
      }
      const response = await api.post('/register', data);

      if (response.status === 200){
        alert("Usuário criado com sucesso");
      }

      setNome('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
      console.log("Erro ao enviar os dados do formulário", error);
      alert("Erro ao enviar os dados do formulário");
    }
  };

  return (
    <div className="divCadastro">
      <div className="cadastro">
        <h2>Cadastro</h2>
        <form onSubmit={handleSaveUser}>
          <label className="labelNome" htmlFor="nome">Nome</label>
          <br />
          <input 
            className="inputNome" 
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            value={name} 
            onChange={(e) => setNome(e.target.value)} 
          />
          <br />

          <label className="labelEmail" htmlFor="email">Email</label>
          <br />
          <input 
            className="inputEmail" 
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <br />
          
          <label className="labelPass" htmlFor="password">Senha</label>
          <br />
          <input 
            className="inputPass" 
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br />

          <button 
            className="buttonSubmit" 
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>  
    </div>
  );
}

export default Cadastro;
