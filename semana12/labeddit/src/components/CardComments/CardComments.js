import { IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerButtons, ContainerContant, ContainerText } from './style';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { BASE_URL } from '../../constants/urls';
import { postVote } from '../../services/votes'

const CardComments = (props) => {
    const { username, body, voteSum, userVote, id } = props.comment

    const onClickVote = (value) => {
        postVote(value, props.getRequest, userVote, `${BASE_URL}/comments/${id}/votes`)
    }

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
                    <IconButton onClick={() => onClickVote(1)} aria-label="add to favorites">
                        <ThumbUpAltIcon />
                    </IconButton>
                    <span>{voteSum}</span>
                    <IconButton onClick={() => onClickVote(-1)} aria-label="share">
                        <ThumbDownAltIcon />
                    </IconButton>
                </ContainerButtons>
        </CardContainer>
    );
};

export default CardComments;