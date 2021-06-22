import { AppBar, Button, Typography } from '@material-ui/core';
import React from 'react';
import { ContainerToobar } from './style';

const Header = () => {
    return (
        <AppBar position="static">
            <ContainerToobar>
                <Typography variant="h4">
                    LabEddit
                </Typography>
                <Button color="inherit">Login</Button>
            </ContainerToobar>
        </AppBar>
    );
};

export default Header;