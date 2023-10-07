import React from 'react'
import Header from '../components/Header'
import Partners from '../components/Partners'
import About from '../components/About'
import OurValues from '../components/OurValues'
import BaseMenu from '../components/BaseMenu'
import Adhoc from '../components/Adhoc'
import HowWorks from '../components/HowWorks'
import OurPricing from '../components/OurPricing'
import ProductSlider from '../components/ProductSlider'
import PosIntegrations from '../components/PosIntegrations'
import NutritionCal from '../components/NutritionCal'
import Cta from '../components/Cta'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

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
      <OurPricing />
      <ProductSlider />
      <PosIntegrations />
      <NutritionCal />
      <Cta />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
