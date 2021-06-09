import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import ListTrips from '../components/ListTrips/ListTrips';
import { BASE_URL } from '../constants/urls';

function ListTripsPage() {

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
        return <ListTrips 
            trips={trip}
        />
    })
    return (
        <div>
            <Header />
            {listTrips}
        </div>
    );
}

export default ListTripsPage;