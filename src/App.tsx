import React, { useState, FC } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'


const App: FC = () => {
  

  return (
    <div className="App">

      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </div>
  )
}

export default App
