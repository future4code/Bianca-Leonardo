import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToCreateTripPage, goToLoginPage } from '../../routes/coordinator';

import {Container, ContainerForm, ContainerMenu, ContainerButtons} from './style'



function CreateTripPage() {
    useProtectedPage()
    const history = useHistory()

    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    const createTrip = (e) => {
        e.preventDefault()

        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.post(`${BASE_URL}/trips`, form, header)
            .then((res) => {
                swal({
                    title: "",
                    text: "Viagem Cadastrada com Sucesso!",
                    icon: "success",
                  });
                cleanFields()
            })
            .catch((err) => {
                swal({
                    title: "Erro!",
                    text: "Problema ao cadastrar Viagem, tente novamente!",
                    icon: "error",
                  });
            })
    }

    return (
        <Container>
            <Header
                buttonFormName={'Nova Viagem'}
                pageFormName={() => goToCreateTripPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Logout'}
            />
            
            <Typography variant={'h5'}>Nova Viagem</Typography>
            <ContainerForm onSubmit={createTrip}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome da Viagem'}
                    pattern='^.{5,}'
                    title='Mínimo de 5 Characteres'
                    required
                />
                <FormControl>
                    <InputLabel id={'planet'}>Planeta</InputLabel>
                    <Select
                    name={'planet'}
                    value={form.planet}
                    onChange={onChange}
                    labelId={'Planeta'}
                    id={'planet'}
                    required
                >
                    <MenuItem value={'mercurio'}>Mercúrio</MenuItem>
                    <MenuItem value={'terra'}>Terra</MenuItem>
                    <MenuItem value={'venus'}>Vênus</MenuItem>
                    <MenuItem value={'marte'}>Marte</MenuItem>
                    <MenuItem value={'jupiter'}>Júpiter</MenuItem>
                    <MenuItem value={'saturno'}>Saturno</MenuItem>
                    <MenuItem value={'urano'}>Urano</MenuItem>
                    <MenuItem value={'netuno'}>Netuno</MenuItem>
                    <MenuItem value={'plutao'}>Plutão</MenuItem>
                </Select>
                </FormControl>
                
                <TextField
                    name={'date'}
                    label={'Data da Viagem'}
                    value={form.date}
                    onChange={onChange}
                    type={'date'}
                    InputLabelProps={{
                        shrink: true,
                      }}
                    required
                />
                <TextField
                    name={'description'}
                    label={'Descrição da Viagem'}
                    value={form.description}
                    onChange={onChange}
                    inputProps={{pattern: '^.{30,}'}}
                    helperText="Mínimo de 30 characteres"
                    required
                />
                <TextField
                    name={'durationInDays'}
                    label={'Duração em dias'}
                    value={form.durationInDays}
                    onChange={onChange}
                    type={'number'}
                    min='50'
                    required
                />
                <Button variant={'contained'} color={'primary'} type='submit'>Adicionar Viagem</Button>
            </ContainerForm>
        </Container>
    );
}

export default CreateTripPage;