import axios from 'axios';

export const getAllTasks = () => {
    return axios.get('http://localhost:3000')
}