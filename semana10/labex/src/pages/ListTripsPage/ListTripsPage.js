import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ListTrips from './ListTrips/ListTrips';
import { BASE_URL } from '../../constants/urls';
import { goToApplicationFormPage, goToLoginPage } from '../../routes/coordinator';

import {ContainerMenu, ContainerButtons} from './style'
import Header from '../../components/Header/Header';
import swal from 'sweetalert';



function ListTripsPage() {
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                swal({
                    title: "Erro!",
                    text: "Problema ao carregar a página!",
                    icon: "error",
                  });
            })
    }

    const listTrips = trips && trips.map((trip) => {
        return <ListTrips
            trips={trip}
        />
    })
    return (
        <div>
            <Header
                buttonFormName={'Inscreva-se'}
                pageFormName={() => goToApplicationFormPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Login'}
            />

            {listTrips}
        </div>
    );
}

export default ListTripsPage;