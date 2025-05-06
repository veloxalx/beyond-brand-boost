
import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Brand Strategy" },
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Digital Marketing" },
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Content Strategy" },
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Analytics & Insights" },
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Brand Strategy" },
    { imgSrc: "https://placehold.co/400x300", title: "Project Name", category: "Digital Marketing" },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5">Our Portfolio</h2>
          <p className="text-lg text-text-gray">
            Explore some of our best work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
