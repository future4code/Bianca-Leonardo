import React from 'react';
import styled from 'styled-components';

const CardLikeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px;
`

function CardLike(props) {
    return (
        <CardLikeContainer>
            <button onClick={props.noMatch}>Não</button>
            <button onClick={props.match}>Sim</button>
        </CardLikeContainer>
    );
}

export default CardLike;