import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import { goToSignUp } from '../../routes/coordinator';
import { ContainerLogin, FormContainer } from './style';

const LoginPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({
        email: '',
        password: ''
    })


    return (
        <ContainerLogin>
            <Typography variant={'h3'}>
                LoginPage
            </Typography>
            <FormContainer>
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
                <Button variant={'contained'} color={'primary'}>Fazer Login</Button>
            </FormContainer>
            <Button onClick={() => goToSignUp(history)}>Ainda não é cadastrado? Cadastre-se</Button>
        </ContainerLogin>
    );
};

export default LoginPage;