import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionId } from '../types';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1920&q=80" 
          alt="Sahyadri Mountains Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-primary-300 animate-fade-in-up">
          Sahyadri Spandan
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Discover India, <br/>
          <span className="text-primary-400">One Beautiful Journey</span> at a Time
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
          From the mighty Himalayas to the serene beaches of Kerala and the hidden gems of the Western Ghats.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/destinations')}>
            Explore Destinations
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black" onClick={() => navigate('/contact')}>
            Plan My Trip
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="text-white opacity-70 hover:opacity-100 transition">
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};