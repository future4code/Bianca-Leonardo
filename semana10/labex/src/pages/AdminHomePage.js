import React, { useEffect } from 'react';
import AdminListTrips from '../components/AdminListTrips/AdminListTrips';
import Header from '../components/HeaderAdmin/HeaderAdmin'
import useProtectedPage from '../hooks/useProtectedPage';
import {BASE_URL} from '../constants/urls'
import useRequestData from '../hooks/useRequestData';
import axios from 'axios'

function AdminHomePage() {
    useProtectedPage()

    const trips = useRequestData([], `${BASE_URL}/trips`)

    useEffect(() => {
    }, [])

    const deleteTrip = (id) => {

        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }

    const listTrips = trips.map((trip) => {
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