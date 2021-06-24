import { PanoramaSharp } from '@material-ui/icons';
import React from 'react';
import { useParams } from 'react-router';
import AddComment from '../../components/AddComment/AddComment';
import CardComments from '../../components/CardComments/CardComments';
import CardPost from '../../components/CardPost/CardPost';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { ContainerDetail } from './style';

const PostDetailPage = () => {
    const params = useParams()
    const [comments, getRequest] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [posts] = useRequestData([], `${BASE_URL}/posts`)

    const listComments = comments.map((comment) => {
        return <CardComments
            key={comment.id}
            comment={comment}
            getRequest={getRequest}
        />
    })

    const selectedPost = posts && posts.filter((post) => {
        return post.id === params.id
    })
    return (
        <ContainerDetail>
            {selectedPost[0] && <CardPost post={selectedPost[0]}/>}
            <AddComment getRequest={getRequest}/>
            {listComments}
        </ContainerDetail>
    );
};

export default PostDetailPage;