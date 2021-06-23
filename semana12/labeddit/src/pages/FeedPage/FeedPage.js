import React, { useState } from 'react';
import AddComment from '../../components/AddComment/AddComment';
import AddPost from '../../components/AddPost/AddPost';
import CardPost from '../../components/CardPost/CardPost';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { ContainerFeed } from './style';

const FeedPage = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)
    return (
        <ContainerFeed>
            <AddPost />
            {posts && posts.map((post) => {
                return <CardPost
                    key={post.id}
                    post={post}
                />
            })}
        </ContainerFeed>
    );
};

export default FeedPage;