import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { URL_BASE } from '../../constants/Url';
import CardLike from '../CardLike/CardLike';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons'

import swal from 'sweetalert';

import {CardMatchContainer, Container, ImgPrincipal, ImgFundo, InfoContainer} from './style'


function CardMatch(props) {
    const [profileToChoose, setProfileToChoose] = useState(null)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`${URL_BASE}/person`)
            .then((res) => {
                setProfileToChoose(res.data.profile)
            }).catch((err) => {
                swal('Ocorreu um erro', '', "error");
            })
    }

    const noMatch = () => {

        const body = {
            id: profileToChoose.id,
            choice: false
        }
        axios.post(`${URL_BASE}/choose-person`, body)
        .then((res) => {
            setProfileToChoose(null)
            getProfileToChoose()
        }).catch((err) => {
            swal('Ocorreu um erro', '', "error");
        })
    }

    const match = () => {
        const body = {
            id: profileToChoose.id,
            choice: true
        }
        axios.post(`${URL_BASE}/choose-person`, body)
        .then((res) => {
            if (res.data.isMatch) {
                swal("Match!", "", "success");
            }
            setProfileToChoose(null)
            getProfileToChoose()
        }).catch((err) => {
            swal('Ocorreu um erro', '', "error");
        })
    }
    return (
        <CardMatchContainer>
            {profileToChoose ?
                <Container>
                    <ImgPrincipal src={profileToChoose.photo} />
                    <ImgFundo src={profileToChoose.photo} />
                    <InfoContainer>
                        <p>{profileToChoose.name}, {profileToChoose.age}</p>
                        <p>{profileToChoose.bio}</p>
                    </InfoContainer>
                </Container>  : <Container><FontAwesomeIcon icon={faSpinner} size='2x' spin color='lightGray'/></Container>
        }


            <CardLike 
                noMatch={noMatch}
                match={match}
            />
        </CardMatchContainer>
    );
}

export default CardMatch;