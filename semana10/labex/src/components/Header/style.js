import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px lightgray solid;

    @media(max-width: 700px){
        width: 100%;
    }

    a{
        text-decoration: none;
        color: black;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 500px;

    @media(max-width: 700px){
        width: 100%;
        gap: 10%;
        padding: 5px;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`