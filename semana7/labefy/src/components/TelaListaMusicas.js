import React from 'react'
import ListaMusicaCard from './ListaMusicaCard'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px 0;
    text-align: center;

    
`

const BotaoVoltar = styled.button`
    border: none;
    padding: 8px 12px;
    border-radius: 10px;
    background-color: #0033cc;
    color: white;
    align-self: flex-end;
    margin-bottom: 10px;

    :hover{
        background-color: #668cff;
    }

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

        @media(max-width: 700px){
            width: 100%;
        }
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


export default class TelaListaMusicas extends React.Component {

    state = {
        listaMusicas: [],
        inputNameMusic: '',
        inputArtist: '',
        inputUrl: ''
    }

    onchangeNameMusic = (e) => {
        this.setState({
            inputNameMusic: e.target.value
        })
    }

    onchangeArtist = (e) => {
        this.setState({
            inputArtist: e.target.value
        })
    }

    onchangeUrl = (e) => {
        this.setState({
            inputUrl: e.target.value
        })
    }

    componentDidMount() {
        this.getListaMusicas()
    }

    getListaMusicas = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.get(url, header)
            .then((res) => {
                this.setState({
                    listaMusicas: res.data.result.tracks
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    deleteTrackMusic = (musicId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${musicId}`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.delete(url, header)
            .then((res) => {
                alert('Música excluida com sucesso')
                this.getListaMusicas()
            }).catch((err) => {
                console.log(err)
            })
    }

    adicionarTrack = (e) => {
        e.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        const body = {
            name: this.state.inputNameMusic,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }

        axios.post(url, body, header)
            .then((res) => {
                alert('Nova Música adicionada a Playlist')
                this.getListaMusicas()
                this.setState({
                    inputNameMusic: '',
                    inputArtist: '',
                    inputUrl: ''
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        const listarMusicas = this.state.listaMusicas.map((musica) => {
            return <ListaMusicaCard
                artist={musica.artist}
                name={musica.name}
                url={musica.url}
                id={musica.id}
                deleteTrackMusic={this.deleteTrackMusic}
            />
        })
        return <Container>
            {listarMusicas}

            <h2>Adicione mais músicas</h2>
            <ContainerForm onSubmit={this.adicionarTrack}>
                <input
                    placeholder={'Nome da Música'}
                    value={this.state.inputNameMusic}
                    onChange={this.onchangeNameMusic}
                />
                <input
                    placeholder={'Nome do(a) Artista'}
                    value={this.state.inputArtist}
                    onChange={this.onchangeArtist}
                />
                <input
                    placeholder={'Url da música'}
                    value={this.state.inputUrl}
                    onChange={this.onchangeUrl}
                />
                <button type='submit'>Adicionar Música</button>
            </ContainerForm>
            <BotaoVoltar onClick={this.props.onChangePlaylist}>Voltar para Playlists</BotaoVoltar>
        </Container>
    }
}