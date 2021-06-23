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
    const { title, body, userVote, voteSum, commentCount } = props.post

    return (
        <CardContainer onClick={() => goToPostDetail(history)}>
            <CardActionArea>
                <CardHeader
                    title={title}
                />
                <CardContent>
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