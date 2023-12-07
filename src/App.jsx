import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import data from './data'

function App() {

  return (
    <>
      <Header data={data} />
    </>
  )
}

export default App
