import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import AddPost from '../../components/AddPost/AddPost';
import CardPost from '../../components/CardPost/CardPost';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { goToLogin } from '../../routes/coordinator';
import { logout } from '../../services/users';
import { ContainerFeed } from './style';

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [posts, getRequest] = useRequestData([], `${BASE_URL}/posts`)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getRequest()
        }
    }, [])

    return (
        <div>
            <Header
                onclick={() => logout(history)}
                buttonName={'Logout'}
            />
            {posts && posts[0] ?
                <ContainerFeed>
                    <AddPost getRequest={getRequest} />
                    {posts && posts.map((post) => {
                        return <CardPost
                            key={post.id}
                            post={post}
                            getRequest={getRequest}
                        />
                    })}
                </ContainerFeed>
                : <Loading />}
        </div>
    );
};

export default FeedPage;