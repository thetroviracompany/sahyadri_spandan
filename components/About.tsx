import React from 'react';
import { SectionId } from '../types';
import { APP_NAME } from '../constants';
// Using public folder path, no import needed

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="pt-24 md:pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute top-4 -left-4 w-full h-full bg-primary-100 rounded-3xl z-0"></div>
            <img 
              src="/assets/pan_india.jpeg"
              alt="PAN India travel representation" 
              className="relative z-10 rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="font-bold text-gray-900">{APP_NAME}</span> is a PAN India tour and travel company delivering safe, enjoyable, and memorable travel experiences.
            </p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-primary-600 shadow-sm text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 italic">
                "To make travel in India simple, affordable, and experience-rich for everyone."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
