import React from "react";
import {Route,Routes} from "react-router-dom";

//importar paginas do sistema
import Login from "../pages/Login/index";
import Register from  '../pages/Register/index';
import ResetPassword from '../pages/ResetPassword/index';
import Home from '../pages/Home/index';

function AppRoutes (){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/resetPassword" element={<ResetPassword/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    )
}
export default AppRoutes;