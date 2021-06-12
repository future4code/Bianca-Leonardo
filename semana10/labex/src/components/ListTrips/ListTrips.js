import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from './style'

function ListTrips(props) {
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
                </CardContent>
            </Card>
        </Container>
    );
}

export default ListTrips;