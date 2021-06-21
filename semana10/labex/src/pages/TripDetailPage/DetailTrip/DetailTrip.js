import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

import {Container} from './style'

function DetailTrip(props) {
    return (
        <Container>
            <Card>
                <CardContent key={props.id}>
                    <Typography color="textSecondary" gutterBottom>
                        Nome: {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Descrição: {props.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Planeta: {props.planet}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Duração: {props.duration} dias
                </Typography>
                    <Typography variant="body2" component="p">
                        Data: {props.date}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default DetailTrip;