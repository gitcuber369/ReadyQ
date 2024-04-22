import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Interview from './pages/Interview'
import Header from './components/Header'
import { BackgroundBeams } from './components/ui/Background'
function App() {
  return (
    <>
      <BrowserRouter>

      
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/about' element= {<About />} />
            <Route path='/pricing' element= {<Pricing />} />
            <Route path='/interview' element= {<Interview />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App