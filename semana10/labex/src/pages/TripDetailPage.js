import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Candidates from '../components/Candidates/Candidates';
import DetailTrip from '../components/DetailTrip/DetailTrip';
import Header from '../components/HeaderAdmin/HeaderAdmin';
import { BASE_URL } from '../constants/urls';
import useProtectedPage from '../hooks/useProtectedPage';

function TripDetailPage(props) {

    const [detailTrip, setDetailTrip] = useState({})

    useProtectedPage()
    const params = useParams()

    useEffect(() => {
        getTripDetail(params.id)
        // console.log(props.id)
    }, [])

    const getTripDetail = (id) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(`${BASE_URL}/trip/${id}`, header)
        .then((res) => {
            console.log(res.data.trip)
            setDetailTrip(res.data.trip)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header />
            <DetailTrip 
                name={detailTrip.name}
                description={detailTrip.description}
                planet={detailTrip.planet}
                duration={detailTrip.durationInDays}
                date={detailTrip.date}
            />
            <Candidates />
        </div>
    );
}

export default TripDetailPage;