import axios from 'axios'

const api = axios.create({
    baseURL: "https://fetch-app-heroku.herokuapp.com/"
})

export const createUser = async (user) => {
    // console.log("createUser-user",user)
    const resp = await api.post('/users/', user)
    // ,
    //     {withCredentials: true})
    console.log('api create user', resp)
    return resp
}

export const verifyUser = async (user) => {
    console.log("verifyUser-user",user)
    const resp = await api.get(`/users/${user.email}/${user.password}`, user)
    // ,
    //     {withCredentials: true})
    console.log('api verify user', resp)
    return resp
}

         