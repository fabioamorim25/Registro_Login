import {React,useContext} from "react";
import {Route,Routes,useNavigate} from "react-router-dom";

//importar paginas do sistema
import Login from "../pages/Login/index";
import Register from  '../pages/Register/index';
import ResetPassword from '../pages/ResetPassword/index';
import Home from '../pages/Home/index';

import {AuthContext, AuthProvider } from "../contexts/auth";//importar o contexto 

function AppRoutes (){

    const navigate = useNavigate();

    function PrivateRoute ({children}){
        const {isAuthenticated} = useContext(AuthContext)        
        if(!isAuthenticated)
            return(navigate('/login'))
        return children
    }


    return(
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/resetPassword" element={<ResetPassword />}></Route>
                <Route path="/home" element={<PrivateRoute> <Home/> </PrivateRoute>}></Route>
            </Routes>
        </AuthProvider>
    )
}
export default AppRoutes;