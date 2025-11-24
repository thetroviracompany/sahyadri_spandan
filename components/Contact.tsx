import React from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="pt-24 md:pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Have questions or ready to book? We are just a message away. Reach out to us for a customized itinerary.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
             {/* WhatsApp */}
            <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-500 mb-4 text-sm">Chat with us instantly</p>
              <p className="text-primary-600 font-bold text-lg">{CONTACT_INFO.whatsapp}</p>
            </div>

             {/* Phone */}
            <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4 text-sm">Mon-Fri from 9am to 6pm</p>
              <p className="text-primary-600 font-bold text-lg">{CONTACT_INFO.phone}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-500 mb-4 text-sm">Drop us a line anytime</p>
              <p className="text-primary-600 font-bold text-lg break-all">{CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};