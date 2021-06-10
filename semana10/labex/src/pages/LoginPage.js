import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import useInput from '../hooks/useInput';
import { goToAdminHomePage, goToBack } from '../routes/coordinator';

function LoginPage() {
    const history = useHistory()
    // const [email, onChangeEmail] = useInput('')
    // const [password, onChangePassword] = useInput('')
    const { form, onChange } = useForm({ email: '', password: '' })

    const toDoLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/login`, form)
            .then((res) => {
                // console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                goToAdminHomePage(history)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={toDoLogin}>
                <input
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    placeholder={'E-mail'}
                    type={'email'}
                    required
                />
                <input
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    placeholder={'Senha'}
                    type={'password'}
                    required
                />
                <button type={'submit'}>Entrar</button>
            </form>
            <button onClick={() => goToBack(history)}>Voltar</button>
            {/* {console.log(form)} */}
        </div>
    );
}

export default LoginPage;