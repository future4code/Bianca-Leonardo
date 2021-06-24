import React from 'react';
import { useParams } from 'react-router';
import AddComment from '../../components/AddComment/AddComment';
import CardComments from '../../components/CardComments/CardComments';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { ContainerDetail } from './style';

const PostDetailPage = () => {
    const params = useParams()
    const [comments, getRequest] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    

    const listComments = comments.map((comment) => {
        return <CardComments
            key={comment.id}
            comment={comment}
            getRequest={getRequest}
        />
    })
    return (
        <ContainerDetail>
            {/* <CardPost /> */}
            <AddComment getRequest={getRequest}/>
            {listComments}
        </ContainerDetail>
    );
};

export default PostDetailPage;