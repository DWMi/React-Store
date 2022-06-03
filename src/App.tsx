import React, { useState, FC } from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'

const App: FC = () => {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
