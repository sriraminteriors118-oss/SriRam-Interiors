import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, LayoutGrid, Layers, Component, Wrench } from 'lucide-react';

const servicesData = [
  {
    id: 'kitchens',
    title: 'Modular Kitchen',
    description: 'Custom-designed modular kitchens that blend seamless functionality with modern aesthetics.',
    icon: Utensils,
  },
  {
    id: 'wardrobes',
    title: 'Modular Wardrobes',
    description: 'Elegant and spacious modular wardrobes tailored to fit your storage needs perfectly.',
    icon: LayoutGrid,
  },
  {
    id: 'ceiling-paneling',
    title: 'False Ceiling & Wall Paneling',
    description: 'Innovative false ceiling designs and stylish wall paneling to elevate your interiors.',
    icon: Layers,
  },
  {
    id: 'aluminium-glass',
    title: 'Aluminium, Glass',
    description: 'Premium aluminium and glass works for contemporary partitions, windows, and decor.',
    icon: Component,
  },
  {
    id: 'wpc-solutions',
    title: 'WPV Solutions',
    description: 'Durable and aesthetic WPV solutions for modern, beautiful, and sustainable spaces.',
    icon: Wrench,
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
