
import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  const textColor = isFooter ? 'text-white' : 'text-primary-dark';
  
  return (
    <div className="flex items-center">
      <div className="w-[50px] h-[50px] bg-primary-dark rounded-full flex justify-center items-center mr-2.5 relative">
        <div className="w-[30px] h-[6px] bg-primary-orange rotate-45"></div>
      </div>
      <div className="flex flex-col">
        <h1 className={`text-2xl font-bold tracking-wider ${textColor}`}>BEYOND</h1>
        <span className={`text-xs tracking-[4px] ${isFooter ? 'text-white/70' : 'text-text-gray'} lowercase`}>solutions</span>
      </div>
    </div>
  );
};

export default Logo;
