import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero />
      <Body />
      <Footer />
    </>
  )
}

export default App
