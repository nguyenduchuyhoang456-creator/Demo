
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Interior', 'Dishes', 'Atmosphere'];
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1550966841-396ad8867568?auto=format&fit=crop&q=80&w=600', cat: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600', cat: 'Dishes' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600', cat: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600', cat: 'Atmosphere' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600', cat: 'Dishes' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600', cat: 'Atmosphere' },
    { src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600', cat: 'Dishes' },
    { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=600', cat: 'Atmosphere' },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=600', cat: 'Interior' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.cat === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12 lg:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-white">Our Gallery</h1>
        <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-3xl">A glimpse into the warmth and elegance of the Nordic Hanoi experience.</p>
      </div>

      <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all
              ${filter === cat ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div 
            key={idx} 
            className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer"
          >
            <img 
              src={img.src} 
              alt={img.cat}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold border-2 border-white px-4 py-1 rounded-full uppercase text-xs tracking-widest">{img.cat}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-black mb-4">Experience the Art of Nordic Dining</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mb-8">Reserve your table and immerse yourself in an unforgettable culinary journey.</p>
        <button className="bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
          Book a Table
        </button>
      </div>
    </div>
  );
};

export default Gallery;
