import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import DetalheUsuario from './DetalheUsuario'

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    button{
        align-self: center;
        margin: 0 4px;
        border: none;
        padding: 8px 8px;
        border-radius: 10px;
        background-color: lightsteelblue;
        color: black;
        align-self: center;

        :hover {
            background-color: lightskyblue;
        }
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const ContainerListaUsuarios = styled.div`
    border-right: 1px lightgrey solid;
    width: 50%;
    padding-right: 10px;
    margin-top: 20px;
`
const ContainerDetalhamento = styled.div`
    width: 50%;
    margin-top: 20px;
    padding-right: 10px;
`

const ListUsuario = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    margin-bottom: 10px;

    button{
        margin: 0 4px;
        border: none;
        padding: 8px 8px;
        border-radius: 10px;
        background-color: lightsteelblue;
        color: black;

        :hover {
            background-color: lightskyblue;
        }
    }
`

export default class ListarUsuario extends React.Component {

    state = {
        usuarios: [],
        pagina: 'detalhamento',
        dadosUsuario: []
    }

    componentDidMount() {
        this.listarUsuarios()

    }

    trocaPagina = () => {
        if (this.state.pagina === 'detalhamento') {
            return <DetalheUsuario detalhamentoUsuario={this.detalhamentoUsuario} />
        }
    }

    trocarParaPagina = () => {
        this.setState({
            pagina: 'detalhamento'
        })
    }

    listarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.get(url, header)
            .then((res) => {
                this.setState({
                    usuarios: res.data
                })
            })
            .catch((err) => {
                alert('Erro')
            })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.delete(url, header)
            .then((res) => {
                alert('Usuário(a) excluido(a) com sucesso!')
                this.listarUsuarios()
            })
            .catch((err) => {
                alert('ERRO ao excluir')
            })

    }

    detalhamentoUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.get(url, header)
            .then((res) => {
                this.setState({
                    dadosUsuario: res.data
                })
                console.log(res.data)
            })
            .catch((err) => {
                alert('erro')
            })

    }


    render() {

        // const Usuario = this.state.dadosUsuario.map((dado) => {
        //     return <div>
        //         <p>{dado.id}</p>
        //         <p>{dado.name}</p>
        //         <p>{dado.email}</p>
        //     </div>
        // })

        const ListandoUsuarios = this.state.usuarios.map((usuario) => {
            return <ListUsuario key={usuario.id}>
                <p>{usuario.name}</p>
                <div>
                    <button onClick={() => this.detalhamentoUsuario(usuario.id) && this.props.trocarParaDetalhar}>Detalhes</button>
                    <button onClick={() => { if (window.confirm('Tem certeza que deseja deletar?')) this.deletarUsuario(usuario.id) }}>Excluir</button>
                </div>

            </ListUsuario>
        })

        return (
            <ContainerLista>
                <button onClick={this.props.trocarParaCadastrar}>Cadastre-se</button>
                <Conteudo>
                    <ContainerListaUsuarios>

                        <h2>Lista de Usuários</h2>
                        <div>
                            {ListandoUsuarios}
                        </div>
                    </ContainerListaUsuarios>
                    <ContainerDetalhamento>
                        <DetalheUsuario
                            deletarUsuario={this.deletarUsuario}
                            onClick={this.detalhamentoUsuario}
                            id={this.state.dadosUsuario.id}
                            nome={this.state.dadosUsuario.name}
                            email={this.state.dadosUsuario.email}
                        />
                    </ContainerDetalhamento>
                </Conteudo>


            </ContainerLista>
        )
    }
}