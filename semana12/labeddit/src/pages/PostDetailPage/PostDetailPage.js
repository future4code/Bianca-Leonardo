import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import AddComment from '../../components/AddComment/AddComment';
import CardComments from '../../components/CardComments/CardComments';
import CardPost from '../../components/CardPost/CardPost';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { ContainerDetail } from './style';

const PostDetailPage = (props) => {
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    return (
        <ContainerDetail>
            {/* <CardPost /> */}
            <AddComment />
            {comments && comments.map((comment) => {
                return <CardComments
                    key={comment.id}
                    comment={comment}
                />
            })}

        </ContainerDetail>
    );
};

export default PostDetailPage;