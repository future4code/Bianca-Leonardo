import React from 'react';
import AddComment from '../../components/AddComment/AddComment';
import CardComments from '../../components/CardComments/CardComments';
import CardPost from '../../components/CardPost/CardPost';
import { ContainerDetail } from './style';

const PostDetailPage = () => {
    return (
        <ContainerDetail>
            <CardPost />
            <AddComment />
            <CardComments />
        </ContainerDetail>
    );
};

export default PostDetailPage;