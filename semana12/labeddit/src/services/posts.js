import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPost = (body, getRequest, clear) => {
    const header = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            alert(res.data)
            getRequest()
            clear()
        })
        .catch((err) => {
            alert('Erro ao criar Post, tente novamente!')
        })
}