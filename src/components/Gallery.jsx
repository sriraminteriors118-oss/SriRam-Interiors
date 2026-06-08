import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

import { useAppData } from '../context/AppDataContext';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'living', label: 'Living Room/TV unit' },
  { id: 'kitchen', label: 'Kitchen Interior Works' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'glass', label: 'Glass Works' },
];

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeTab, setActiveTab] = useState(categoryParam);
  const { galleryItems } = useAppData();

  useEffect(() => {
    setActiveTab(categoryParam);
  }, [categoryParam]);

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredImages = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="pt-32 lg:pt-40 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text">Signature Projects</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-surface text-text hover:bg-surface/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style Grid using CSS Columns for simplicity & elegance */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group overflow-hidden rounded-sm"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm uppercase tracking-wider mb-1">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                  <h4 className="text-white text-xl font-serif">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
