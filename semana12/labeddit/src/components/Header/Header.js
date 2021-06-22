import { AppBar, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { goToLogin } from '../../routes/coordinator';
import { ContainerToobar } from './style';

const Header = () => {
    const history = useHistory()
    
    return (
        <AppBar position="static">
            <ContainerToobar>
                <Button variant="h4" color="inherit">
                    <Typography variant="h4">
                        LabEddit
                    </Typography>
                </Button>
                <Button color="inherit" onClick={() => goToLogin(history)}>Login</Button>
            </ContainerToobar>
        </AppBar>
    );
};

export default Header;