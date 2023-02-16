import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";


export const AuthContext = createContext();


//CRIAR O PROVEDOR DO CONTEXTO
export function AuthProvider(props){
    
    const [user,SetUser]= useState(null);
    
    const navigate = useNavigate();
    
    //-----[LOGIN,LOGOUT,REGISTER,RESETPASSWORD]----------------------
    const isAuthenticated = !!user;
    
    const signIn = async (email, password)=> {
        //chamar a api
        const { data } = await createSession({email,password})
       
        if(data.token && data.user){    
            SetUser(JSON.stringify(data.user))
            localStorage.setItem('loginRegister.token', data.token)
        }
        navigate('/home')
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
        <AuthContext.Provider value={{isAuthenticated,user, signIn, logout, resetPassword,register}}>
            {props.children}
        </AuthContext.Provider>
    )
}