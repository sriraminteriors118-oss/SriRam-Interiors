import React from 'react'
import Hero from '../components/Hero'
import ProprietorSection from '../components/ProprietorSection'
import Services from '../components/Services'
import GalleryPreview from '../components/GalleryPreview'

const Home = () => {
  return (
    <main>
      <Hero />
      <ProprietorSection />
      <Services />
      <GalleryPreview />
    </main>
  )
}

export default Home
