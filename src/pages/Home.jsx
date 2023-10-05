import React from 'react'
import Header from '../components/Header'
import Partners from '../components/Partners'
import About from '../components/About'
import OurValues from '../components/OurValues'
import BaseMenu from '../components/BaseMenu'
import Adhoc from '../components/Adhoc'
import HowWorks from '../components/HowWorks'

const Home = () => {
  return (
    <>
      <Header />
      <Partners />
      <About />
      <OurValues />
      <img
        src={require('../assets/images/image 48.png')}
        alt=""
        style={{ width: '100%' }}
      />
      <BaseMenu />
      <Adhoc />
      <HowWorks />
    </>
  )
}

export default Home
