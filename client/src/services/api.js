import axios from "axios";
 


export const api = axios.create({
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

