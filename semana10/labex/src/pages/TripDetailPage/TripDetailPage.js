import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ApprovedCandidates from './ApprovedCandidates/ApprovedCandidates';
import Candidates from './Candidates/Candidates';
import DetailTrip from './DetailTrip/DetailTrip';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToCreateTripPage, goToBack, goToLoginPage } from '../../routes/coordinator';

import { ContainerMenu, ContainerButtons, ContainerCandidates } from './style'
import Header from '../../components/Header/Header';
import swal from 'sweetalert';

function TripDetailPage(props) {
    const history = useHistory()

    const [detailTrip, setDetailTrip] = useState({})

    useProtectedPage()
    const params = useParams()

    useEffect(() => {
        getTripDetail(params.id)
    }, [])

    const getTripDetail = (id) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(`${BASE_URL}/trip/${id}`, header)
            .then((res) => {
                setDetailTrip(res.data.trip)
            }).catch((err) => {
                console.log(err)
                swal({
                    title: "Erro!",
                    text: "Problema ao carregar o Detalhe da Viagem!",
                    icon: "error",
                });
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
                (body.approve ?
                    swal({
                        title: "",
                        text: "Candidato Aprovado!",
                        icon: "success",
                    }) : swal({
                        title: "",
                        text: "Candidato Reprovado!",
                        icon: "success",
                    })
                )
                getTripDetail(params.id)
            })
            .catch((err) => {
                swal({
                    title: "Erro!",
                    text: "Problema ao aprovar ou reprovar Candidato, Tente novamente!",
                    icon: "error",
                  });
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
            <Header
                buttonFormName={'Nova Viagem'}
                pageFormName={() => goToCreateTripPage(history)}
                pageName={() => goToLoginPage(history)}
                buttonName={'Logout'}
            />
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