import React from 'react';
import { useHistory } from 'react-router';
import { goToAdminHomePage, goToBack } from '../routes/coordinator';

function LoginPage() {

    const history = useHistory()
    return (
        <div>
            <h3>Login</h3>
            <input placeholder={'E-mail'}/>
            <input placeholder={'Senha'}/>
            <button onClick={() => goToBack(history)}>Voltar</button>
            <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
        </div>
    );
}

export default LoginPage;