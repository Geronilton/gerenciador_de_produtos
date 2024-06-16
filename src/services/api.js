import axios from "axios";

const api = new axios.create({
    baseURL: "http://localhost:3001",
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('@Auth:token'); // Atualizado para o prefixo usado no AuthProvider
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export {api};