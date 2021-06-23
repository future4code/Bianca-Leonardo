import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, TextField, Typography } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import React from 'react';
import { CardContainer, ContainerButtons } from './style';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const CardPost = (props) => {
    const history = useHistory()
    const { username, title, body, userVote, voteSum, commentCount, id } = props.post

    return (
        <CardContainer onClick={() => goToPostDetail(history, id)}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" color="textPrimary" component="h6">
                        {username}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <ContainerButtons disableSpacing>
                    <div>
                        <IconButton aria-label="add to favorites">
                            <ThumbUpAltIcon />
                        </IconButton>
                        <span>{voteSum}</span>
                        <IconButton aria-label="share">
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