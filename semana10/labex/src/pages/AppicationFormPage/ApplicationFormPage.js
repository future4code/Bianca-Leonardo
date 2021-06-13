import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Typography, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator'

import { ContainerMenu, ContainerButtons, ContainerForm, Container } from './style'
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
        country: ''
    })

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
                swal({
                    title: "Erro!",
                    text: "Problema ao carregar a página!",
                    icon: "error",
                  });
            })
    }

    const applyToTrip = (tripId, e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/trips/${tripId}/apply`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const listTripsName = trips.map((trip) => {
        return <MenuItem value={trip.id}>{trip.name}</MenuItem>
    })

    return (
        <div>
            <Header
                buttonFormName={'Inscreva-se'}
                pageFormName={() => goToApplicationFormPage(history)}
                buttonName={'Login'}
                pageName={() => goToLoginPage(history)}

            />
            <Container>
                <Typography variant={'h5'}>Inscreva-se</Typography>
                <ContainerForm onSubmit={() => applyToTrip(trips.id)}>
                    <FormControl>
                        <InputLabel id="trip">Viagem</InputLabel>
                        <Select
                            labelId="Escolha uma viagem"
                            id="trip"
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
                    />
                    <TextField 
                    label={'Idade'} 
                    name={'age'} 
                    onChange={onChange}
                    value={form.age}
                    type={'number'} />
                    <TextField 
                    label={'Descrição'} 
                    name={'applicationText'} 
                    onChange={onChange}
                    value={form.applicationText}
                    type={'text'} 
                    />
                    <TextField 
                    label={'Profissão'} 
                    name={'profession'} 
                    onChange={onChange}
                    value={form.profession}
                    type={'text'} 
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
                            <MenuItem value={10}>Brasil</MenuItem>
                            <MenuItem value={20}>Argentina</MenuItem>
                            <MenuItem value={30}>China</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant={'contained'} color={'primary'} type='submit'>Enviar</Button>
                </ContainerForm>
                <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
            </Container>
        </div>
    );
}

export default ApplicationFormPage;