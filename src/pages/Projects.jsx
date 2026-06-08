import React from 'react';
import { motion } from 'framer-motion';
import { useAppData } from '../context/AppDataContext';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects } = useAppData();

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-text mb-4"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text/70 max-w-2xl mx-auto"
          >
            Explore our curated selection of bespoke interior designs and custom furniture solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-text/50">
              No projects found. Admin can add new projects from the dashboard.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
