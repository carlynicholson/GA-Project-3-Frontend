import axios from 'axios'

const api = axios.create({
    baseURL: "https://fetch-app-heroku.herokuapp.com/"
})

export const createUser = async (user) => {
    const resp = await api.post('/users/', user)
    return resp
}

export const verifyUser = async (user) => {
    const resp = await api.get(`/users/${user.email}/${user.password}`, user)
    return resp
}         