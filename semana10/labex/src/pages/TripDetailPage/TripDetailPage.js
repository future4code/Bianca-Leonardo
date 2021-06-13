import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ApprovedCandidates from './ApprovedCandidates/ApprovedCandidates';
import Candidates from './Candidates/Candidates';
import DetailTrip from './DetailTrip/DetailTrip';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import styled from 'styled-components';
import { goToCreateTripPage, goToBack, goToLoginPage } from '../../routes/coordinator';

const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 500px;

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
`

const ContainerCandidates = styled.div`
    display: flex;

    div{
        width: 99%;
    }
`

function TripDetailPage(props) {
    const history = useHistory()

    const [detailTrip, setDetailTrip] = useState({})

    // useProtectedPage()
    const params = useParams()

    useEffect(() => {
        getTripDetail(params.id)
        // console.log(props.id)
    }, [])

    const getTripDetail = (id) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(`${BASE_URL}/trip/${id}`, header)
            .then((res) => {
                console.log(res.data.trip)
                setDetailTrip(res.data.trip)
            }).catch((err) => {
                console.log(err)
            })
    }

    const decideCandidate = (tripId, candidateId, decide) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        const body = {
            approve: decide
        }

        axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, header)
            .then((res) => {
                console.log(body.approve ? 'Candidato Aprovado!' : 'Candidato Não Aprovado')
                getTripDetail(params.id)
            })
            .catch((err) => {
                console.log(` Erro ao aprovar Candidato, Tente novamente! ${err.response.status}`)
            })
    }

    const listCandidates = detailTrip && detailTrip.candidates && detailTrip.candidates.map((candidate) => {
        return <Candidates
            decideCandidate={decideCandidate}
            candidate={candidate}
            params={params.id}
        />
    })

    const listApproved = detailTrip && detailTrip.approved && detailTrip.approved.map((approve) => {
        return <ApprovedCandidates
            approved={approve}
        />
    })


    return (
        <div>
            <ContainerMenu>
                <Typography variant={'h3'} gutterBottom>Painel Administrativo</Typography>
                <ContainerButtons>
                    <div>
                        <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
                    </div>
                    <div>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToCreateTripPage(history)}>Nova Viagem</Button>
                        <Button variant={'contained'} color={'primary'} onClick={() => goToLoginPage(history)}>Login</Button>
                    </div>
                </ContainerButtons>
            </ContainerMenu>
            {detailTrip && detailTrip.id ? <div>
                <DetailTrip
                    name={detailTrip.name}
                    description={detailTrip.description}
                    planet={detailTrip.planet}
                    duration={detailTrip.durationInDays}
                    date={detailTrip.date}
                />
                <ContainerCandidates>
                    <div>
                        <Typography variant={'h5'} gutterBottom>Candidatos Pendentes</Typography>
                        {listCandidates}

                    </div>
                    <div>
                    <Typography variant={'h5'} gutterBottom>Candidatos Aprovados</Typography>
                        {listApproved}

                    </div>
                </ContainerCandidates>
            </div> : <p>Carregando...</p>}

        </div>
    );
}

export default TripDetailPage;