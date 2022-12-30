import axios from "axios";
import { Storage } from "expo-storage";
const baseURL = 'https://www.tabnews.com.br/api/v1'

export const CreateSession = async (email, password) => {
    const options = {
        method: 'POST',
        url: `${baseURL}/sessions`,
        headers: {
            cookie: 'session_id=0d41300e8e4ce003b909ffca0c783e87f59eb1410931ecf75e28d38b58ae202753525ba6d8dff1e981bf2c3a1840d40c',
            'Content-Type': 'application/json'
        },
        data: { email: email, password: password }
    };
    const res = await axios.request(options)
    await Storage.setItem({
        key: 'session',
        value: JSON.stringify(res.data)
    })
    return res.status
}


export const getFeed = async (page, perPage, strategy) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/contents`,
        params: { page: page, per_page: perPage, strategy: strategy },
    };

    const res = await axios.request(options)
    return (res.data)
}

export const getPost = async (user, slug) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/contents/${user}/${slug}`,
    };

    const res = await axios.request(options)
    return (res.data)
}

export const getComments = async (user, slug) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/contents/${user}/${slug}/children`,
    };

    const res = await axios.request(options)
    return res.data
}