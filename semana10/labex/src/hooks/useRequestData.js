import axios from 'axios';
import { useEffect, useState } from 'react';

function useRequestData(initialData, url) {

    const [data, setData] = useState(initialData)

    const getData = () => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.trips)
            setData(res.data.trips)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}

export default useRequestData;