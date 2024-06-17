import React, { useContext } from 'react';
import { SearchContext } from '../../../context/searchContext';
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

  const handleDelete = async(id) => {
    try {
        const response = await api.delete(`/delete-produto/${id}`);
        if (response.status === 200) {
            alert('produto deletado!! ')
        }
    } catch (error) {
        console.log('error', error)
    }
}

  return (
    <div className="conteiner">
      {!searchResults ? (
       <p>Produto não encontrado</p>
       ) : (
        <div className="box">
        <h1>Produtos</h1>
        <div className="listagemProdutos">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Validade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
             
                <tr key={searchResults.id}>
                  <td>{searchResults.name}</td>
                  <td>{searchResults.description}</td>
                  <td>R$ {searchResults.price}</td>
                  <td>{searchResults.estoque} un</td>
                  <td>{new Date(searchResults.validade).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/editarProduto/${searchResults.id}`}>
                      <button className="submit">Editar</button>
                    </Link>
                    <button className="buttonN" onClick={() => handleDelete(searchResults.id)}>Excluir</button>
                  </td>
                </tr>
          
            </tbody>
          </table>
        </div>
      </div>
      )} 
    </div>
  );
};

export default SearchResults;
