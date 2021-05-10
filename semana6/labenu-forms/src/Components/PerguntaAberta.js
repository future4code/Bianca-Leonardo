import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function PerguntaAberta(props) {
    return <Container>
        <p>{props.pergunta}</p>
        <input />
    </Container>
}