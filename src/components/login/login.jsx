import React, { useContext, useState, useEffect } from "react";
import './login.css'
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, signed } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email,
                password
            };
            await signIn(data);
        } catch (error) {
            alert("Verifique se os campos estão corretos!");
            console.log("Erro ao logar (cliente)", error);
        }
    };

    useEffect(() => {
        if (signed) {
            navigate('/');
        }
    }, [signed, navigate]);

    return (
        <div className="divLogin">
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSignIn}>
                    <label className="labelEmail" htmlFor="email">Email</label><br />
                    <input
                        className="inputEmail"
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label className="labelPass" htmlFor="password">Senha</label><br />
                    <input
                        className="inputPass"
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    <button
                        className="buttonSubmit"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
