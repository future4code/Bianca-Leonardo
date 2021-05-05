import React from 'react'
import { Component } from 'react';
import styled from 'styled-components';

import iconeInstagram from '../../img/instagram.png'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'

const ContainerShare = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const Icones =  styled.img`
`
const Botao = styled.button`
    background-color: white;
    border: none;
`

export class SecaoCompartilhamento extends Component {

    state = {
        mensagem: ''
    }

    onChangeMensagem = (event) => {
        this.setState({
            mensagem: event.target.value
        })
    }

    compartilharInstagram = () => {
        console.log(`Post compartilhado no Instragram com a mensagem ${this.state.mensagem}`)
        this.setState({
            mensagem: ''
        })
    }

    compartilharFacebook = () => {
        console.log(`Post compartilhado no Facebook com a mensagem ${this.state.mensagem}`)
        this.setState({
            mensagem: ''
        })
    }

    compartilharTwitter = () => {
        console.log(`Post compartilhado no Twitter com a mensagem ${this.state.mensagem}`)
        this.setState({
            mensagem: ''
        })
    }


    render() {
        return <ContainerShare>
            <input 
                placeholder={'Mensagem'}
                value={this.state.mensagem}
                onChange={this.onChangeMensagem}
            />
            <Botao onClick={this.compartilharInstagram}><Icones src={iconeInstagram}></Icones></Botao>
            <Botao onClick={this.compartilharFacebook}><Icones src={iconeFacebook}></Icones></Botao>
            <Botao onClick={this.compartilharTwitter}><Icones src={iconeTwitter}></Icones></Botao>
        </ContainerShare>
    }
}