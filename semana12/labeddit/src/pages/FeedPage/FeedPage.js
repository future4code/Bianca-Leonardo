import React from 'react';
import AddPost from '../../components/AddPost/AddPost';
import CardPost from '../../components/CardPost/CardPost';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { ContainerFeed } from './style';

const FeedPage = () => {
    const [posts, getRequest] = useRequestData([], `${BASE_URL}/posts`)
    return (
        <ContainerFeed>
            <AddPost getRequest={getRequest}/>
            {posts && posts.map((post) => {
                return <CardPost
                    key={post.id}
                    post={post}
                    getRequest={getRequest}
                />
            })}
        </ContainerFeed>
    );
};

export default FeedPage;