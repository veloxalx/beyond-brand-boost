
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 py-5 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item} className="ml-10">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-primary-dark font-medium hover:text-primary-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white py-5 md:hidden">
              <div className="container flex flex-col h-full">
                <div className="flex justify-between items-center">
                  <Logo />
                  <button 
                    className="text-primary-dark"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-primary-dark font-medium text-xl hover:text-primary-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
