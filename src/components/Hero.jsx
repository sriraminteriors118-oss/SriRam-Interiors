import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Image / Split layout approach */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-1/2 h-full bg-background relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        </div>
        <div className="hidden lg:block w-1/2 h-full relative">
          {/* Mock high-end interior image */}
          <div className="absolute inset-0 bg-surface">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
              alt="Luxury Interior Living Room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium tracking-wide">
              Premium Interior Design & Custom Furniture
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-text leading-tight mb-6">
              Crafting Spaces, <br/>
              <span className="text-primary italic">Defining Lifestyles.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text/80 mb-10 max-w-lg leading-relaxed">
              Elevate your home with our bespoke interior solutions and high-end custom furniture, designed with meticulous attention to detail and uncompromising quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+917995998118" 
                className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg font-medium tracking-wide text-center"
              >
                Call: +91 79959 98118
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center px-8 py-4 rounded-sm border border-text/20 text-text hover:border-primary hover:text-primary transition-all duration-300 font-medium tracking-wide text-center"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>

          {/* Mobile image fallback since right side is hidden on small screens */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:hidden w-full h-[400px] mt-8 rounded-sm overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
              alt="Luxury Interior Living Room" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
