import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import useProtectedPage from '../hooks/useProtectedPage';

function CreateTripPage() {
    useProtectedPage()
    
    return (
        <div>
            <HeaderAdmin />
            <h3>Nova Viagem</h3>
            <input />
            <select></select>
            <input type='date'/>
            <input />
            <input />
            <button>Adicionar Viagem</button>
        </div>
    );
}

export default CreateTripPage;