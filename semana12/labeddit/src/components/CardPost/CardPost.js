import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, TextField, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { CardContainer, ContainerButtons } from './style';

const CardPost = () => {
    return (
        <CardContainer>
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
        </CardContainer>
    );
};

export default CardPost;