
import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const categories = [
    { id: 'starters', label: 'Starters / Smørrebrød', icon: 'restaurant' },
    { id: 'main-courses', label: 'Main Courses', icon: 'dinner_dining' },
    { id: 'desserts', label: 'Desserts', icon: 'icecream' },
    { id: 'beverages', label: 'Beverages', icon: 'local_bar' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-10">
        <div className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4 text-center" 
             style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1550966841-396ad8867568?auto=format&fit=crop&q=80&w=1600")` }}>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Our Menu</h1>
            <h2 className="text-white text-base font-normal leading-normal md:text-xl">A taste of Northern Europe in the heart of Hanoi.</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold transition-transform hover:scale-105 active:scale-95">
              Download Full Menu (PDF)
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light/90 dark:bg-background-dark/90 text-text-light dark:text-text-dark text-base font-bold hover:bg-white dark:hover:bg-black transition-colors">
              Book a Table
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 py-10">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 md:sticky md:top-28 self-start">
          <div className="flex h-full flex-col justify-between p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold leading-normal">Menu Categories</h3>
                <p className="text-xs font-normal text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mt-1">Jump to section</p>
              </div>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <a key={cat.id} href={`#${cat.id}`} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                    <p className="text-sm font-medium">{cat.label.split(' / ')[0]}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Menu Grid */}
        <div className="flex-1">
          {categories.map((cat) => {
            const items = MENU_ITEMS.filter(i => i.category === cat.id);
            if (items.length === 0 && cat.id !== 'beverages') return null;

            return (
              <section key={cat.id} className="mb-12 scroll-mt-28" id={cat.id}>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-5 border-b border-border-light dark:border-border-dark mb-6">
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div key={item.id} className="p-4 bg-card-light dark:bg-card-dark rounded-lg border border-border-light dark:border-border-dark hover:shadow-md transition-shadow">
                        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4">
                          <div className="flex flex-col gap-1 flex-1">
                            <p className="text-base font-bold leading-tight">{item.name}</p>
                            <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                              {item.description}
                            </p>
                            <p className="mt-2 text-base font-bold text-primary">{item.price}</p>
                          </div>
                          <div 
                            className="w-full sm:w-32 md:w-40 bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex-shrink-0"
                            style={{ backgroundImage: `url("${item.image}")` }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-text-muted-light dark:text-text-muted-dark italic col-span-2 py-4">
                      Coming soon... Our curated beverage selection is currently being updated.
                    </p>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
