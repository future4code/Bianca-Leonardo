import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { ThemeConsumer } from 'styled-components';
import { BASE_URL } from '../constants/urls';
import useInput from '../hooks/useInput';
import { goToAdminHomePage, goToBack } from '../routes/coordinator';

function LoginPage() {
    const history = useHistory()
    const [email, onChangeEmail] = useInput('')
    const [password, onChangePassword] = useInput('')

    const toDoLogin = () => {

        const body = {
            email,
            password
        }

        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            // console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            goToAdminHomePage(history)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>Login</h3>
            <input value={email} onChange={onChangeEmail} placeholder={'E-mail'}/>
            <input value={password} onChange={onChangePassword} placeholder={'Senha'}/>
            <button onClick={() => goToBack(history)}>Voltar</button>
            <button onClick={toDoLogin}>Entrar</button>
        </div>
    );
}

export default LoginPage;