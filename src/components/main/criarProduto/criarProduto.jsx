import React,{useState} from "react";
import {api} from '../../../services/api'
import './criarProduto.css'

const CriarProduto = () =>{
    const [name, setName] = useState('');
    const [validade, setValidade] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [estoque, setEstoque] = useState('');


    const handleclick=  async (e)=>{
        e.preventDefault();
        try{
            const data={
                name, 
                description,
                price,
                estoque,
                validade
            }
          const response = await api.post('/create-produto',data)
            if (response.status === 200){
                alert('Produto registrado com sucesso!')
            }
            console.log(response);
        }catch(error){
            console.log("Erro ao enviar os dados(cliente)",error)
        }
    }

    return(
    <div className="criarProduto">
        <div className="Produto">
            <h2 className="subtitle">Registrar Produto</h2>
            <form onSubmit={handleclick}>
                
                <label htmlFor="name">Nome:</label>
                <br />
                <input className="name" 
                type="text" 
                placeholder="Adicione um nome do produto"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <br />

                <label htmlFor="categoria">Categoria:</label>
                <br />
                <input className="description"
                type="text"
                placeholder="Ex: Frios, salgadinho,cereais..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <br />

                <label htmlFor="Price">Preço:</label>
                <br />
                <input className="Price" 
                type="number" 
                placeholder="Ex:2.50"
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                />
                <br />

                <label htmlFor="estoque">Estoque:</label>
                <br />
                <input className="estoque" 
                type="number" 
                placeholder="Ex: 20, 15, 50.."
                value={estoque}
                onChange={(e)=> setEstoque(e.target.value)}
                />
                <br />

                <label htmlFor="dateValidade">Data de Validade:</label>
                <br />
                <input className="dateValidade" 
                type="date" 
                value={validade}
                onChange={(e)=> setValidade(e.target.value)}
                />
                <br />
   
                <button 
                className="submit"
                type="submit">Criar </button>
            </form>
        </div>
    </div>
    )
}

export default CriarProduto;