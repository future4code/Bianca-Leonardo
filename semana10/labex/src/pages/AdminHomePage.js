import React from 'react';
import AdminListTrips from '../components/AdminListTrips/AdminListTrips';
import Header from '../components/HeaderAdmin/HeaderAdmin'
import useProtectedPage from '../hooks/useProtectedPage';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {BASE_URL} from '../constants/urls'

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

    const listTrips = trips.map((trip) => {
        return <AdminListTrips
            trips={trip}
        />
    })

    return (
        <div>
            <Header />
            {listTrips}
            {/* <AdminListTrips />
            <AdminListTrips />
            <AdminListTrips />
            <AdminListTrips /> */}
        </div>
    );
}

export default AdminHomePage;