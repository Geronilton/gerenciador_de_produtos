import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import '../criarProduto/criarProduto.css'

const EditarProduto = () => {
    const { id } = useParams();  // Aqui estamos utilizando useParams para pegar o id da URL
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
        name: "",
        description: "",
        price: "",
        estoque: "",
        validade: ""
    });

    useEffect(() => {
        const getProduto = async () => {
            try {
                const response = await api.get(`/get-produto/${id}`); // Utilizando o id da URL para buscar o produto
                setProduto(response.data.produto);
            } catch (error) {
                console.log("Erro ao buscar produto", error);
            }
        };

        getProduto();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/update-produto/${id}`, produto);  // Utilizando o id da URL para atualizar o produto
            alert("Produto atualizado com sucesso!");
            navigate("/listagemProdutos");
        } catch (error) {
            console.log("Erro ao atualizar produto", error);
        }
    };

    return (
        <div className="criarProduto">
            <div className="Produto">
            <h1>Editar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text"
                     name="name" 
                     value={produto.name} 
                     onChange={handleChange} 
                     required />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type="text" 
                    name="description" 
                    value={produto.description} 
                    onChange={handleChange}  />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="number" 
                    name="price" 
                    value={produto.price} 
                    onChange={handleChange}
                    required />
                </div>
                <div>
                    <label>Estoque:</label>
                    <input type="number" 
                    name="estoque" 
                    value={produto.estoque}
                     onChange={handleChange} 
                     required />
                </div>
                <div>
                    <label>Validade:</label>
                    <input type="date"
                     name="validade"
                    value={produto.validade} 
                    onChange={handleChange}  />
                </div>
                <button className="submit" 
                type="submit">
                    Salvar
                </button>
            </form>
            </div>
        </div>
    );
};

export default EditarProduto;
