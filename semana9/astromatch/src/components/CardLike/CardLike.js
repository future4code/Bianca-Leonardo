import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

import {CardLikeContainer, ButtonNo, ButtonYes} from './style'

function CardLike(props) {
    return (
        <CardLikeContainer>
            <ButtonNo onClick={props.noMatch}><FontAwesomeIcon icon={faTimes} color='green'flip="both"/></ButtonNo>
            <ButtonYes onClick={props.match}><FontAwesomeIcon icon={faHeart} color='fuchsia'/></ButtonYes>
        </CardLikeContainer>
    );
}

export default CardLike;