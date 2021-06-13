import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { goToCreateTripPage, goToApplicationFormPage, goToBack, goToLoginPage } from '../../routes/coordinator';

import { ContainerMenu, ContainerButtons } from './style'

function Header(props) {

    const history = useHistory()

    return (
        <ContainerMenu>
            <Link to='/'>
                <Typography variant={'h3'} gutterBottom>LabeX</Typography>
            </Link>
            <ContainerButtons>
                <div>
                    <Button variant={'contained'} color={'default'} onClick={() => goToBack(history)}>Voltar</Button>
                </div>
                <div>
                    <Button variant={'contained'} color={'primary'} onClick={props.pageFormName}>{props.buttonFormName}</Button>
                    <Button variant={'contained'} color={'primary'} onClick={props.pageName}>{props.buttonName}</Button>
                </div>
            </ContainerButtons>
        </ContainerMenu>
    );
}

export default Header;