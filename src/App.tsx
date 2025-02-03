import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSecion'
import { LayoutSection } from './components/LayoutSection'
import { LayoutSection1 } from './components/LayoutSection1'

function App() {
 

  return (
    <div>
      <Header/>
      <HeroSection/>
      <LayoutSection/>
      <LayoutSection1/>
    </div>
  )
}

export default App
