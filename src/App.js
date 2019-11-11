import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList'

function App() {
  return (
    <>
      <Header />
      <div className="main-content" >
        <PostList />
      </div>
    </>
  );
}

export default App;