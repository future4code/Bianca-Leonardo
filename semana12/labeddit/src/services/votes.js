import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createPostVote = (value, id, getRequest, userVote) => {
    const header = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const body = {
        direction: value
    }

    if (userVote == null) {
        // create vote
        axios.post(`${BASE_URL}/posts/${id}/votes`, body, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })

    } else if (userVote === value) {
        // remove vote
        axios.delete(`${BASE_URL}/posts/${id}/votes`, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })
    } else {
        // change vote
        axios.put(`${BASE_URL}/posts/${id}/votes`, body, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
}

