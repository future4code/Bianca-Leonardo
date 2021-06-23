import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoadingContainer } from './style';

const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress color={'primary'} size={50}/>
        </LoadingContainer>
    );
};

export default Loading;