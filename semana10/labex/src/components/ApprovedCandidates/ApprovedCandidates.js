import React from 'react';

function ApprovedCandidates(props) {
    return (
        <div>
            <div key={props.approved.id}>
                <p>Name: {props.approved.name}</p>
                <p>Idade: {props.approved.age}</p>
                <p>País: {props.approved.country}</p>
                <p>Profissão: {props.approved.profession}</p>
                <p>Descrição: {props.approved.applicationText}</p>
            </div>
        </div>
    );
}

export default ApprovedCandidates;