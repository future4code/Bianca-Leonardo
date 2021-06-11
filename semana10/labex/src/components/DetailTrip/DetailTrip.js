import React from 'react';

function DetailTrip(props) {
    return (
        <div key={props.id}>
            <h3>Detail Trip</h3>
            <p>Nome: {props.name}</p>
            <p>Descrição: {props.description}</p>
            <p>Planeta: {props.planet}</p>
            <p>Duração: {props.duration} dias</p>
            <p>Data: {props.date}</p>
        </div>
    );
}

export default DetailTrip;