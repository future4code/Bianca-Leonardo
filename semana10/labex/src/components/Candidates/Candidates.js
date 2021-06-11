import React from 'react';

function Candidates(props) {
    return (
        <div>
            
            <div key={props.candidate.id}>
                <p>Name: {props.candidate.name}</p>
                <p>Idade: {props.candidate.age}</p>
                <p>País: {props.candidate.country}</p>
                <p>Profissão: {props.candidate.profession}</p>
                <p>Descrição: {props.candidate.applicationText}</p>
                <button onClick={() => props.decideCandidate(props.params, props.candidate.id, true)}>Aprovar</button>
                <button onClick={() => props.decideCandidate(props.params, props.candidate.id, false)}>Reprovar</button>
            </div>
        </div>
    );
}

export default Candidates;