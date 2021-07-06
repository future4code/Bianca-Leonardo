import axios from "axios"
import Swal from "sweetalert2"
import { BASE_URL } from "../constants/urls"

export const createPost = (body, getRequest, clear) => {
    const header = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.post(`${BASE_URL}/posts`, body, header)
        .then((res) => {
            Swal.fire(
                '',
                res.data,
                'success'
              )
            getRequest()
            clear()
        })
        .catch((err) => {
            Swal.fire(
                '',
                'Erro ao criar Post, tente novamente!',
                'error'
              )
        })
}