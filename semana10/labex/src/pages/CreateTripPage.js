import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import useProtectedPage from '../hooks/useProtectedPage';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
`

const ContainerForm = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

function CreateTripPage() {
    // useProtectedPage()

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
                // console.log(form)
                console.log('Viagem Cadastrada Com sucesso!')
                cleanFields()
            })
            .catch((err) => {
                console.log('Erro ao cadastrar Viagem, tente novamente!', err.response.status)
            })
    }

    return (
        <Container>
            <HeaderAdmin />
            <Typography variant={'h5'}>Nova Viagem</Typography>
            <ContainerForm onSubmit={createTrip}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome'}
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
                    label={'Descrição'}
                    value={form.description}
                    onChange={onChange}
                    pattern='^.{30,}'
                    title='Mínimo de 30 Characteres'
                    required
                />
                <TextField
                    name={'durationInDays'}
                    label={'Dias'}
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