import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Footer from '../components/Footer'
import About from '../components/About'

const Home = () => {
    return (
        <>
          <Header/>
          <Hero />
          <About />
          <Body />
          <Footer />
        </>
      )
}

export default Home