import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {
    const {signed} = useContext(AuthContext);

    return signed ? <Outlet /> :  <Navigate to="/login" />;

}

export default PrivateRoute;