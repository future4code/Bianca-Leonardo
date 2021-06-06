import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CardMatch from '../CardMatch/CardMatch';
import ListMatches from '../ListMatches/ListMatches';
import Header from '../Header/Header';

const CardPrincipalContainer = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid lightgray;
`

function CardPrincipal() {


    const [page, setPage] = useState('cardMatch')

    const changePage = () => {
        switch (page) {
            case 'cardMatch':
                return <CardMatch />
            case 'listMatches':
                return <ListMatches />
            default:
                return <CardMatch />
        }
    }

    const goToCardPrincipal = () => {
        setPage('cardMatch')
    }

    const goToListMatches = () => {
        setPage('listMatches')
    }

    return (
        <CardPrincipalContainer>
            <Header
                goToCardPrincipal={goToCardPrincipal}
                goToListMatches={goToListMatches}
            />
            {changePage()}
        </CardPrincipalContainer>
    );
}

export default CardPrincipal;