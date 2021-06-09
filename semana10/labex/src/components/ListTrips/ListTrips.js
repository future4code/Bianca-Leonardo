import React from 'react';
import {Container} from './style'

function ListTrips(props) {
    return (
        <Container>
            <p>Nome: {props.trips.name}</p>
            <p>Descrição: {props.trips.description}</p>
            <p>Planeta: {props.trips.planet}</p>
            <p>Duração: {props.trips.durationInDays} dias</p>
            <p>Data: {props.trips.date}</p>
        </Container>
    );
}

export default ListTrips;