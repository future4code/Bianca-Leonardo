import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import { goToSignUp } from '../../routes/coordinator';
import { ContainerLogin, FormContainer } from './style';
import {toDoLogin} from '../../services/users'
import Loading from '../../components/Loading/Loading';

const LoginPage = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [form, onChange, clear] = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = (e) => {
        e.preventDefault()
        toDoLogin(form, history, setLoading)
    }


    return (
        <ContainerLogin>
            <Typography variant={'h4'}>
                Login
            </Typography>
            <FormContainer onSubmit={onSubmitLogin}>
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
                    required
                />
                <Button type={'submit'} variant={'contained'} color={'primary'}>{loading ? <CircularProgress color={'inherit'} size={24} /> : 'Fazer Login'}</Button> 
            </FormContainer>
            <Button onClick={() => goToSignUp(history)}>Ainda não é cadastrado? Cadastre-se</Button>
        </ContainerLogin>
    );
};

export default LoginPage;