
import React from 'react';

const ClientsSection: React.FC = () => {
  // In a real app, you would use real client logos here
  const clients = Array(5).fill('https://placehold.co/120x40');

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5">Trusted By</h2>
          <p className="text-lg text-text-gray">
            We're proud to work with these amazing companies
          </p>
        </div>
        
        <div className="flex flex-wrap justify-around items-center gap-10">
          {clients.map((client, index) => (
            <img 
              key={index}
              src={client} 
              alt={`Client logo ${index + 1}`} 
              className="h-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
