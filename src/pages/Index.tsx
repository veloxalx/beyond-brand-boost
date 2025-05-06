
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
