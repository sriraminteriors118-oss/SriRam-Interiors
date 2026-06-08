import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAppData } from '../context/AppDataContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useAppData();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id || p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Handle project not found
      navigate('/projects');
    }
  }, [id, projects, navigate]);

  if (!project) return null;

  return (
    <div className="pt-32 lg:pt-40 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-text/70 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-3 block">
              {project.client}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text mb-6">
              {project.title}
            </h1>
          </motion.div>
        </div>

        {/* Cover Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-16 shadow-xl"
        >
          <img 
            src={project.coverImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-text mb-4">Project Overview</h3>
              <p className="text-lg text-text/80 leading-relaxed">
                {project.purpose}
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-text mb-4">Features & Uses</h3>
              <div className="bg-surface p-8 rounded-xl border border-text/5">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-text/50 uppercase tracking-wider mb-2">Key Features</h4>
                    <p className="text-text/90 leading-relaxed">{project.features || 'Custom designed elements tailored to client requirements.'}</p>
                  </div>
                  <div className="w-full h-px bg-text/10"></div>
                  <div>
                    <h4 className="text-sm font-bold text-text/50 uppercase tracking-wider mb-2">Primary Uses</h4>
                    <p className="text-text/90 leading-relaxed">{project.uses || 'Optimized for spatial efficiency and aesthetic appeal.'}</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary/5 border border-primary/10 p-8 rounded-xl">
              <h3 className="text-xl font-serif text-text mb-6">Materials Used</h3>
              <ul className="space-y-4">
                {(project.materials ? project.materials.split(',') : ['Premium Wood', 'Custom Laminates', 'Toughened Glass']).map((mat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-text/80">{mat.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-surface p-8 rounded-xl border border-text/5">
              <h3 className="text-xl font-serif text-text mb-4">Need a similar design?</h3>
              <p className="text-text/70 mb-6 text-sm">Let our expert team bring your vision to life with precision and style.</p>
              <a 
                href="/#contact"
                className="block w-full text-center bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors font-medium shadow-sm"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.workImages && project.workImages.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-text/10"
          >
            <h3 className="text-3xl font-serif text-text mb-10 text-center">Work Gallery</h3>
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {project.workImages.map((img, idx) => (
                <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-md">
                  <img src={img} alt={`Work progress ${idx + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetails;
