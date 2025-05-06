
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="w-[70px] h-[70px] bg-light-gray rounded-xl flex justify-center items-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-text-gray mb-5">{description}</p>
      <a href="#" className="flex items-center font-semibold text-primary-dark">
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;
