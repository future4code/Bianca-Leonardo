import React from 'react';
import styled from 'styled-components';

const ListMatchesContainer = styled.div`
    display: flex;
    margin: 10px 20px;
    align-items: center;

    img{
        border-radius: 50%;
        margin-right: 10px;
    }
`

function CardListMatches(props) {
    return (
        <ListMatchesContainer>
            <img src={'https://picsum.photos/40/40'} />
            <p>Nome da Pessoa</p>
        </ListMatchesContainer>
    );
}

export default CardListMatches;