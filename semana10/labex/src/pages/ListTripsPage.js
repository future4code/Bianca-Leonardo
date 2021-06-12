import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import ListTrips from '../components/ListTrips/ListTrips';
import { BASE_URL } from '../constants/urls';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../routes/coordinator';

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 500px;

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`

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
            <ContainerMenu>
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
            </ContainerMenu>

            {listTrips}
        </div>
    );
}

export default ListTripsPage;