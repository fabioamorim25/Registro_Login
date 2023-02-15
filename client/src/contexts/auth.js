import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


//CRIAR O PROVEDOR DO CONTEXTO
export function AuthProvider(props){
    
    //----------------------------------------------
    const [user,SetUser]= useState(null);
    
    const navigate = useNavigate();


    //[LOGIN,LOGOUT,REGISTER,RESETPASSWORD]
    const isAuthenticated = !!user;
    
    function login (email,password){
        SetUser ({id:123,email,password})
        console.log("login",{email,password})


        navigate('/home');
    }
    function logout (){
        console.log("logout")
        navigate('/login');
    }
    function register (name,email,password){
        console.log("register",{name,email,password})


        navigate('/home');
    }
    function resetPassword (email){
        console.log("resetPassword",{email})

        navigate('/login');
    }
    //-----------------------------------------------


    return(
        <AuthContext.Provider value={{isAuthenticated,user, login, logout, resetPassword,register}}>
            {props.children}
        </AuthContext.Provider>
    )
}