import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login/login';
import Main from  '../components/main/main'
import Cadastro from '../components/cadastro/cadastro'
import PrivateRoutes from './privateRoutes'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PrivateRoutes />} >
                    <Route path="/" element={<Main />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro/>} />
               
            </Routes>
        </Router>
    );
}
