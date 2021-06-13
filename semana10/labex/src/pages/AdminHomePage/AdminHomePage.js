import React, { useEffect, useState } from 'react';
import AdminListTrips from './AdminListTrips/AdminListTrips';
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData';
import axios from 'axios'
import { Button, Typography } from '@material-ui/core';
import { goToCreateTripPage, goToBack, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';

import { ContainerMenu, ContainerButtons } from './style'
import Header from '../../components/Header/Header';



function AdminHomePage() {
    // useProtectedPage()
    const history = useHistory()

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
            <Header
                buttonFormName={'Nova Viagem'}
                pageForName={() => goToCreateTripPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Logout'}
            />
            {/* <ContainerMenu>
                <Typography variant={'h3'} gutterBottom>Painel Administrativo</Typography>
                <ContainerButtons>
                    <div>
                        <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
                    </div>
                    <div>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToCreateTripPage(history)}>Nova Viagem</Button>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToLoginPage(history)}>Login</Button>
                    </div>
                </ContainerButtons>
            </ContainerMenu> */}
            {listTrips}
        </div>
    );
}

export default AdminHomePage;