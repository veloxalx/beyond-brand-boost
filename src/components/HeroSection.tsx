
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-primary-dark/10 z-0">
        {/* Using a placeholder background image since video might not be available */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-primary-dark/5"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Go Beyond <br />with Us
            </h1>
            <p className="text-lg text-text-gray mb-10 max-w-xl">
              We turn bold ideas into powerful strategies that drive growth and transform businesses in the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:w-1/2 relative">
            <div className="absolute right-[-100px] w-[600px] h-[600px]">
              <div className="w-full h-full border-[80px] border-primary-dark rounded-full relative">
                <div className="absolute inset-0 bg-primary-orange rounded-full transform translate-x-[80px] -translate-y-[80px] -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
