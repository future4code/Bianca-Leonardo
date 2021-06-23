import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { createLogin } from '../../services/users';
import { ContainerSignUp, FormContainer } from './style';
import Loading from '../../components/Loading/Loading'

const SignUpPage = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [form, onChange, clear] = useForm({
        username: '',
        email: '',
        password: ''
    })

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        createLogin(form, history, setLoading)
    }


    return (
        <ContainerSignUp>
            <Typography variant={'h4'}>
                Cadastre-se
            </Typography>
            <FormContainer onSubmit={onSubmitSignUp}>
                <TextField
                    type={'text'}
                    label={"Nome"}
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    margin={'normal'}
                    required
                />
                <TextField
                    type={'email'}
                    label={"E-mail"}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    margin={'normal'}
                    required
                />
                <TextField
                    type={'password'}
                    label={"Senha"}
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    margin={'normal'}
                    required
                />
                <Button type={'submit'} variant={'contained'} color={'primary'}>{loading ? <CircularProgress color={'inherit'} size={24} /> : 'Fazer Cadastro'}</Button>

            </FormContainer>
            <Button onClick={() => goToLogin(history)}>Já tem cadastro? Faça o Login</Button>
        </ContainerSignUp>
    );
};

export default SignUpPage;