import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import New from './pages/New'
import Root from './pages/Root'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import { Post, PostList } from './pages/Blogs'

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Please enter the correct url.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/new" element={<New />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route index element={<PostList />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
