import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { URL_BASE } from '../../constants/Url';
import CardLike from '../CardLike/CardLike';

const CardMatchContainer = styled.div`
    border: 1px red solid;
    margin: 15px;

    img{
        width: 100%;
        border: 1px red solid;
    }
`

const InfoContainer = styled.div`
    background-color: lightgray;
    padding: 15px;

    p {
        margin: 0;
    }
`

function CardMatch(props) {
    const [profileToChoose, setProfileToChoose] = useState(null)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`${URL_BASE}/person`)
            .then((res) => {
                // console.log(res.data.profile)
                setProfileToChoose(res.data.profile)
            }).catch((err) => {
                console.log(err)
            })
    }

    const noMatch = () => {

        const body = {
            id: profileToChoose.id,
            choice: false
        }
        axios.post(`${URL_BASE}/choose-person`, body)
        .then((res) => {
            // console.log('noMatch')
            setProfileToChoose(null)
            getProfileToChoose()
        }).catch((err) => {
            console.log(err)
        })
    }

    const match = () => {
        const body = {
            id: profileToChoose.id,
            choice: true
        }
        axios.post(`${URL_BASE}/choose-person`, body)
        .then((res) => {
            // console.log('Match')
            setProfileToChoose(null)
            getProfileToChoose()
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <CardMatchContainer>
            {profileToChoose ?
                <div>
                    <img src={profileToChoose.photo} />
                    <InfoContainer>
                        <p>{profileToChoose.name}, {profileToChoose.age}</p>
                        <p>{profileToChoose.bio}</p>
                    </InfoContainer>
                </div>  : <p>Carregando...</p>  
        }


            <CardLike 
                noMatch={noMatch}
                match={match}
            />
        </CardMatchContainer>
    );
}

export default CardMatch;