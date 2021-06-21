import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { goToDetailPage } from '../../../routes/coordinator';
import {Container} from '../AdminListTrips/style'


function AdminListTrips(props) {
    const history = useHistory()

    return (
        <Container>
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