
import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo isFooter />
            <p className="text-white/70 my-5 max-w-xs">
              Transforming ideas into powerful strategies that drive growth and elevate your brand.
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-primary-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Brand Strategy',
                'Digital Marketing',
                'Content Strategy',
                'Analytics & Insights'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-primary-orange transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@beyondsolutions.com"
                  className="text-white/70 hover:text-primary-orange transition-colors"
                >
                  info@beyondsolutions.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890"
                  className="text-white/70 hover:text-primary-orange transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-white/70">
                123 Strategy Street,<br />Innovation City, IC 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-white/50 text-sm mt-12">
          <p>&copy; 2025 Beyond Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
