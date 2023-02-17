import axios from "axios";
 


export const api = axios.create({
    baseURL:'http://10.0.0.104:5000'
    //baseURL:'http://localhost:5000'
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
