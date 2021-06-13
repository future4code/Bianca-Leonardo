import React from 'react';
import { useHistory } from 'react-router';
import { Button, Typography, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator'

import {ContainerMenu, ContainerButtons, ContainerForm, Container} from './style'


function ApplicationFormPage() {

    const history = useHistory()

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
            <Container>
                <Typography variant={'h5'}>Inscreva-se</Typography>
                <ContainerForm onSubmit={''}>
                    <FormControl>
                        <InputLabel id="trip">Viagem</InputLabel>
                        <Select
                            labelId="Escolha uma viagem"
                            id="trip"
                        >
                            <MenuItem value={10}>Viagem para a lua</MenuItem>
                            <MenuItem value={20}>Viagem para o além</MenuItem>
                            <MenuItem value={30}>Viagem para Plutão</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label={'Nome'} name={'name'} type={'text'} />
                    <TextField label={'Idade'} name={'age'} type={'number'} />
                    <TextField label={'Descrição'} name={'applicationText'} type={'text'} />
                    <TextField label={'Profissão'} name={'profession'} type={'text'} />
                    <FormControl>
                        <InputLabel id="country">País</InputLabel>
                        <Select
                            labelId="Paí"
                            id="country"
                        >
                            <MenuItem value={10}>Brasil</MenuItem>
                            <MenuItem value={20}>Argentina</MenuItem>
                            <MenuItem value={30}>China</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant={'contained'} color={'primary'}>Enviar</Button>
                </ContainerForm>
                <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
            </Container>
        </div>
    );
}

export default ApplicationFormPage;