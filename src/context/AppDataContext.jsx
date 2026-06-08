import React, { createContext, useContext, useState, useEffect } from 'react';

const AppDataContext = createContext();

const initialGalleryData = [
  { id: 1, category: 'living', title: 'Modern Minimalist Lounge', src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'kitchen', title: 'Contemporary Island Kitchen', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'bedroom', title: 'Luxury Master Suite', src: 'https://images.unsplash.com/photo-1522771731478-44fb90e816a1?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'living', title: 'Classic Elegance Living', src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'kitchen', title: 'Scandinavian Oak Kitchen', src: 'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'commercial', title: 'Executive Office Suite', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 7, category: 'bedroom', title: 'Bespoke Wardrobe Design', src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800' },
  { id: 8, category: 'living', title: 'Open Plan Dining Area', src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800' },
  { id: 9, category: 'glass', title: 'Modern Glass Partition', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
];

const initialProjectsData = [
  {
    id: 'bata-showroom',
    title: 'Bata Showroom Interior',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    client: 'Bata',
    purpose: 'Commercial Retail Store',
    materials: 'Premium Oak Wood, Glass panels, LED profile lighting, Custom metal racks',
    features: 'Open layout, custom footwear display units, ambient lighting, modern billing counter',
    uses: 'Retail display and customer experience enhancement',
    workImages: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582046101962-d2780fbdb050?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const AppDataProvider = ({ children }) => {
  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('sr_gallery');
    return saved ? JSON.parse(saved) : initialGalleryData;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('sr_projects');
    return saved ? JSON.parse(saved) : initialProjectsData;
  });

  const [isAdminAuth, setIsAdminAuth] = useState(() => {
    return localStorage.getItem('sr_admin_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sr_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('sr_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('sr_admin_auth', isAdminAuth);
  }, [isAdminAuth]);

  const addProject = (project) => {
    setProjects([project, ...projects]);
    
    // Also add project work images to gallery
    if (project.workImages && project.workImages.length > 0) {
      const newGalleryItems = project.workImages.map((img, index) => ({
        id: Date.now() + index,
        category: 'commercial', // default category for projects
        title: `${project.title} - Work Image ${index + 1}`,
        src: img
      }));
      setGalleryItems([...newGalleryItems, ...galleryItems]);
    } else if (project.coverImage) {
      setGalleryItems([{
        id: Date.now(),
        category: 'commercial',
        title: project.title,
        src: project.coverImage
      }, ...galleryItems]);
    }
  };

  const deleteProject = (projectId) => {
    const projectToDelete = projects.find(p => p.id === projectId);
    if (!projectToDelete) return;

    setProjects(projects.filter(p => p.id !== projectId));

    // Clean up gallery items added by this project
    setGalleryItems(galleryItems.filter(item => {
      return !item.title.startsWith(projectToDelete.title);
    }));
  };

  const loginAdmin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdminAuth(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuth(false);
  };

  return (
    <AppDataContext.Provider value={{
      galleryItems,
      projects,
      addProject,
      deleteProject,
      isAdminAuth,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
