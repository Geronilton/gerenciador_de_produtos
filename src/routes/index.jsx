import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login/login';
import Main from  '../components/main/main'

export const AppRouter = () => {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
               
            </Routes>
        </Router>
    );
}
