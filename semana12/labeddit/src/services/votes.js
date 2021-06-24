import axios from "axios"

export const postVote = (value, getRequest, userVote, path) => {
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
        axios.post(path, body, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })

    } else if (userVote === value) {
        // remove vote
        axios.delete(path, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })
    } else {
        // change vote
        axios.put(path, body, header)
            .then((res) => {
                getRequest()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
}

