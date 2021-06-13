import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    align-items: center;
    width: 100%;
`

export const ContainerForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media(max-width: 700px){
        width: 90%;
    }
`


export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 500px;

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`