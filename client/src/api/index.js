import axios from 'axios'

const server = axios.create("http://localhost:5000/")

export const logIn = (authData) => server.post('/users/login',authData)
export const signUp = (authData) => server.post('/users/singm',authData)