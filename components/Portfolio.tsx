import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity 'Nexus'",
    category: "Branding / Print",
    imageUrl: "https://picsum.photos/seed/nexus/800/600",
    description: "Ein komplettes Corporate Design für ein Tech-Startup."
  },
  {
    id: 2,
    title: "E-Commerce UI Redesign",
    category: "UI/UX Design",
    imageUrl: "https://picsum.photos/seed/shop/800/600",
    description: "Modernisierung eines Online-Shops mit Fokus auf Conversion."
  },
  {
    id: 3,
    title: "Social Media Kampagne",
    category: "Social Media",
    imageUrl: "https://picsum.photos/seed/social/800/600",
    description: "Visuelle Content-Strategie für Instagram und LinkedIn."
  },
  {
    id: 4,
    title: "Mobile App 'TravelGo'",
    category: "App Design",
    imageUrl: "https://picsum.photos/seed/app/800/600",
    description: "Interface Design für eine Reiseplanungs-App."
  },
  {
    id: 5,
    title: "Editorial Design Magazin",
    category: "Print",
    imageUrl: "https://picsum.photos/seed/mag/800/600",
    description: "Layout und Satz für ein Lifestyle-Magazin."
  },
  {
    id: 6,
    title: "Dashboard Interface",
    category: "Web App",
    imageUrl: "https://picsum.photos/seed/dash/800/600",
    description: "Komplexes Daten-Dashboard nutzerfreundlich gestaltet."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ausgewählte <span className="text-brand-accent">Arbeiten</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ein Einblick in meine bisherigen Projekte. Von Print bis Digital, stets mit dem Fokus auf Qualität und Detailtreue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-brand-gray rounded-xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="flex items-center gap-2 text-white font-bold border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-brand-accent transition-colors">
                      Details ansehen <ExternalLink size={18} />
                   </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-brand-accent uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#contact" className="inline-block border-b border-gray-500 pb-1 text-gray-400 hover:text-white hover:border-white transition-colors">
                Mehr Projekte anfragen
             </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;