import React from 'react'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import FeedPage from './pages/FeedPage/FeedPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'

function App() {
  return (
    <div>
      <LoginPage />
      <SignUpPage />
      <FeedPage />
      <PostDetailPage />
      <ErrorPage />
    </div>
  );
}

export default App;
