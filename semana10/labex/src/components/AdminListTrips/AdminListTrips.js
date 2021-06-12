import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { goToDetailPage } from '../../routes/coordinator';

const Container = styled.div`
    margin-bottom: 20px;
`

function AdminListTrips(props) {
    const history = useHistory()

    // const getTripDetail

    // const trips = props.trips

    return (
        <Container>
            {/* {props && props.trips && props.trips.id ?
                <div key={props.trips.id}>
                    <p>Nome: {props.trips.name}</p>
                    <p>Descrição: {props.trips.description}</p>
                    <p>Data: {props.trips.date}</p>
                    <button onClick={() => goToDetailPage(history, props.trips.id)}>Ver Viagem</button>
                    <button onClick={() => props.deleteTrip(props.trips.id)}>Excluir</button>
                </div> : <p>Carregando...</p>
        } */}
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Nome: {props.trips.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Descrição: {props.trips.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Planeta: {props.trips.planet}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Duração: {props.trips.durationInDays} dias
                </Typography>
                    <Typography variant="body2" component="p">
                        Data: {props.trips.date}
                    </Typography>
                    <CardActions>
                        <Button size="small" onClick={() => goToDetailPage(history, props.trips.id)} >Ver Detalhes</Button>
                        <Button size="small" onClick={() => props.deleteTrip(props.trips.id)}>Excluir</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Container>

    );
}

export default AdminListTrips;