import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';

import {Container} from './style'

function Candidates(props) {
    return (
        <Container>
            <Card>
                <CardContent key={props.candidate.id}>
                    <Typography color="textSecondary" gutterBottom>
                        Name: {props.candidate.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Idade: {props.candidate.age}
                    </Typography>
                    <Typography variant="body2" component="p">
                        País: {props.candidate.country}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Profissão: {props.candidate.profession}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Descrição: {props.candidate.applicationText}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size={'small'} onClick={() => props.decideCandidate(props.params, props.candidate.id, true)}>Aprovar</Button>
                    <Button size={'small'} onClick={() => props.decideCandidate(props.params, props.candidate.id, false)}>Reprovar</Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default Candidates;