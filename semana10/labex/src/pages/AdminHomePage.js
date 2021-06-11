import React, { useEffect, useState } from 'react';
import AdminListTrips from '../components/AdminListTrips/AdminListTrips';
import Header from '../components/HeaderAdmin/HeaderAdmin'
import useProtectedPage from '../hooks/useProtectedPage';
import {BASE_URL} from '../constants/urls'
import useRequestData from '../hooks/useRequestData';
import axios from 'axios'

function AdminHomePage() {
    useProtectedPage()

    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
        .then((res) => {
            // console.log(res.data.trips)
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const deleteTrip = (id) => {

        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then((res) => {
            console.log('Viagem Excluida com Sucesso!')
            getTrips()
        }).catch((err) => {
            console.log(` Erro ao excluir viagem, Tente novamente! ${err.response.status}`)
        })

    }

    const listTrips = trips && trips.map((trip) => {
        return <AdminListTrips
            trips={trip}
            deleteTrip={deleteTrip}
        />
    })

    return (
        <div>
            <Header />
            {listTrips}
        </div>
    );
}

export default AdminHomePage;