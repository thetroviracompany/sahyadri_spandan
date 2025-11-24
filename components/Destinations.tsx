import React from 'react';
import { POPULAR_DESTINATIONS } from '../constants';
import { SectionId } from '../types';
import { MapPin } from 'lucide-react';

export const Destinations: React.FC = () => {
  return (
    <section id={SectionId.DESTINATIONS} className="pt-24 md:pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="w-full md:w-auto text-center md:text-left">
            <span className="text-primary-600 font-semibold tracking-wider uppercase">Explore India</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Popular Destinations</h2>
          </div>
          <p className="text-gray-600 max-w-md text-center md:text-right">
            Curated experiences from the mountains to the beaches. Find your perfect getaway.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Popular
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};