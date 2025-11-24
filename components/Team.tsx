import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { SectionId } from '../types';
import { UserCircle } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id={SectionId.TEAM} className="pt-24 md:pt-32 pb-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400">The explorers behind your memorable journeys.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-750 transition border border-gray-700">
              <div className="bg-primary-900 p-3 rounded-full shrink-0">
                <UserCircle className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};