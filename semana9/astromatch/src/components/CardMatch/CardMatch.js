import React from 'react';
import styled from 'styled-components';
import CardLike from '../CardLike/CardLike';

const CardMatchContainer = styled.div`
    border: 1px red solid;
    margin: 15px;

    img{
        width: 100%;
        border: 1px red solid;
    }
`

const InfoContainer = styled.div`
    background-color: lightgray;
    padding: 15px;

    p {
        margin: 0;
    }
`

function CardMatch(props) {
    return (
        <CardMatchContainer>
            <img src='https://picsum.photos/400/400' />
            <InfoContainer>
                <p>Nome da Pessoa, idade</p>
                <p>Descrição</p>
            </InfoContainer>

            <CardLike />
        </CardMatchContainer>
    );
}

export default CardMatch;