import axios from "axios";
 


export const api = axios.create({
    //baseURL:'http://10.0.0.104:5000'
    baseURL:'http://localhost:5000'
});



export const createSession = async ({ email, password }) => {
    try {
        const data = api.post('/auth/authenticate', { email, password })
        return data
    } catch (error) {
        console.log(error)
    }
}
export const validateSession= async ({token}) => {
    try { 
       api.defaults.headers.Authorization = `Bearer ${token}`;
       const dataUser = api.post('allPrivate/setUserFrontBack', {token})
       return dataUser
    } catch (error) {
        console.log(error)
    }
}

export const registerUser= async ({ name,email, password }) => {
    try { 
       const dataUser = api.post('/auth/register', { name,email, password })
       return dataUser
    } catch (error) {
        console.log(error)
    }
}

export const dataForgotPassword= async ({ email}) => {
    try { 
       const dataUser = api.post('/auth/forgot_password', { email })
       return dataUser
    } catch (error) {
        console.log(error)
    }
}