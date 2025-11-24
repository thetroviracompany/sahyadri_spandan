import React from 'react';
import { SectionId } from '../types';
import { Compass, Camera, Sun, Mountain, Building, Gift } from 'lucide-react';

const categories = [
  { name: "Adventure Tours", icon: Compass, color: "text-red-500", bg: "bg-red-50" },
  { name: "Nature & Wildlife", icon: Camera, color: "text-green-500", bg: "bg-green-50" },
  { name: "Beach Holidays", icon: Sun, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Hill Station Trips", icon: Mountain, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "City Escapes", icon: Building, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Customized Packages", icon: Gift, color: "text-pink-500", bg: "bg-pink-50" },
];

export const Packages: React.FC = () => {
  return (
    <section id={SectionId.PACKAGES} className="pt-24 md:pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Tours & Packages</h2>
          <p className="mt-4 text-gray-600">Choose a travel style that suits your spirit.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className={`${cat.bg} rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-gray-100`}>
              <cat.icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 ${cat.color}`} />
              <h3 className="font-semibold text-sm md:text-base text-gray-900">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};