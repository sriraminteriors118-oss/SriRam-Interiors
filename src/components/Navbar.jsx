import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Services', href: '/#services', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const renderLink = (link, className) => {
    if (link.isRoute) {
      return (
        <Link key={link.name} to={link.href} className={className} onClick={() => setIsMobileMenuOpen(false)}>
          {link.name}
        </Link>
      );
    }
    return (
      <a key={link.name} href={link.href} className={className} onClick={() => setIsMobileMenuOpen(false)}>
        {link.name}
      </a>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Sri Ram Interiors Logo" className="h-16 w-auto sm:h-20" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => 
              renderLink(link, "text-text hover:text-primary transition-colors font-medium text-sm tracking-wide")
            )}
            <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-sm hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm hover:shadow-md">
              Get a Quote
            </a>
            <Link to="/admin/login" className="text-text/50 hover:text-primary transition-colors ml-4" aria-label="Admin Login">
              <Lock size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/admin/login" className="text-text/50 hover:text-primary transition-colors" aria-label="Admin Login">
              <Lock size={20} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-surface/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => 
                renderLink(link, "block px-3 py-4 text-base font-medium text-text hover:text-primary hover:bg-surface/50 rounded-md transition-colors")
              )}
              <div className="pt-4 px-3">
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors font-medium shadow-sm"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
