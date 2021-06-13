import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ListTrips from './ListTrips/ListTrips';
import { BASE_URL } from '../../constants/urls';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator';

import {ContainerMenu, ContainerButtons} from './style'
import Header from '../../components/Header/Header';



function ListTripsPage() {
    const history = useHistory()
    const [trips, setTrips] = useState([])
    // const trips = useRequestData([], `${BASE_URL}/trips`)

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                console.log(res.data.trips)
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
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
                buttonFormName={'Inscrever-se'}
                pageForName={() => goToApplicationFormPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Login'}
            />
            {/* <ContainerMenu>
                <Typography variant={'h3'} gutterBottom>LabeX</Typography>
                <ContainerButtons>
                    <div>
                        <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
                    </div>
                    <div>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToApplicationFormPage(history)}>Inscrever-se</Button>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToLoginPage(history)}>Login</Button>
                    </div>
                </ContainerButtons>
            </ContainerMenu> */}

            {listTrips}
        </div>
    );
}

export default ListTripsPage;