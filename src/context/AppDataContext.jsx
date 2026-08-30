import React, { createContext, useContext, useState, useEffect } from 'react';

const AppDataContext = createContext();

const initialGalleryData = [
  {
    "id": 1,
    "category": "bedroom",
    "title": "Bedrooms Design 1",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251016_165229.jpg"
  },
  {
    "id": 2,
    "category": "bedroom",
    "title": "Bedrooms Design 2",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251016_165235.jpg"
  },
  {
    "id": 3,
    "category": "bedroom",
    "title": "Bedrooms Design 3",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251106_215948.jpg"
  },
  {
    "id": 4,
    "category": "bedroom",
    "title": "Bedrooms Design 4",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251106_215956.jpg"
  },
  {
    "id": 5,
    "category": "bedroom",
    "title": "Bedrooms Design 5",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251106_220044.jpg"
  },
  {
    "id": 6,
    "category": "bedroom",
    "title": "Bedrooms Design 6",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251106_220110.jpg"
  },
  {
    "id": 7,
    "category": "bedroom",
    "title": "Bedrooms Design 7",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251106_220146.jpg"
  },
  {
    "id": 8,
    "category": "bedroom",
    "title": "Bedrooms Design 8",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251215_181955.jpg"
  },
  {
    "id": 9,
    "category": "bedroom",
    "title": "Bedrooms Design 9",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251215_182047.jpg"
  },
  {
    "id": 10,
    "category": "bedroom",
    "title": "Bedrooms Design 10",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20251215_182106.jpg"
  },
  {
    "id": 11,
    "category": "bedroom",
    "title": "Bedrooms Design 11",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260528_111431.jpg"
  },
  {
    "id": 12,
    "category": "bedroom",
    "title": "Bedrooms Design 12",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260528_111500.jpg"
  },
  {
    "id": 13,
    "category": "bedroom",
    "title": "Bedrooms Design 13",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260605_103050.jpg"
  },
  {
    "id": 14,
    "category": "bedroom",
    "title": "Bedrooms Design 14",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260605_103054.jpg"
  },
  {
    "id": 15,
    "category": "bedroom",
    "title": "Bedrooms Design 15",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260605_103138.jpg"
  },
  {
    "id": 16,
    "category": "bedroom",
    "title": "Bedrooms Design 16",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260605_103310.jpg"
  },
  {
    "id": 17,
    "category": "bedroom",
    "title": "Bedrooms Design 17",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260814_123312.jpg"
  },
  {
    "id": 18,
    "category": "bedroom",
    "title": "Bedrooms Design 18",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260814_131735.jpg"
  },
  {
    "id": 19,
    "category": "bedroom",
    "title": "Bedrooms Design 19",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260818_102909.jpg"
  },
  {
    "id": 20,
    "category": "bedroom",
    "title": "Bedrooms Design 20",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260818_103009.jpg"
  },
  {
    "id": 21,
    "category": "bedroom",
    "title": "Bedrooms Design 21",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260818_222544.jpg"
  },
  {
    "id": 22,
    "category": "bedroom",
    "title": "Bedrooms Design 22",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260818_222602.jpg"
  },
  {
    "id": 23,
    "category": "bedroom",
    "title": "Bedrooms Design 23",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/20260818_223500.jpg"
  },
  {
    "id": 24,
    "category": "bedroom",
    "title": "Bedrooms Design 24",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/IMG-20250911-WA0007.jpg"
  },
  {
    "id": 25,
    "category": "bedroom",
    "title": "Bedrooms Design 25",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/IMG-20250912-WA0036.jpg"
  },
  {
    "id": 26,
    "category": "bedroom",
    "title": "Bedrooms Design 26",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/IMG-20250912-WA0039.jpg"
  },
  {
    "id": 27,
    "category": "bedroom",
    "title": "Bedrooms Design 27",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/IMG_20260722_232620_613.jpg"
  },
  {
    "id": 28,
    "category": "bedroom",
    "title": "Bedrooms Design 28",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/IMG_20260722_232620_634.jpg"
  },
  {
    "id": 29,
    "category": "bedroom",
    "title": "Bedrooms Design 29",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_0000000048688211a1945e9def642784.png"
  },
  {
    "id": 30,
    "category": "bedroom",
    "title": "Bedrooms Design 30",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_0000000064b0821197f1e4996644af96.png"
  },
  {
    "id": 31,
    "category": "bedroom",
    "title": "Bedrooms Design 31",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_00000000787c82118621c9c3f1c93d92.png"
  },
  {
    "id": 32,
    "category": "bedroom",
    "title": "Bedrooms Design 32",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_000000008b54821187f00c4b7cf1f2ea.png"
  },
  {
    "id": 33,
    "category": "bedroom",
    "title": "Bedrooms Design 33",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_00000000c818820bae7f2864dc86ed51.png"
  },
  {
    "id": 34,
    "category": "bedroom",
    "title": "Bedrooms Design 34",
    "src": "/assets/portfolio/Sri ram interior/Bedrooms/file_00000000d69c8211b609b765ee69d81f.png"
  },
  {
    "id": 35,
    "category": "kitchen",
    "title": "Modular Kitchen Design 35",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260806_164838.jpg"
  },
  {
    "id": 36,
    "category": "kitchen",
    "title": "Modular Kitchen Design 36",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260814_113406.jpg"
  },
  {
    "id": 37,
    "category": "kitchen",
    "title": "Modular Kitchen Design 37",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260814_113426.jpg"
  },
  {
    "id": 38,
    "category": "kitchen",
    "title": "Modular Kitchen Design 38",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260814_124035.mp4"
  },
  {
    "id": 39,
    "category": "kitchen",
    "title": "Modular Kitchen Design 39",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260818_222241.jpg"
  },
  {
    "id": 40,
    "category": "kitchen",
    "title": "Modular Kitchen Design 40",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260818_222458.jpg"
  },
  {
    "id": 41,
    "category": "kitchen",
    "title": "Modular Kitchen Design 41",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/20260818_222504.jpg"
  },
  {
    "id": 42,
    "category": "kitchen",
    "title": "Modular Kitchen Design 42",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/IMG_20260722_232620_545.jpg"
  },
  {
    "id": 43,
    "category": "kitchen",
    "title": "Modular Kitchen Design 43",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/IMG_20260722_232620_575.jpg"
  },
  {
    "id": 44,
    "category": "kitchen",
    "title": "Modular Kitchen Design 44",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/file_00000000aeac820bbcd11127874ad0c9.png"
  },
  {
    "id": 45,
    "category": "kitchen",
    "title": "Modular Kitchen Design 45",
    "src": "/assets/portfolio/Sri ram interior/Modular Kitchen/file_00000000da1c820b84b8b4d810e9a696.png"
  },
  {
    "id": 46,
    "category": "living",
    "title": "Tv units Design 46",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20250927_140722.jpg"
  },
  {
    "id": 47,
    "category": "living",
    "title": "Tv units Design 47",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20251106_215346.jpg"
  },
  {
    "id": 48,
    "category": "living",
    "title": "Tv units Design 48",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20251215_184004.jpg"
  },

  {
    "id": 50,
    "category": "living",
    "title": "Tv units Design 50",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20260215_144530.jpg"
  },
  {
    "id": 51,
    "category": "living",
    "title": "Tv units Design 51",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20260806_165240.jpg"
  },
  {
    "id": 52,
    "category": "living",
    "title": "Tv units Design 52",
    "src": "/assets/portfolio/Sri ram interior/Tv units/20260814_121407.jpg"
  }
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
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Only keep items that were dynamically added (assuming dynamic items use Date.now() for ID which is much larger than initial IDs)
        const dynamicItems = parsed.filter(item => typeof item.id === 'number' && item.id > 1000);
        return [...initialGalleryData, ...dynamicItems];
      } catch (e) {
        return initialGalleryData;
      }
    }
    return initialGalleryData;
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
