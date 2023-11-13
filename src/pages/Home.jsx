import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
          <Header/>
          <Hero />
          <Body />
          <Footer />
        </>
      )
}

export default Home