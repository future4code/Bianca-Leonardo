import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import CardPrincipal from '../components/CardPrincipal/CardPrincipal';
import { URL_BASE } from '../constants/Url';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function PageHome() {

    const clear = () => {
        axios.put(`${URL_BASE}/clear`)
        .then((res) => {
            console.log('clear')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <PageContainer>
            <CardPrincipal />
            <button onClick={clear}>Resetar Matches</button>
        </PageContainer>
    );
}

export default PageHome;