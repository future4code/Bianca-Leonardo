import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createComment = (id, body, useRequest, clear) => {
    const header = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, header)
    .then((res) => {
        alert(res.data)
        useRequest()
        clear()
    })
    .catch((err) => {
        alert('Erro ao adicionar comentário, tente novamente!')
    })
}