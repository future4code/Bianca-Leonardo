import axios from 'axios';
import { useEffect, useState } from 'react';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    // useEffect(() => {
    //     getRequest()
    // }, [])

    const getRequest = () => {
        const header = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(url, header)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
                alert('Ocorreu um erro, tente novamente')
            })
    }
    return [data, getRequest]
};

export default useRequestData;