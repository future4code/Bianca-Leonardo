import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header/Header';
import { goToBack } from '../routes/coordinator';

function ApplicationFormPage() {

    const history = useHistory()
    
    return (
        <div>
            <Header />
            <h3>Inscrição</h3>
            <select></select>
            <input />
            <input />
            <input />
            <input />
            <select></select>
            <button onClick={() => goToBack(history)}>Voltar</button>
            <button>Enviar</button>
        </div>
    );
}

export default ApplicationFormPage;