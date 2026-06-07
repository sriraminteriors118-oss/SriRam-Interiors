import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the gallery
const portfolioData = [
  { id: 1, category: 'living', title: 'Modern Minimalist Lounge', src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'kitchen', title: 'Contemporary Island Kitchen', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'bedroom', title: 'Luxury Master Suite', src: 'https://images.unsplash.com/photo-1522771731478-44fb90e816a1?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'living', title: 'Classic Elegance Living', src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'kitchen', title: 'Scandinavian Oak Kitchen', src: 'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'commercial', title: 'Executive Office Suite', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'bedroom', title: 'Bespoke Wardrobe Design', src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'living', title: 'Open Plan Dining Area', src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'living', label: 'Living Room' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'commercial', label: 'Commercial' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = activeTab === 'all' 
    ? portfolioData 
    : portfolioData.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-background">
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
                onClick={() => setActiveTab(cat.id)}
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

        <div className="mt-16 text-center">
           <button className="inline-flex items-center justify-center border-b-2 border-primary pb-1 text-primary hover:text-text hover:border-text transition-colors duration-300 font-medium tracking-wide uppercase text-sm">
             View All Projects
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
