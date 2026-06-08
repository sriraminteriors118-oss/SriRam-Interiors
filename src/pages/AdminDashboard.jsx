import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Plus, Image as ImageIcon, CheckCircle, X, Trash2 } from 'lucide-react';
import { useAppData } from '../context/AppDataContext';

const AdminDashboard = () => {
  const { isAdminAuth, logoutAdmin, addProject, projects, deleteProject } = useAppData();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    purpose: '',
    materials: '',
    features: '',
    uses: ''
  });

  const [coverImageBase64, setCoverImageBase64] = useState('');
  const [workImagesBase64, setWorkImagesBase64] = useState([]);

  useEffect(() => {
    if (!isAdminAuth) {
      navigate('/admin/login');
    }
  }, [isAdminAuth, navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCoverImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setCoverImageBase64(base64);
    }
  };

  const handleWorkImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    const base64Array = await Promise.all(files.map(file => convertToBase64(file)));
    setWorkImagesBase64(prev => [...prev, ...base64Array]);
  };

  const removeWorkImage = (indexToRemove) => {
    setWorkImagesBase64(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const newProject = {
        id: Date.now().toString(),
        ...formData,
        coverImage: coverImageBase64,
        workImages: workImagesBase64
      };

      addProject(newProject);
      
      setSuccessMsg('Project created successfully! It is now live in Projects and Gallery.');
      
      // Reset form
      setFormData({
        title: '', client: '', purpose: '', materials: '', features: '', uses: ''
      });
      setCoverImageBase64('');
      setWorkImagesBase64([]);
      
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (error) {
      console.error(error);
      alert('Error saving project. You might have exceeded LocalStorage size limits (5MB) with too many large images.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAdminAuth) return null;

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8 bg-surface p-6 rounded-xl shadow-sm border border-text/5">
          <div>
            <h1 className="text-2xl font-serif text-text">Admin Dashboard</h1>
            <p className="text-sm text-text/60">Welcome, Shiva Porandla</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {successMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3 font-medium shadow-sm"
          >
            <CheckCircle size={20} />
            {successMsg}
          </motion.div>
        )}

        <div className="bg-surface rounded-xl shadow-xl border border-text/5 overflow-hidden">
          <div className="p-6 border-b border-text/10 bg-text/5">
            <h2 className="text-xl font-semibold text-text flex items-center gap-2">
              <Plus size={20} className="text-primary" />
              Create New Project
            </h2>
            <p className="text-sm text-text/60 mt-1">All fields are optional, but providing more details creates a better project page.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text/80">Project Title</label>
                <input 
                  type="text" name="title" value={formData.title} onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1"
                  placeholder="e.g. Modern Villa Interior"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text/80">Client / Location</label>
                <input 
                  type="text" name="client" value={formData.client} onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1"
                  placeholder="e.g. Mr. Sharma, Hyderabad"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text/80">Project Purpose</label>
              <textarea 
                name="purpose" value={formData.purpose} onChange={handleInputChange} rows="2"
                className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1 resize-none"
                placeholder="Brief description of the project's main goal..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text/80">Materials Used</label>
              <input 
                type="text" name="materials" value={formData.materials} onChange={handleInputChange}
                className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1"
                placeholder="e.g. Teak Wood, Marble, Fluted Glass (comma separated)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text/80">Key Features</label>
                <textarea 
                  name="features" value={formData.features} onChange={handleInputChange} rows="3"
                  className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1 resize-none"
                  placeholder="Describe unique features of this project..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text/80">Primary Uses</label>
                <textarea 
                  name="uses" value={formData.uses} onChange={handleInputChange} rows="3"
                  className="w-full px-4 py-2 bg-background border border-surface/80 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1 resize-none"
                  placeholder="Describe how the space is intended to be used..."
                />
              </div>
            </div>

            {/* Image Uploads */}
            <div className="border-t border-text/10 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-text mb-4">Media Uploads</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text/80 mb-2">Cover Image (Thumbnail)</label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer bg-surface border border-text/20 hover:border-primary text-text px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-medium">
                      <ImageIcon size={18} />
                      Choose Image
                      <input type="file" accept="image/*" onChange={handleCoverImageChange} className="hidden" />
                    </label>
                    {coverImageBase64 && <span className="text-sm text-green-600 font-medium">Image selected</span>}
                  </div>
                  {coverImageBase64 && (
                    <img src={coverImageBase64} alt="Cover Preview" className="mt-3 h-32 w-auto object-cover rounded-md shadow-sm border border-text/10" />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text/80 mb-2">Work Gallery Images (Multiple)</label>
                  <label className="cursor-pointer bg-surface border border-text/20 hover:border-primary text-text px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2 text-sm font-medium mb-3">
                    <ImageIcon size={18} />
                    Choose Images
                    <input type="file" accept="image/*" multiple onChange={handleWorkImagesChange} className="hidden" />
                  </label>
                  
                  {workImagesBase64.length > 0 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {workImagesBase64.map((img, idx) => (
                        <div key={idx} className="relative shrink-0">
                          <img src={img} alt={`Work ${idx}`} className="h-24 w-24 object-cover rounded-md shadow-sm border border-text/10" />
                          <button 
                            type="button" 
                            onClick={() => removeWorkImage(idx)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-text/10">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md font-medium"
              >
                {isSubmitting ? 'Saving Project...' : 'Publish Project'}
              </button>
            </div>
          </form>
        </div>

        {/* Manage Projects Section */}
        <div className="mt-12 bg-surface rounded-xl shadow-xl border border-text/5 overflow-hidden">
          <div className="p-6 border-b border-text/10 bg-text/5">
            <h2 className="text-xl font-semibold text-text flex items-center gap-2">
              Manage Existing Projects
            </h2>
          </div>
          <div className="p-6">
            {projects.length === 0 ? (
              <p className="text-text/60 text-sm">No projects created yet.</p>
            ) : (
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-background border border-text/10 rounded-lg hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4">
                      {project.coverImage && (
                        <img src={project.coverImage} alt={project.title} className="w-16 h-16 object-cover rounded-md" />
                      )}
                      <div>
                        <h4 className="font-medium text-text">{project.title}</h4>
                        <p className="text-xs text-text/60">{project.client} • {project.workImages?.length || 0} work images</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${project.title}"? This will also remove its images from the gallery.`)) {
                          deleteProject(project.id);
                        }
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
