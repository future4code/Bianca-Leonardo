import React from 'react';
import styled from 'styled-components';

const ListMatchesContainer = styled.div`
    display: flex;
    margin: 10px 20px;
    align-items: center;

    img{
        border-radius: 50%;
        margin-right: 10px;
        width: 40px;
        height: 40px;
    }
`

function CardListMatches(props) {
    return (
        <ListMatchesContainer key={props.id}>
            <img src={props.photo} />
            <p>{props.name}</p>
        </ListMatchesContainer>
    );
}

export default CardListMatches;