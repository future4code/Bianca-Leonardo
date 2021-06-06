import React from 'react';
import { useState } from 'react';
import CardMatch from '../CardMatch/CardMatch';
import ListMatches from '../ListMatches/ListMatches';
import Header from '../Header/Header';
import {CardPrincipalContainer} from './style'


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
                page={page}
            />
            {changePage()}
        </CardPrincipalContainer>
    );
}

export default CardPrincipal;