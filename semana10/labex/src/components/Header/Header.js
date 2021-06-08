import React from 'react';
import { useHistory } from 'react-router';
import { goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator';

function Header() {

    const history = useHistory()

    return (
        <div>
            <h2>LabeX</h2>
            <button onClick={() => goToBack(history)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
            <button onClick={() => goToLoginPage(history)}>Login</button>
        </div>
    );
}

export default Header;