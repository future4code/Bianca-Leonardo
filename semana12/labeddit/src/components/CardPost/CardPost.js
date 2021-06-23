import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, TextField, Typography } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import React from 'react';
import { CardContainer, ContainerButtons } from './style';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const CardPost = () => {
    const history = useHistory()

    return (
        <CardContainer onClick={() => goToPostDetail(history)}>
            <CardActionArea>
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <ContainerButtons disableSpacing>
                    <div>
                        <IconButton aria-label="add to favorites">
                            <ThumbUpAltIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ThumbDownAltIcon />
                        </IconButton>
                    </div>
                    <IconButton aria-label="share">
                        <ChatIcon />
                    </IconButton>
                </ContainerButtons>
            </CardActionArea>
        </CardContainer>
    );
};

export default CardPost;