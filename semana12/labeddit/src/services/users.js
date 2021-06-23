import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const createLogin = (body, history, setLoading) => {
    setLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToFeed(history)
            setLoading(false)
        })
        .catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
        })
};

export const toDoLogin = (body, history, setLoading) => {
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToFeed(history)
            setLoading(false)
        })
        .catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
        })
}