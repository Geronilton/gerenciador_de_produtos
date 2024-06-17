import React, { useEffect, useState } from "react";
import { api } from "../../../services/api";
import '../listagemProdutos/listagemProdutos.css';

const Estoque = () => {
    const [estoqueEntrada, setEstoqueEntrada] = useState({});
    const [estoqueRetirada, setEstoqueRetirada] = useState({});
    const [produtos, setProdutos] = useState([]);

    const handleEntradaChange = (id, value) => {
        setEstoqueEntrada((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleRetiradaChange = (id, value) => {
        setEstoqueRetirada((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleEntradaSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const data = {
                quantidade: estoqueEntrada[id]
            };
            const response = await api.put(`/entrada-estoque/${id}`, data);
            if (response.status === 200) {
                alert("Entrada de estoque realizada com sucesso");
                console.log(response);
                setEstoqueEntrada((prev) => ({
                    ...prev,
                    [id]: '',
                }));
                // Atualizar a lista de produtos após a modificação do estoque
                getProdutos();
            }
        } catch (error) {
            console.error("Erro na requisição de entrada de estoque", error);
        }
    };

    const handleRetiradaSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const data = {
                quantidade: estoqueRetirada[id]
            };
            const response = await api.put(`/retirada-estoque/${id}`, data);
            if (response.status === 200) {
                alert("Retirada de estoque realizada com sucesso");
                console.log(response);
                setEstoqueRetirada((prev) => ({
                    ...prev,
                    [id]: '',
                }));
                // Atualizar a lista de produtos após a modificação do estoque
                getProdutos();
            }
        } catch (error) {
            console.error("Erro na requisição de retirada de estoque", error);
        }
    };

    const getProdutos = async () => {
        try {
            const response = await api.get('/list-produto');
            if (Array.isArray(response.data.produtos)) {
                setProdutos(response.data.produtos);
                // Inicializar o estado de estoque de entrada e retirada com os produtos obtidos
                const estoqueEntradaInicial = {};
                const estoqueRetiradaInicial = {};
                response.data.produtos.forEach(produto => {
                    estoqueEntradaInicial[produto.id] = '';
                    estoqueRetiradaInicial[produto.id] = '';
                });
                setEstoqueEntrada(estoqueEntradaInicial);
                setEstoqueRetirada(estoqueRetiradaInicial);
            } else {
                console.error('Resposta da API não é um array:', response.data);
                setProdutos([]);
                setEstoqueEntrada({});
                setEstoqueRetirada({});
            }
        } catch (error) {
            console.log("Erro na requisição de listagem de produtos", error);
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
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
                                <th>Adicionar estoque</th>
                                <th>Retirar estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => (
                                <tr key={produto.id}>
                                    <td>{produto.name}</td>
                                    <td>{produto.description}</td>
                                    <td>R$ {produto.price}</td>
                                    <td>{produto.estoque} un</td>
                                    <td>
                                        <form className="formEstoque" onSubmit={(e) => handleEntradaSubmit(e, produto.id)}>
                                            <input
                                                className="inputEstoque"
                                                type="number"
                                                min="1"
                                                value={estoqueEntrada[produto.id] || ''}
                                                onChange={(e) => handleEntradaChange(produto.id, e.target.value)}
                                            />
                                            <br />
                                            <button
                                                className="submit"
                                                type="submit">Adicionar
                                            </button>
                                        </form>
                                    </td>
                                    <td>
                                        <form className="formEstoque" onSubmit={(e) => handleRetiradaSubmit(e, produto.id)}>
                                            <input
                                                className="inputEstoque"
                                                type="number"
                                                min="1"
                                                value={estoqueRetirada[produto.id] || ''}
                                                onChange={(e) => handleRetiradaChange(produto.id, e.target.value)}
                                            />
                                            <br />
                                            <button
                                                className="buttonN"
                                                type="submit">Retirar
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Estoque;
