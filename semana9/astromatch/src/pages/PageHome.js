import React from 'react';
import styled from 'styled-components';
import CardPrincipal from '../components/CardPrincipal/CardPrincipal';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function PageHome() {
    return (
        <PageContainer>
            <CardPrincipal />
            <button>Resetar Matches</button>
        </PageContainer>
    );
}

export default PageHome;