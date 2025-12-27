
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Menu', path: '/' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Nordic Hanoi</h2>
      </Link>

      <nav className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive(link.path) ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          to="/reservations"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
        >
          <span className="truncate">Book a Table</span>
        </Link>
      </nav>

      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-md hover:bg-primary/20 transition-colors"
      >
        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark flex flex-col p-6 gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium ${isActive(link.path) ? 'text-primary' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/reservations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full h-12 flex items-center justify-center bg-primary text-white font-bold rounded-lg mt-2"
          >
            Book a Table
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
