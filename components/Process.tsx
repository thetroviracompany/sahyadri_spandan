import React from 'react';
import { BOOKING_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-600">Your journey from dream to reality in 4 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-full"></div>

          {BOOKING_STEPS.map((step, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-primary-300 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-white">
                {idx + 1}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
              
              {idx < BOOKING_STEPS.length - 1 && (
                <ArrowRight className="md:hidden w-6 h-6 text-gray-300 mt-4 mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};