import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import { goToAdminHomePage, goToHomePage } from '../../routes/coordinator';

import {Container, FormContainer} from './style'


function LoginPage() {
    const history = useHistory()
    const { form, onChange } = useForm({ email: '', password: '' })

    const toDoLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToAdminHomePage(history)
            })
            .catch((err) => {
                swal({
                    title: "Erro!",
                    text: `${err.response.data.message}`,
                    icon: "error",
                  });
            })
    }

    return (
        <Container>
            <Typography variant={'h4'}>Login</Typography>
            <FormContainer onSubmit={toDoLogin}>
                <TextField
                    label={'E-mail'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    type={'email'}
                    required
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    type={'password'}
                    required
                />
                <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
            </FormContainer>
            <Button variant={'contained'} color={'default'} onClick={() => goToHomePage(history)}>Voltar</Button>
        </Container>
    );
}

export default LoginPage;