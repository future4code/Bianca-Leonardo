import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    input {
        width: 300px;
        margin-bottom: 20px;
        outline: none;
        border: none;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid #ccc;
    }

    button {
        border: none;
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #0033cc;
        color: white;

        :hover{
            background-color: #668cff;
        }
    }
`


export default class TelaCriarPlaylist extends React.Component {
    state = {
        inputName: '',
    }

    onChangeInputName = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }

    createPlaylist = (e) => {
        e.preventDefault()
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        const body = {
            name: this.state.inputName
        }

        axios.post(url, body, header)
        .then((res) => {
            alert('Playlist Cadastrada com Sucesso!')
            this.setState({
                inputName: ''
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    
    render() {
        return (
            <Container>
                <ContainerForm onSubmit={this.createPlaylist}>
                    <h2>Crie sua Playlist</h2>
                    <input
                        placeholder='Digite o nome da Playlist'
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                    />
                    <button type='submit'>Criar Playlist</button>
                </ContainerForm>
                
            </Container>
        )
    }
}