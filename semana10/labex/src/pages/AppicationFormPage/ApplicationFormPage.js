import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator'

import {ContainerForm, Container, ContainerApplication } from './style'
import Header from '../../components/Header/Header';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import swal from 'sweetalert';


function ApplicationFormPage() {

    const history = useHistory()

    const [trips, setTrips] = useState([])
    const { form, onChange, cleanFields } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
        trip: null
    })

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

    const applyToTrip = (e) => {
        e.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)
            .then((res) => {
                swal({
                    title: "",
                    text: "Perfil aplicado a viagem!",
                    icon: "success",
                });
                cleanFields()
            })
            .catch((err) => {
                swal({
                    title: "Erro!",
                    text: "Problema ao aplicar para viagem, tente novamente!",
                    icon: "error",
                });
            })
    }

    const listTripsName = trips.map((trip) => {
        return <MenuItem value={trip}>{trip.name}</MenuItem>
    })


    return (
        <ContainerApplication>
            <Header
                buttonFormName={'Inscreva-se'}
                pageFormName={() => goToApplicationFormPage(history)}
                buttonName={'Login'}
                pageName={() => goToLoginPage(history)}

            />
            <Container>
                <Typography variant={'h5'}>Inscreva-se</Typography>
                <ContainerForm onSubmit={applyToTrip}>
                    <FormControl>
                        <InputLabel id="trip">Viagem</InputLabel>
                        <Select
                            labelId="Escolha uma viagem"
                            id="trip"
                            name={'trip'}
                            onChange={onChange}
                            value={form.trip}
                            required
                        >
                            {listTripsName}
                        </Select>
                    </FormControl>
                    <TextField
                        label={'Nome'}
                        name={'name'}
                        onChange={onChange}
                        value={form.name}
                        type={'text'}
                        inputProps={{ pattern: '^.{3,}' }}
                        required
                    />
                    <TextField
                        label={'Idade'}
                        name={'age'}
                        onChange={onChange}
                        value={form.age}
                        type={'number'}
                        min={18}
                        required
                    />

                    <TextField
                        label={'Descrição'}
                        name={'applicationText'}
                        onChange={onChange}
                        value={form.applicationText}
                        type={'text'}
                        inputProps={{ pattern: '^.{30,}' }}
                        helperText="Mínimo de 30 characteres"
                        required
                    />
                    <TextField
                        label={'Profissão'}
                        name={'profession'}
                        onChange={onChange}
                        value={form.profession}
                        type={'text'}
                        inputProps={{ pattern: '^.{10,}' }}
                        helperText="Mínimo de 10 characteres"
                        required
                    />
                    <FormControl>
                        <InputLabel id="country">País</InputLabel>
                        <Select
                            labelId="País"
                            id="country"
                            name={'country'}
                            onChange={onChange}
                            value={form.country}
                            required
                        >
                            <MenuItem value={'Brasil'}>Brasil</MenuItem>
                            <MenuItem value={'Argentina'}>Argentina</MenuItem>
                            <MenuItem value={'China'}>China</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant={'contained'} color={'primary'} type={'submit'}>Enviar</Button>
                </ContainerForm>
                <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
            </Container>
        </ContainerApplication>
    );
}

export default ApplicationFormPage;