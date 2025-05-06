
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would submit the form data to a backend service here
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5">Get in Touch</h2>
          <p className="text-lg text-text-gray">
            Schedule a free consultation call or send us a message
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <form onSubmit={handleSubmit} className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="company" className="mb-2 font-medium">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="service" className="mb-2 font-medium">Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              >
                <option value="">Select a service</option>
                <option value="brand-strategy">Brand Strategy</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="content-strategy">Content Strategy</option>
                <option value="analytics">Analytics & Insights</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
          
          <div className="w-full lg:w-1/3 bg-light-gray p-10 rounded-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-5">Prefer to talk?</h3>
            <p className="text-text-gray mb-8">Book a free 30-minute consultation call with one of our experts.</p>
            <a href="#" className="btn btn-secondary text-center">Schedule a Call</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
