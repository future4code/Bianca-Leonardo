import { Button, CardContent, CardHeader, IconButton, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerText, ContainerButtons, ContainerSend, ContainerContent } from './style';
import SendIcon from '@material-ui/icons/Send';

const AddComment = () => {
    return (
        <CardContainer>
            <ContainerContent>
                <ContainerText
                    label="No que você está pensando?"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </ContainerContent>
            <ContainerButtons disableSpacing>
                <IconButton aria-label="add to favorites">
                    <SendIcon />
                </IconButton>
            </ContainerButtons>
        </CardContainer>
    );
};

export default AddComment;