import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kalkulator from './pages/Kalkulator'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/kalkulator' element={<Kalkulator/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
