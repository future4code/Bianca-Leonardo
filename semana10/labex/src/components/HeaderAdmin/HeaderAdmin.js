import React from 'react';
import { useHistory } from 'react-router';
import { goToBack, goToCreateTripPage, goToLoginPage } from '../../routes/coordinator';

function HeaderAdmin() {

    const history = useHistory()
    return (
        <div>
            <h2>Painel Administrativo</h2>
            <button onClick={() => goToBack(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Nova Viagem</button>
            <button onClick={() => goToLoginPage(history)}>Sair</button>
        </div>
    );
}

export default HeaderAdmin;