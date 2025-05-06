
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="https://placehold.co/600x400"
                alt="About Beyond Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About Beyond Solutions</h2>
            <p className="text-text-gray text-lg leading-relaxed mb-8">
              We are a team of strategists, creatives, and analysts who are passionate about helping businesses thrive in today's digital landscape. With our comprehensive approach, we deliver results-driven solutions that propel your brand forward.
            </p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
