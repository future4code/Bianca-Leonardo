import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 700px){
        width: 100%;
    }
`

export const ContainerCandidates = styled.div`
    display: flex;
    width: 100%;

    @media(max-width: 700px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
    }

    div{
        width: 99%;

        @media(max-width: 700px){
        width: 100%;
        /* padding: 5px; */
    }
    }
`