import React from 'react'

export default class TelaCriarPlaylist extends React.Component{
    render() {
        return (
            <div>
                Tela Criar Playlist
                <p>Nome:</p>
                <input placeholder={'nome da playlist'}/>
            </div>
        )
    }
}