import React from 'react';
import AddComment from '../../components/AddComment/AddComment';
import CardPost from '../../components/CardPost/CardPost';
import { ContainerFeed } from './style';

const FeedPage = () => {
    return (
        <ContainerFeed>
            <AddComment />
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