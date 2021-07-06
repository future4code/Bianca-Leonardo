import { CardActionArea, CardContent, IconButton, Typography } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import React, { useState } from 'react';
import { CardContainer, ContainerButtons, ContainetText } from './style';
import { goToPostDetail } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import {postVote} from '../../services/votes'
import { BASE_URL } from '../../constants/urls';

const CardPost = (props) => {
    const history = useHistory()
    const { username, title, body, userVote, voteSum, commentCount, id } = props.post
    const [colorButton, setColorButtom] = useState('')

    const onClickVote = (value) => {
        postVote(value, props.getRequest, userVote, `${BASE_URL}/posts/${id}/votes`)
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
                            <ThumbUpAltIcon color={userVote === 1 ? 'primary' : ''}/>
                        </IconButton>
                        <span>{voteSum}</span>
                        <IconButton onClick={() => onClickVote(-1)} aria-label="share">
                            <ThumbDownAltIcon color={userVote === -1 ? 'primary' : ''}/>
                        </IconButton>
                    </div>
                    <div>
                        <span>{commentCount}</span>
                        <IconButton onClick={() => goToPostDetail(history, id)}aria-label="share">
                            <ChatIcon />
                        </IconButton>
                    </div>
                </ContainerButtons>
            </CardActionArea>
        </CardContainer>
    );
};

export default CardPost;