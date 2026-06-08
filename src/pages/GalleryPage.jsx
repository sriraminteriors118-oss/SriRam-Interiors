import React from 'react'
import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'

const GalleryPage = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-text mb-4"
        >
          Our Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text/70 max-w-2xl mx-auto"
        >
          Explore our collection of completed projects and design inspirations.
        </motion.p>
      </div>
      <Gallery />
    </div>
  )
}

export default GalleryPage
