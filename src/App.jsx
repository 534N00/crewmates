import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Edit from './components/Edit';
import Gallery from './components/Gallery';
import Error from './components/Error';
import './App.css'

import { createClient } from '@supabase/supabase-js';
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const PROJECT_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL;

function App() {

  const supabase = createClient(PROJECT_URL, API_KEY);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/post" exact element={ <Post supabase={supabase} /> } />
            <Route path="/edit/:id" element={ <Edit supabase={supabase} /> } />
            <Route path="/gallery" exact element={ <Gallery supabase={supabase} /> } />
            <Route path="*" element={ <Error /> } />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
