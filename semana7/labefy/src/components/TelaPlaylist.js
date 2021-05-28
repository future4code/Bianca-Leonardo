import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import PlayListCard from './PlayListCard'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    margin: 30px 0;
    padding: 0 30px;

    @media(max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
`


export default class TelaPlaylist extends React.Component {

    state = {
        playlists: [],
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.get(url, header)
        .then((res) => {
            this.setState({
                playlists: res.data.result.list
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    deletePlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.delete(url, header)
        .then((res) => {
            alert('Playlist Excluida com Sucesso!')
            this.getPlaylists()
        }).catch((err) => {
            console.log(err)
        })
    }

    

    render() {

        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
                <PlayListCard 
                    key={playlist.id}
                    id={playlist.id}
                    name={playlist.name}
                    deletePlayList={this.deletePlayList}
                    onChangeListaMusicas={this.props.onChangeListaMusicas}
                />
            )
        })

        

        return (
            <Container>
                {listaPlaylists}
            </Container>
        )
    }
}