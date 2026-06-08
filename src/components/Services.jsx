import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Tv, BedDouble, Building2, Component, ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    id: 'kitchens',
    title: 'Kitchen Room Works',
    description: 'Bespoke culinary spaces combining cutting-edge functionality with timeless aesthetics, tailored to your cooking style.',
    icon: Utensils,
  },
  {
    id: 'living',
    title: 'Living Room/TV unit',
    description: 'Harmonious living rooms and premium TV units designed to be the perfect backdrop for your family life and entertaining.',
    icon: Tv,
  },
  {
    id: 'bedroom',
    title: 'Bedroom Designs',
    description: 'Luxurious and relaxing bedroom interiors with intelligent storage solutions perfectly integrated into the architecture.',
    icon: BedDouble,
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    description: 'Inspiring workspaces and commercial environments that reflect your brand identity and optimize productivity.',
    icon: Building2,
  },
  {
    id: 'glass',
    title: 'Glass Related Works',
    description: 'Elegant glass partitions, custom mirrors, and architectural glass solutions that add a touch of modern sophistication.',
    icon: Component,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text mb-6">Mastering Every Detail</h3>
            <p className="text-lg text-text/70">
              From concept to completion, we deliver comprehensive interior design and custom manufacturing services that transform empty spaces into extraordinary environments.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background p-8 rounded-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-serif font-semibold text-text mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-text/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="absolute bottom-8 right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-primary">
                  <ArrowUpRight size={24} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
