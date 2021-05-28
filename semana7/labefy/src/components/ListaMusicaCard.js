import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 20px;
    margin-bottom: 10px;
    justify-content: center;

    h4, h5{
        margin: 4px;
    }

    button {
        border: none;
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #0033cc;
        color: white;
        margin: 0 5px;
        margin-top: 8px;
        margin-left: 15%;

        @media(max-width: 700px){
            margin-left: 55%;;
        }

        :hover{
            transition: 1ms;
            background-color: #668cff;
        }
    }
`

const ContainerInfo = styled.div`
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    audio {
        margin-top: 8px;
    }

    span {
        text-transform: capitalize;
    }
`

export default function ListaMusicaCard(props) {
    return (
        <Container key={props.id}>
            <ContainerInfo>
                <div>
                    <span><strong>{props.name}</strong></span>
                    <span> - </span>
                    <span>{props.artist}</span>
                </div>
                <audio controls>
                    <source src={props.url} type="audio/ogg" />
                </audio>
            </ContainerInfo>
            <button onClick={() => props.deleteTrackMusic(props.id)}>Excluir Música</button>
        </Container>
    )
}