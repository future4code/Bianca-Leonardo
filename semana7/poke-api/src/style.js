import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const ContainerCardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    select {
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        background-color: white;
        padding: 5px 8px;
        outline: none;
    }
`

export const CardPokemon = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EE6154;
    border-radius: 20px;
    padding: 20px;
    color: white;
    font-weight: 800;
    border: 1px red solid;
    margin-top: 20px;

    h4 {
        text-transform: capitalize;
    }

    img {
        width: 100px;
    }
`

export const InfoCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 4px 0;
        background: rgb(246, 169, 162);
        padding: 5px 10px;
        border-radius: 10px;
    }
`