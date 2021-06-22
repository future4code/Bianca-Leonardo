import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <FeedPage />
                </Route>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>
                <Route exact path={'/signup'}>
                    <SignUpPage />
                </Route>
                <Route exact path={'/post/:id'}>
                    <PostDetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;