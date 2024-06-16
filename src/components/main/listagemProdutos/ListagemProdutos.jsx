import { useState } from "react";
import React,{useEffect} from "react";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";
import './listagemProdutos.css'

const ListagemProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        const getProdutos = async () =>{
            try {
                const response = await api.get('/list-produto');
                if (Array.isArray(response.data.produtos)) {
                    setProdutos(response.data.produtos);
                } else {
                    console.error('Resposta da API não é um array:', response.data);
                    setProdutos([]);
                }
            } catch (error) {
                console.log("Erro na requisição",error);
            }
        }

        getProdutos(); 
    },[])

    const handleDelete = async(id) => {
        try {
            const response = await api.delete(`/delete-produto/${id}`);
            if (response.status === 200) {
                setProdutos(produtos.filter((produto) => produto.id !== id));
                alert('produto deletado!! ')
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    

    return(
        <div className="conteiner">
        <div className="box">
            <h1>Produtos</h1>
            <div className="listagemProdutos">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Validade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.name}</td>
                                <td>{produto.description}</td>
                                <td>R$ {produto.price}</td>
                                <td>{produto.estoque} un</td>
                                <td>{produto.validade}</td>
                                <td>
                                    {/* <Link to={`/editarProduto/${produto.id}`}>
                                        Editar
                                    </Link> */}
                                    <button className="buttonExcluir" onClick={() => handleDelete(produto.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ListagemProdutos;