import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ShieldCheck, Clock, Users, Building2 } from 'lucide-react';

const reasons = [
  {
    title: 'Unbeatable Pricing',
    description: 'Premium & luxury interiors at fair prices.',
    icon: IndianRupee
  },
  {
    title: '100% Transparency',
    description: 'No hidden costs – only clear and upfront pricing.',
    icon: ShieldCheck
  },
  {
    title: 'On-Time Delivery',
    description: 'Guaranteed timelines without compromising on quality.',
    icon: Clock
  },
  {
    title: 'Experienced Designers',
    description: '500+ experts bringing creativity and precision to your home.',
    icon: Users
  },
  {
    title: 'World-Class Experience Centers',
    description: 'Explore inspiring interiors before you design yours.',
    icon: Building2
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">✨ Why Choose Us?</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-text mb-6">Experience the Best</h3>
            <p className="text-lg text-text/70">
              We deliver excellence through transparency, quality, and dedicated expertise.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-surface p-8 rounded-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h4>
                <p className="text-text/70 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
