import React from 'react';
import { useHistory } from 'react-router';
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';
import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
    text-align: center;
    background-color: white;
    border: 1px lightgray solid;
    border-radius: 10px;
`

const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: center;
    gap: 16px;
    /* justify-content: space-between; */
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

`

function HomePage() {
    const history = useHistory()

    return (
        <Container>
            <div>
                <Typography variant={'h3'} gutterBottom>LabeX</Typography>
            </div>
            <ContainerButtons>
                <div>
                    <Button variant={'contained'} color={'primary'} onClick={() => goToLoginPage(history)}>Login</Button>
                </div>
                <div>
                    <Button variant={'contained'} color={'primary'} onClick={() => goToListTripsPage(history)}>Ver Viagens</Button>
                </div>
            </ContainerButtons>
        </Container>
    );
}

export default HomePage;