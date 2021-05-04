import React from 'react'
import styled from 'styled-components'

const CardPequenoDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100%;
`

const Titulo = styled.span`
    margin-right: 5px;
`

const Imagem = styled.img`
    width: 30px;
    margin-right: 5px;  
`

export default function CardPequeno(props) {
    return (
        <CardPequenoDiv>
            <Imagem src={ props.imagem } />
            <Titulo>{ props.titulo }</Titulo>
            <span>{ props.conteudo }</span>
        </CardPequenoDiv>
    )
}