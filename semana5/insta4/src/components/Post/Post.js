import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBookmarkWhite from '../../img/bookmark_white.svg'
import iconeBookmarkBlack from '../../img/bookmark_black.svg'
import iconeShare from '../../img/share.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhamento } from '../SecaoCompartilhamento/SecaoCompartilhamento'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    bookmark: false,
    share: false,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickBookmark = () => {
    this.setState({
      bookmark: !this.state.bookmark
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickShare = () => {
    this.setState({
      share: !this.state.share
    })
  }

  aoCompartilhar = () => {
    this.setState ({
      share: false
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeBookmark

    if (this.state.bookmark) {
      iconeBookmark = iconeBookmarkBlack
    } else {
      iconeBookmark = iconeBookmarkWhite
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteCompartilhar

    if (this.state.share) {
      componenteCompartilhar = <SecaoCompartilhamento />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeBookmark}
          onClickIcone={this.onClickBookmark}
          valorContador={''}
        />

        <IconeComContador 
          icone={iconeShare}
          onClickIcone={this.onClickShare}
          valorContador={''}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />


      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post