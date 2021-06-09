import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import {HeaderContainer, MenuCotainer, ButtonInativo} from './style'


function Header(props) {
    return (
        <HeaderContainer>
            {props.page === 'cardMatch' ?
                <MenuCotainer>
                    <ButtonInativo></ButtonInativo>
                    <h2>astromach</h2>
                    <button onClick={props.goToListMatches}><FontAwesomeIcon icon={faComments} size='2x'/></button>
                </MenuCotainer> :
                <MenuCotainer>
                    <button onClick={props.goToCardPrincipal}><FontAwesomeIcon icon={faArrowLeft} size='2x'/></button>
                    <h2>astromach</h2>
                    <ButtonInativo></ButtonInativo>
                </MenuCotainer>
            }
        </HeaderContainer>
    );
}

export default Header;