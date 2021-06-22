import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useForm from '../../hooks/useForm';
import { ContainerSignUp, FormContainer } from './style';

const SignUpPage = () => {
    const [form, onChange, clear] = useForm({
        username: '',
        email: '',
        password: ''
    })


    return (
        <ContainerSignUp>
            <Typography variant={'h3'}>
                Criar Cadatro
            </Typography>
            <FormContainer>
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
                <Button variant={'contained'} color={'primary'}>Fazer Cadastro</Button>
            </FormContainer>
        </ContainerSignUp>
    );
};

export default SignUpPage;