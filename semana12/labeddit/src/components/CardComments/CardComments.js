import { CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerButtons, ContainerContant } from './style';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const CardComments = () => {
    return (
        <CardContainer>
            <div>
                <ContainerContant>
                    <Typography
                        variant="body2" color="textPrimary" component="span">
                        BiancaLeonardo:
                    </Typography>
                    <Typography
                        variant="body2" color="textSecondary" component="span">
                        Ahhhh. adorei! Super apoio
                    </Typography>
                </ContainerContant>
                <ContainerButtons disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpAltIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ThumbDownAltIcon />
                    </IconButton>
                </ContainerButtons>
            </div>
            <div>
                <ContainerContant>
                    <Typography
                        variant="body2" color="textPrimary" component="span">
                        BiancaLeonardo:
                    </Typography>
                    <Typography
                        variant="body2" color="textSecondary" component="span">
                        Ahhhh. adorei! Super apoio
                    </Typography>
                </ContainerContant>
                <ContainerButtons disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpAltIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ThumbDownAltIcon />
                    </IconButton>
                </ContainerButtons>
            </div>
            <div>
                <ContainerContant>
                    <Typography
                        variant="body2" color="textPrimary" component="span">
                        BiancaLeonardo:
                    </Typography>
                    <Typography
                        variant="body2" color="textSecondary" component="span">
                        Ahhhh. adorei! Super apoio
                    </Typography>
                </ContainerContant>
                <ContainerButtons disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpAltIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ThumbDownAltIcon />
                    </IconButton>
                </ContainerButtons>
            </div>
        </CardContainer>
    );
};

export default CardComments;