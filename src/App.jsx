import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Edit from './components/Edit';
import Gallery from './components/Gallery';
import Error from './components/Error';
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/" element={ <Home /> } />
            <Route path="/post" element={ <Post /> } />
            <Route path="/edit" element={ <Edit /> } />
            <Route path="/gallery" element={ <Gallery /> } />
            <Route path="*" element={ <Error /> } />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
