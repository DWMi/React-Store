import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import SingleProduct from './components/SingleProduct'
function App() {
  

  return (
    <div className="App">

        <Header />
        <SingleProduct />
        <Footer />

    </div>
  )
}

export default App
