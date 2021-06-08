import React from 'react';
import { useHistory } from 'react-router';
import { goToDetailPage } from '../../routes/coordinator';

function AdminListTrips() {
    const history = useHistory()
    
    return (
        <div>
            <p>Nome: Viagem 1</p>
            <p>Descrição: Viagem para tal lugar</p>
            <p>Data: 20/10/2021</p>
            <button onClick={() => goToDetailPage(history)}>Ver Viagem</button>
        </div>
    );
}

export default AdminListTrips;