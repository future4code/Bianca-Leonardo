import styled from 'styled-components';

export const CardPrincipalContainer = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: 0 0 1em lightgray;

    @media(max-width: 600px){
        width: 100%;
    }
`