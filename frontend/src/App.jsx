import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App