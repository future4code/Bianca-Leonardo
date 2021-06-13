import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

import {Container} from './style'


function ApprovedCandidates(props) {
    return (
        <Container>
            <Card>
                <CardContent key={props.approved.id}>
                    <Typography color="textSecondary" gutterBottom>
                        Name: {props.approved.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Idade: {props.approved.age}
                    </Typography>
                    <Typography variant="body2" component="p">
                        País: {props.approved.country}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Profissão: {props.approved.profession}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Descrição: {props.approved.applicationText}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ApprovedCandidates;