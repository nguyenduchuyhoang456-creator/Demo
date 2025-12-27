
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-light dark:border-border-dark mt-12 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Nordic Hanoi</h2>
            </div>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Experience the authentic flavors of Northern Europe in the heart of Hanoi.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-text-muted-light dark:text-text-muted-dark">
              <li>123 Scandinavian St, Tay Ho, Hanoi</li>
              <li>+84 123 456 789</li>
              <li>contact@nordichanoi.vn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" href="#">Facebook</a>
              <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark text-center text-sm text-text-muted-light dark:text-text-muted-dark">
          <p>© 2024 Nordic Hanoi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
