import React, { useState, FC, SetStateAction } from 'react'
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
        <Layout itemsNumber={0} setItemsNumber={function (value: SetStateAction<number>): void {
          throw new Error('Function not implemented.')
        } }/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
