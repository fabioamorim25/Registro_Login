import { useState, createContext } from "react";


export const AuthContext = createContext();


//CRIAR O PROVEDOR DO CONTEXTO
export function AuthProvider(props){
    
    //----------------------------------------------
    const [user,SetUser]= useState(null);
    
    //[LOGIN,LOGOUT,REGISTER,RESETPASSWORD]
    function login (email,password){
        SetUser ({id:123,email,password})

        console.log("login",{email,password})
    }
    function logout (){
        console.log("logout")
    }
    function register (name,email,password){
        console.log("register",{name,email,password})
    }
    function resetPassword (email){
        console.log("resetPassword",{email})
    }
    //-----------------------------------------------


    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout, resetPassword,register}}>
            {props.children}
        </AuthContext.Provider>
    )
}