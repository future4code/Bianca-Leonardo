import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

const CardLikeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin: 20px;
`

const ButtonNo = styled.button`
    background-color: white;
    font-size: 30px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        font-size: 36px;
    }
`

const ButtonYes = styled.button`
    background-color: white;
    font-size: 28px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        font-size: 36px;
    }
`

function CardLike(props) {
    return (
        <CardLikeContainer>
            <ButtonNo onClick={props.noMatch}><FontAwesomeIcon icon={faTimes} color='green'flip="both"/></ButtonNo>
            <ButtonYes onClick={props.match}><FontAwesomeIcon icon={faHeart} color='fuchsia'/></ButtonYes>
        </CardLikeContainer>
    );
}

export default CardLike;