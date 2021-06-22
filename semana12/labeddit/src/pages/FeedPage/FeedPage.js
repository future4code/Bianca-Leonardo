import React from 'react';
import CardPost from '../../components/CardPost/CardPost';
import { ContainerFeed } from './style';

const FeedPage = () => {
    return (
        <ContainerFeed>
            FeedPage
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
        </ContainerFeed>
    );
};

export default FeedPage;