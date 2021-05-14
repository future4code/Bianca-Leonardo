import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function PerguntaFechada(props) {
    return <Container>
        <p>{props.pergunta}</p>
        <select name='ensino' id='ensino'>
            <option>{props.opcoes[0]}</option>
            <option>{props.opcoes[1]}</option>
            <option>{props.opcoes[2]}</option>
            <option>{props.opcoes[3]}</option>
        </select>
    </Container>
}