import axios from 'axios';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

function useRequestData(initialData, url) {

    const [data, setData] = useState(initialData)

    const getData = () => {
        axios.get(url)
        .then((res) => {
            // console.log(res.data.trips)
            setData(res.data.trips)
        }).catch((err) => {
            swal({
                title: "Erro!",
                text: "Problema ao carregar a página!",
                icon: "error",
              });
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return [data]
}

export default useRequestData;