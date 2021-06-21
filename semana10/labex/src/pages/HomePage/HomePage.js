import React from 'react';
import { useHistory } from 'react-router';
import { goToListTripsPage, goToLoginPage, goToAdminHomePage } from '../../routes/coordinator';
import { Button, Typography } from '@material-ui/core';

import {Container, ContainerButtons} from './style'



function HomePage() {
    const history = useHistory()

    return (
        <Container>
            <div>
                <Typography variant={'h3'} gutterBottom>LabeX</Typography>
            </div>
            <ContainerButtons>
                <div>
                    <Button variant={'contained'} color={'primary'} onClick={() => localStorage.getItem('toke')? goToLoginPage(history) : goToAdminHomePage(history)}>Login</Button>
                </div>
                <div>
                    <Button variant={'contained'} color={'primary'} onClick={() => goToListTripsPage(history)}>Ver Viagens</Button>
                </div>
            </ContainerButtons>
        </Container>
    );
}

export default HomePage;