import axios from 'axios';

const clientsapi = axios.create({
    baseURL: 'http://localhost:3000/clients/'
})
export const getAllClients = () => {
    return clientsapi.get('/')
}

export const getClient = (id) => {
    return clientsapi.get(`/${id}`)
}

export const createClient = (client) => {
    return clientsapi.post('/', client)
}

export const deleteClient = (id) => {
    return clientsapi.delete(`/${id}`)
}

export const updateClient = (id, client) => {
    return clientsapi.put(`/${id}`, client)
}