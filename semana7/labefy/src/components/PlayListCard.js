import React from 'react'
import styled from 'styled-components'

const ContainerCard = styled.div`
    box-shadow: 2px 2px 2px 2px #cccc;
    display: inline-flexbox;
    width: 300px;
    padding: 20px;
    justify-content: center;
    margin: 15px;
    margin-right: auto;
    margin-left: auto;
    align-items: center;

    :hover{
        background-color: #f2f2f2;
    }
`

const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        border: none;
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #0033cc;
        color: white;
        margin: 0 5px;

        :hover{
            transition: 1ms;
            background-color: #668cff;
        }
    }

    h4{
        text-transform: capitalize;
    }
`

export default class PlayListCard extends React.Component {
    render() {
        return (
            <ContainerCard key={this.props.id}>
                <ContainerConteudo>
                    <h4>{this.props.name}</h4>
                    <div>
                        {/* Manda props para lista Musicas */}
                        <button onClick={() => this.props.onChangeListaMusicas(this.props.id)}>Ver Playlist</button>
                        <button onClick={() => this.props.deletePlayList(this.props.id)}>Excluir Playlist</button>
                    </div>
                </ContainerConteudo>
            </ContainerCard>
        )
    }
}