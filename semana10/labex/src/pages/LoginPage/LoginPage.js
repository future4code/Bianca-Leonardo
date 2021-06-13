import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import { goToAdminHomePage, goToBack } from '../../routes/coordinator';


const Container = styled.div`
    text-align: center;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 30px 0;
    gap: 16px;
`

function LoginPage() {
    const history = useHistory()
    // const [email, onChangeEmail] = useInput('')
    // const [password, onChangePassword] = useInput('')
    const { form, onChange } = useForm({ email: '', password: '' })

    const toDoLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/login`, form)
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                goToAdminHomePage(history)
            })
            .catch((err) => {
                console.log(err.response.data.message)
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
            <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
            {/* {console.log(form)} */}
        </Container>
    );
}

export default LoginPage;