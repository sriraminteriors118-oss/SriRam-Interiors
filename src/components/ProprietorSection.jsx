import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';

const ProprietorSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Manager" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-serif mb-1">Shiva Porandla</h3>
              <p className="text-white/80 tracking-wide uppercase text-sm font-medium">Proprietor</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text">Guided by Experience</h3>
            <p className="text-lg text-text/80 leading-relaxed">
              At SriRam Interiors, most of our flagship projects are directly handled and supervised by our Proprietor, <span className="font-semibold text-text">Shiva Porandla</span>. With a keen eye for detail and a passion for creating bespoke spaces, Shiva ensures that every project meets the highest standards of luxury and functionality.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Direct supervision on critical milestones",
                "Personalized material selection guidance",
                "End-to-end quality assurance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-text/80">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a 
                href="tel:+917995998118" 
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg font-medium tracking-wide"
              >
                <Phone size={20} />
                Contact Shiva: +91 79959 98118
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProprietorSection;
