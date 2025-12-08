import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Abdullah Media Design. Alle Rechte vorbehalten.
        </p>
        <div className="flex space-x-6 text-sm text-gray-500">
           <a href="#" className="hover:text-white transition-colors">Impressum</a>
           <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;