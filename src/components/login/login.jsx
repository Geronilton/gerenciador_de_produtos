import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleclick = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            if (response.status === 200) {
                console.log("sucesso");
                navigate("/");
            };

        } catch (error) {
            alert("verifique se os campos estão corretos!");
            console.log("erro ao logar(cliente)", error);
        };

    };

    return (
        <div className="divLogin">
            <div className="login">
                <h2>Login</h2>

                <form>
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
                        type="button"
                        onClick={handleclick}
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;