import { CardActionArea, CardContent, IconButton, Typography } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import React, { useState } from 'react';
import { CardContainer, ContainerButtons, ContainetText } from './style';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import {createPostVote} from '../../services/votes'

const CardPost = (props) => {
    const history = useHistory()
    const { username, title, body, userVote, voteSum, commentCount, id } = props.post
    
    const onClickVote = (value) => {
        createPostVote(value, id, props.getRequest, userVote)
        // setVote(0)
    }

    return (
        <CardContainer >
            <CardActionArea>
                <CardContent onClick={() => goToPostDetail(history, id)}>
                    <ContainetText variant="h6" color="textPrimary" component="h6">
                        {username}
                    </ContainetText>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <ContainerButtons disableSpacing>
                    <div>
                        <IconButton onClick={() => onClickVote(1)} aria-label="add to favorites">
                            <ThumbUpAltIcon />
                        </IconButton>
                        <span>{voteSum}</span>
                        <IconButton onClick={() => onClickVote(-1)} aria-label="share">
                            <ThumbDownAltIcon />
                        </IconButton>
                    </div>
                    <div>
                        <span>{commentCount}</span>
                        <IconButton aria-label="share">
                            <ChatIcon />
                        </IconButton>
                    </div>
                </ContainerButtons>
            </CardActionArea>
        </CardContainer>
    );
};

export default CardPost;