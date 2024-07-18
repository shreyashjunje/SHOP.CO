import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from "./pages/Home"

function App() {
  return (
    <div className='overflow-hidden'>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App