import { IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerButtons, ContainerContant, ContainerText } from './style';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const CardComments = (props) => {
    const { username, body, voteSum } = props.comment

    return (
        <CardContainer>
                <ContainerContant>
                    <ContainerText
                        variant="body2" color="textPrimary" component="span">
                        {username}:
                    </ContainerText>
                    <Typography
                        variant="body2" color="textSecondary" component="span">
                        {body}
                    </Typography>
                </ContainerContant>
                <ContainerButtons disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpAltIcon />
                    </IconButton>
                    <span>{voteSum}</span>
                    <IconButton aria-label="share">
                        <ThumbDownAltIcon />
                    </IconButton>
                </ContainerButtons>
        </CardContainer>
    );
};

export default CardComments;