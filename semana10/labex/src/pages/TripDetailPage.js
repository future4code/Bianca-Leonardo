import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ApprovedCandidates from '../components/ApprovedCandidates/ApprovedCandidates';
import Candidates from '../components/Candidates/Candidates';
import DetailTrip from '../components/DetailTrip/DetailTrip';
import Header from '../components/HeaderAdmin/HeaderAdmin';
import { BASE_URL } from '../constants/urls';
import useProtectedPage from '../hooks/useProtectedPage';

function TripDetailPage(props) {

    const [detailTrip, setDetailTrip] = useState({})

    useProtectedPage()
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
            <Header />
            {detailTrip && detailTrip.id ? <div>
                <DetailTrip
                name={detailTrip.name}
                description={detailTrip.description}
                planet={detailTrip.planet}
                duration={detailTrip.durationInDays}
                date={detailTrip.date}
            />
            <div>
                <h3>Candidatos Pendentes</h3>
                {listCandidates}

            </div>
            <div>
                <h3>Candidatos Aprovados</h3>
                {listApproved}

            </div>
            </div> : <p>Carregando...</p>}

        </div>
    );
}

export default TripDetailPage;