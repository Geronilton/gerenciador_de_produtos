import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login/login';
import Main from  '../components/main/main'
import Cadastro from '../components/cadastro/cadastro'
import PrivateRoutes from './privateRoutes'
import CriarProduto from '../components/main/criarProduto/criarProduto'
import ListagemProdutos from '../components/main/listagemProdutos/ListagemProdutos';
import Estoque from '../components/main/estoque/Estoque';
import EditarProduto from '../components/main/editarProduto/EditarProduto';
import SearchResults from '../components/main/searchResults/SearchResults';
import { SearchProvider } from '../context/searchContext';

export const AppRouter = () => {
    return (
    <SearchProvider>
            <Router>
            <Routes>
                <Route path='/' element={<PrivateRoutes />}>
                    <Route path="/" element={<Main />}>
                        <Route path="criarProduto" element={<CriarProduto />} />
                        <Route path="listagemProdutos" element={<ListagemProdutos />} />
                        <Route path="estoque" element={<Estoque />} />
                        <Route path='editarProduto/:id' element={<EditarProduto/>} />
                        <Route path="resultados" element={<SearchResults />} />
                    </Route>
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    </SearchProvider>
    );
}
