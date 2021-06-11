import React from 'react';
import { useHistory } from 'react-router';
import { goToDetailPage } from '../../routes/coordinator';

function AdminListTrips(props) {
    const history = useHistory()

    // const getTripDetail

    // const trips = props.trips

    return (
        <div>
            {props && props.trips && props.trips.id ?
                <div key={props.trips.id}>
                    <p>Nome: {props.trips.name}</p>
                    <p>Descrição: {props.trips.description}</p>
                    <p>Data: {props.trips.date}</p>
                    <button onClick={() => goToDetailPage(history, props.trips.id)}>Ver Viagem</button>
                    <button onClick={() => props.deleteTrip(props.trips.id)}>Excluir</button>
                </div> : <p>Carregando...</p>
        }

        </div>

    );
}

export default AdminListTrips;