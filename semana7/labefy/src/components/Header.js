import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    background-color: #0033cc;

    @media(max-width: 700px){
        flex-direction: column;
        padding: 5px 50px;
    }

    h1{
        color: white;
    }

    button{
        margin: 0 10px;
        padding: 5px 2px;
        border: none;
        border-bottom: 1px solid #0033cc;
        background-color: #0033cc;
        color: white;
        font-size: 16px;

        :hover{
            border-bottom: 1px solid #e6f5ff;
            color: #e6f5ff;
        }
    }

    span{
        color: white;
    }
`

const ContainerBotao = styled.div`
    padding: 5px;
`

export default function Header(props){
    return (
        <Container>
            <h1>
                Labefy
            </h1>
            <ContainerBotao>
                {/* Recebe props de App.js */}
                <button onClick={props.onChangeCriarPlaylist}>Criar Playlist</button>
                <span>|</span>
                <button onClick={props.onChangePlaylist}>Ver Playlists</button>
            </ContainerBotao>
        </Container>
    )
}