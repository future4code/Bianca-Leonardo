import { PanoramaSharp } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import AddComment from '../../components/AddComment/AddComment';
import CardComments from '../../components/CardComments/CardComments';
import CardPost from '../../components/CardPost/CardPost';
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { logout } from '../../services/users';
import { ContainerDetail } from './style';

const PostDetailPage = () => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const [comments, getRequest] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [posts, getPost] = useRequestData([], `${BASE_URL}/posts`)

    useEffect(() => {
        getRequest()
    }, [])

    useEffect(() => {
        getPost()
    }, [])


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
        <div>
            <Header
                onclick={() => logout(history)}
                buttonName={'Logout'}
            />
            <ContainerDetail>
                {selectedPost[0] && <CardPost getRequest={getPost} post={selectedPost[0]} />}
                <AddComment getRequest={getRequest} />
                {listComments}
            </ContainerDetail>
        </div>

    );
};

export default PostDetailPage;