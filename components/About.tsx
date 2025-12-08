import React from 'react';
import { User, Heart, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="order-2 md:order-1 relative">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-gray border border-white/10 relative group">
                {/* Abstract placeholder for user photo - using a nice gradient/pattern since no photo provided */}
                <img 
                  src="https://picsum.photos/600/800?grayscale" 
                  alt="Abdullah Portrait" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                    <p className="text-brand-accent font-display font-bold text-xl">Abdullah</p>
                    <p className="text-gray-400 text-sm">Media Designer</p>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-brand-accent/30 rounded-2xl"></div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl font-display font-bold">
              Über <span className="text-brand-accent">Mich</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Hey, ich bin Abdullah, Media Designer. 
                Ich würde mich selbst besonders als <span className="text-white font-medium border-b border-brand-accent">lernfreudig</span>, 
                <span className="text-white font-medium border-b border-brand-accent mx-1">teamorientiert</span> und 
                <span className="text-white font-medium border-b border-brand-accent">kreativ</span> beschreiben.
              </p>
              <p>
                Als Media Designer bin ich stets auf der Suche nach neuen Herausforderungen, 
                die es mir ermöglichen, mich kontinuierlich weiterzuentwickeln. 
                Design ist für mich nicht nur Dekoration, sondern Problemlösung durch visuelle Kommunikation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
               <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-brand-accent/50 transition-colors">
                  <Heart className="text-brand-accent mb-3" size={24} />
                  <h3 className="font-bold text-white mb-1">Leidenschaft</h3>
                  <p className="text-sm text-gray-400">Design ist mehr als ein Job, es ist meine Passion.</p>
               </div>
               <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-brand-accent/50 transition-colors">
                  <Zap className="text-brand-accent mb-3" size={24} />
                  <h3 className="font-bold text-white mb-1">Schnelle Auffassung</h3>
                  <p className="text-sm text-gray-400">Neue Tools und Trends lerne ich blitzschnell.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;