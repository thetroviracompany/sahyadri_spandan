// Updated Footer component with Instagram & Facebook links added
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, CONTACT_INFO } from '../constants';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo.jpg" alt="Logo" className="w-14 h-14 object-contain" />
              <span className="text-2xl font-serif font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="mb-4 max-w-sm text-gray-400">
              Delivering safe, enjoyable, and memorable travel experiences across the beautiful landscapes of India.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61573412627386" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-500 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/sahyadri_spandan?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="hover:text-primary-500 transition">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-primary-500 transition">Packages</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: {CONTACT_INFO.phone}</li>
              <li>Email: {CONTACT_INFO.email}</li>
              <li>WhatsApp: {CONTACT_INFO.whatsapp}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} – PAN India Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};  