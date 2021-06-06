import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    border-bottom: 1px solid lightgray;
`

const MenuCotainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    button {
        border: none;
        color: lightgray;
        background-color: transparent;

        :hover{
            color: blue;
        }
    }
`

const ButtonInativo = styled.button`
    background-color: white; 
    border: white;
    color: white;
    width: 39px;
`

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
            {/* <button onClick={props.goToCardPrincipal}>Matches</button>
            <h3>astromach</h3>
            <button onClick={props.goToListMatches}>Lista</button> */}
        </HeaderContainer>
    );
}

export default Header;