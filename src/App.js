import React from 'react'
import Body from './Components/Body'
import Hero from './Components/Hero'
import MiddleNav from './Components/MiddleNav'
import Navbar from './Components/Navbar'
import MultipleItems from './Components/ImgScroller'
import NumberTwo from './Components/NumberTwo'
import FooterNav from './Components/FooterNav'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MiddleNav />
      <Body />
      <MultipleItems />
      <NumberTwo />
      <FooterNav />
      
    </div>
  )
}

export default App
