import React from 'react'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import FeedPage from './pages/FeedPage/FeedPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Router from './routes/Router'

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
