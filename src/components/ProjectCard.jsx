import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-text/5"
    >
      <Link to={`/projects/${project.id}`} className="block h-full w-full">
        <div className="relative h-64 overflow-hidden">
        <img 
          src={project.coverImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">{project.client}</span>
        </div>
        <h3 className="text-2xl font-serif text-text mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-text/70 text-sm mb-6 line-clamp-2">{project.purpose}</p>
        
        <div 
          className="inline-flex items-center gap-2 text-sm font-medium text-text group-hover:text-primary transition-colors group/link"
        >
          View Project Details
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
