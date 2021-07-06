import { AppBar, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { ContainerToobar } from './style';

const Header = ({ onclick, buttonName }) => {
    const history = useHistory()

    return (
        <AppBar position="static">
            <ContainerToobar>
                <Button onClick={() => goToFeed(history)} variant="h4" color="inherit">
                    <Typography variant="h4">
                        LabEddit
                    </Typography>
                </Button>
                <Button
                    color="inherit"
                    onClick={onclick}
                >
                    {buttonName}
                </Button>
            </ContainerToobar>
        </AppBar>
    );
};

export default Header;