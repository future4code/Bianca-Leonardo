import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
`

function Header(props) {
    return (
        <HeaderContainer>
            <button onClick={props.goToCardPrincipal}>Matches</button>
            <h3>astromach</h3>
            <button onClick={props.goToListMatches}>Lista</button>
        </HeaderContainer>
    );
}

export default Header;