import { IconButton } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerButtons, ContainerContent, ContainerText } from './style';
import SendIcon from '@material-ui/icons/Send';

const AddPost = () => {
    return (
        <CardContainer>
            <ContainerContent>
                <ContainerText
                    label="Título do Post"
                    variant="outlined"
                    margin={'normal'}
                />
                <ContainerText
                    label="No que você está pensando?"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin={'normal'}
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

export default AddPost;