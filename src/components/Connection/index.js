import axios from 'axios';

const API = axios.create({ baseURL: "https://projeto-2hcbro0ae-nicolasnilo14-gmailcom.vercel.app/clientes" })

const get = async () => {
    const res = await API.get('/')
    return res.data;
}

const getId = async (id) => {
    const res = await API.get(`/${id}`)
    return res;
}

const post = async (data) => {
    const res = await API.post('https://projeto-2hcbro0ae-nicolasnilo14-gmailcom.vercel.app/clientes/register', data)
    return res;
}

const put = async (id, data) => {
    const res = await API.put(`https://projeto-2hcbro0ae-nicolasnilo14-gmailcom.vercel.app/clientes/update/${id}`, data)
    return res;
}

const del = (id) => {
    const res = API.delete(`https://projeto-2hcbro0ae-nicolasnilo14-gmailcom.vercel.app/clientes/delete/${id}`)
    return res;
}

export {
    get,
    getId,
    post,
    put,
    del,
}