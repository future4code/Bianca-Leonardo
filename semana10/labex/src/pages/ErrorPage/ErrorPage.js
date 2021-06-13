import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

function ErrorPage() {
    return (
        <Container>
            <img src={'https://webinsider.com.br/wp-content/uploads/2019/01/Erro-404-1-1-1024x645.jpg'}/>
        </Container>
    );
}

export default ErrorPage;