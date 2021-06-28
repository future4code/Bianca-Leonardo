import { Button, CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header/Header';
import useForm from '../../hooks/useForm';
import { goToLogin } from '../../routes/coordinator';
import { createLogin } from '../../services/users';
import { ContainerSignUp, FormContainer } from './style';

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
        <div>
            <Header
                onclick={() => goToLogin(history)}
                buttonName={'Login'}
            />
            <ContainerSignUp>
                <Typography variant={'h4'}>
                    Cadastre-se
                </Typography>
                <FormContainer onSubmit={onSubmitSignUp}>
                    <TextField
                        type={'name'}
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
                        type={form.showPassword ? 'text' : 'password'}
                        label={"Senha"}
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        margin={'normal'}
                        helperText={'No mínimo 8 caracteres'}
                        required
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>{loading ? <CircularProgress color={'inherit'} size={24} /> : 'Fazer Cadastro'}</Button>

                </FormContainer>
                <Button onClick={() => goToLogin(history)}>Já tem cadastro? Faça o Login</Button>
            </ContainerSignUp>
        </div>
    );
};

export default SignUpPage;