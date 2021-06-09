import React from 'react';

import {ListMatchesContainer} from './style'

function CardListMatches(props) {
    return (
        <ListMatchesContainer key={props.id}>
            <img src={props.photo} />
            <p>{props.name}</p>
        </ListMatchesContainer>
    );
}

export default CardListMatches;