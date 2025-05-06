
import React from 'react';

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  category: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imgSrc, title, category }) => {
  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group">
      <img 
        src={imgSrc}
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl mb-2">{title}</h3>
        <p className="text-primary-orange">{category}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
