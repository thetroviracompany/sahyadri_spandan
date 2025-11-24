import React from 'react';
import { COMPANY_VALUES } from '../constants';
import { ShieldCheck, MapPin, HeartHandshake, TreePine } from 'lucide-react';

const icons = [ShieldCheck, MapPin, HeartHandshake, TreePine];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_VALUES.map((value, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};