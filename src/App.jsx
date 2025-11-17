import React from 'react'
import Chat from './pages/Chat.jsx'
import Favourites from './pages/Favourites.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Tutorial from './pages/Tutorial.jsx'
import NotFound from './pages/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Tutorial />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
