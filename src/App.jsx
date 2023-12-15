import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Skill from './pages/Skill'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/skills' element={<Skill />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
