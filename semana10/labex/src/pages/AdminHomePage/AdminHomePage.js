import React, { useEffect, useState } from 'react';
import AdminListTrips from './AdminListTrips/AdminListTrips';
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { goToCreateTripPage, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';

import Header from '../../components/Header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import swal from 'sweetalert';
import {Container} from './style'



function AdminHomePage() {
    useProtectedPage()
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

    

    const deleteTrip = (id) => {

        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios.delete(`${BASE_URL}/trips/${id}`, header)
            .then((res) => {
                console.log('Viagem Excluida com Sucesso!')
                swal({
                    title: "",
                    text: "Viagem Excluida com Sucesso!",
                    icon: "success",
                  });
                getTrips()
            }).catch((err) => {
                swal({
                    title: "Erro!",
                    text: "Problema ao excluir viagem, Tente novamente!",
                    icon: "error",
                  });
            })

    }

    const listTrips = trips && trips.map((trip) => {
        return <AdminListTrips
            trips={trip}
            deleteTrip={deleteTrip}
        />
    })

    return (
        <Container>
            <Header
                buttonFormName={'Nova Viagem'}
                pageFormName={() => goToCreateTripPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Logout'}
            />
            {listTrips}
        </Container>
    );
}

export default AdminHomePage;