import React from 'react'


export default class TelaAdicionarMusica extends React.Component{

    state = {
        playLists: this.props.playLists
    }

    render() {

        const listaPlaylists = this.state.playLists.map((playlist) => {
            return (
                <div>
                    <p>{playlist.name}</p>
                </div>
            )
        })
        return (
            <div>
                Tela Adicionar Musica
                <p>Nome: {this.playLists.name}</p>
                <input placeholder={'nome da playlist'}/>
                <p>Artista:</p>
                <input placeholder={'nome da playlist'}/>
                <p>url:</p>
                <input placeholder={'nome da playlist'}/>
            </div>
        )
    }
}