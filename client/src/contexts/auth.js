import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {createSession,validateSession,registerUser} from "../services/api";



export const AuthContext = createContext();


//CRIAR O PROVEDOR DO CONTEXTO
export function AuthProvider(props) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)


    //----------------------------------------------
    const isAuthenticated = !!user;


    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('loginRegister.token');
            if (token) {
                const { data } = await validateSession({ token });
                setUser(JSON.stringify(data));
            }
        }
        fetchUser()
    }, [])

    const signIn = async (email, password)=> {
        //chamar a api
        const { data } = await createSession({
            email,
            password
        })
    
        if(data.token && data.user){    
            setUser(JSON.stringify(data.user))
            localStorage.setItem('loginRegister.token', data.token)
        }
        navigate('/home')
    }

    const register = async (name, email, password) => {
        //chamar a api
        const { data } = await registerUser({
            name,
            email,
            password
        })

        if (data.token && data.user) {
            setUser(JSON.stringify(data.user))
            localStorage.setItem('loginRegister.token', data.token)
        }
        navigate('/home')
    }

    //-----------------------------------------------


return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn,register }}>
            {props.children}
        </AuthContext.Provider>
    )

}