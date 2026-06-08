import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const previewCategories = [
  { id: 'kitchen', label: 'Kitchen Room Works', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { id: 'living', label: 'Living Room/TV unit', src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 'bedroom', label: 'Bedroom Designs', src: 'https://images.unsplash.com/photo-1522771731478-44fb90e816a1?auto=format&fit=crop&q=80&w=800' },
  { id: 'commercial', label: 'Commercial Spaces', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 'glass', label: 'Glass Related Works', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-background border-t border-text/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text">Design Categories</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Link to={`/gallery?category=${cat.id}`} className="block w-full h-full">
                <img 
                  src={cat.src} 
                  alt={cat.label} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h4 className="text-white text-2xl font-serif mb-2">{cat.label}</h4>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                    View More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link 
             to="/projects"
             className="inline-flex items-center justify-center border-b-2 border-primary pb-1 text-primary hover:text-text hover:border-text transition-colors duration-300 font-medium tracking-wide uppercase text-sm group"
           >
             View All Projects
             <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
