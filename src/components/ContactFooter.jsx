import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const ContactFooter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyX_AWhaJwPhAvA-dtpRfzetM2tEBtvIyukvL513xxZG5ej-MoOg_Nrszznw-EFok0J/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-surface relative pt-24 pb-12 text-text">
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 text-text">Let's Start Your Project</h3>
            <p className="text-text/70 text-lg">
              Ready to transform your space? Our design team is here to bring your vision to life.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left: Contact Info & Map (Takes 2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col h-full space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-full shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl mb-2 font-semibold">Our Studio</h4>
                  <p className="text-text/70 text-base leading-relaxed">
                    38VW+C4V, Indira Nagar Road,<br />
                    Indira Nagar, Nirmal,<br />
                    Telangana 504106
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-full shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl mb-2 font-semibold">Contact</h4>
                  <p className="text-text/70 text-base leading-relaxed mb-1">
                    <a href="tel:+917995998118" className="hover:text-primary transition-colors font-medium">+91 79959 98118</a>
                  </p>
                  <p className="text-text/70 text-base leading-relaxed">
                    <a href="tel:+919908166079" className="hover:text-primary transition-colors font-medium">+91 99081 66079</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-full shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <h4 className="font-serif text-xl mb-2 font-semibold">Email</h4>
                  <p className="text-text/70 text-base leading-relaxed">
                    <a href="mailto:sriraminteriors118@gmail.com" className="hover:text-primary transition-colors break-all">sriraminteriors118@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 md:h-80 bg-white p-2 rounded-2xl shadow-md relative mt-auto border border-primary/5">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1780823995061!5m2!1sen!2sin!6m8!1m7!1sKu8wZm-RYkmUB5Ji4J5u8A!2m2!1d19.09362152800394!2d78.3452891874936!3f259.7345599947762!4f1.9226503783031177!5f0.7820865974627469" 
                  className="absolute inset-0 w-full h-full" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
          </motion.div>

          {/* Right: Contact Form (Takes 3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary/5">
              <h4 className="text-2xl font-serif font-semibold mb-8 text-text border-b border-surface pb-4">Send us a message</h4>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text/80 mb-2">Full Name <span className="text-primary">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="Name"
                      required
                      className="w-full bg-background border border-surface/80 rounded-lg px-4 py-3.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-text/30"
                      placeholder="Jai Sriram"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text/80 mb-2">Phone Number <span className="text-primary">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="Phone"
                      required
                      className="w-full bg-background border border-surface/80 rounded-lg px-4 py-3.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-text/30"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text/80 mb-2">Email Address <span className="text-primary">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="Email"
                      required
                      className="w-full bg-background border border-surface/80 rounded-lg px-4 py-3.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-text/30"
                      placeholder="Jaisriram@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="leadType" className="block text-sm font-semibold text-text/80 mb-2">Inquiry Type <span className="text-primary">*</span></label>
                    <select 
                      id="leadType" 
                      name="InquiryType"
                      required
                      defaultValue=""
                      className="w-full bg-background border border-surface/80 rounded-lg px-4 py-3.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-text/50">Select inquiry type</option>
                      <option value="Quotation">Get a Quotation</option>
                      <option value="Service Inquiry">Service Inquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text/80 mb-2">Project Details <span className="text-primary">*</span></label>
                  <textarea 
                    id="message" 
                    name="Message"
                    required
                    rows="5" 
                    className="w-full bg-background border border-surface/80 rounded-lg px-4 py-3.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder:text-text/30"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 font-medium tracking-wide disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm text-center mt-4 font-medium">
                    Thank you! Your details have been submitted. We will contact you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center mt-4 font-medium">
                    Oops! Something went wrong. Please try calling us directly instead.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-text/10 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/60">
          <p>&copy; {new Date().getFullYear()} Sri Ram Interiors & Furniture. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
            <div className="w-px h-4 bg-text/20 mx-2"></div>
            <a href="#" className="hover:text-primary transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
