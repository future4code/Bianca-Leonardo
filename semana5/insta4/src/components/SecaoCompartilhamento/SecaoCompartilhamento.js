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

    compartilharInstagram = () => {
        console.log('Post compartilhado no instagram')
    }

    compartilharFacebook = () => {
        console.log('Post compartilhado no Facebook')
    }

    compartilharTwitter = () => {
        console.log('Post compartilhado no Twitter')
    }


    render() {
        return <ContainerShare>
            <Botao onClick={this.compartilharInstagram}><Icones src={iconeInstagram}></Icones></Botao>
            <Botao onClick={this.compartilharFacebook}><Icones src={iconeFacebook}></Icones></Botao>
            <Botao onClick={this.compartilharTwitter}><Icones src={iconeTwitter}></Icones></Botao>
        </ContainerShare>
    }
}