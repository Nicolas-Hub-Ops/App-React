import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:3001/clientes" })

const get = async () => {
    const res = await API.get('/')
    return res.data;
}

const post = async (data) => {
    const res = await API.post('http://localhost:3001/clientes/register', data)
    return res;
}

const put = async (id, data) => {
    const res = await API.put(`http://localhost:3001/clientes/update/${id}`, data)
    return res;
}

const del = (id) => {
    const res = API.delete(`http://localhost:3001/clientes/delete/${id}`)
    return res;
}

export {
    get,
    post,
    put,
    del,
}