import axios from 'axios'

const api = axios.create({
    baseURL: "https//localhost:5150/"
})

export const createUser = async (user) => {
    console.log("createUser-user",user)
    const resp = await api.post('/users', 
    {   
        user: {
            name: user.name,
            email: user.email,
            password: user.password,
            zip: user.zip
        }
    },
    {withCredentials: true})
    console.log('api create user', resp.data)
    return resp.data
}

         