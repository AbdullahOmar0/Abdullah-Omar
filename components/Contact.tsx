import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Lass uns <span className="text-brand-accent">sprechen</span></h2>
          <p className="text-gray-400">
            Haben Sie ein Projekt im Kopf oder suchen Sie Verstärkung für Ihr Team? 
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-brand-gray border border-white/5 p-8 md:p-12 rounded-3xl">
          
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white text-center">Kontaktinfo</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:hallo@abdullah-design.de" className="text-lg text-white hover:text-brand-accent transition-colors font-medium">hallo@abdullah-design.de</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                 <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Telefon</p>
                  <p className="text-lg text-white font-medium">+49 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                 <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Standort</p>
                  <p className="text-lg text-white font-medium">Berlin, Deutschland</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 text-center">
                <p className="text-gray-500 italic">"Gutes Design ist so wenig Design wie möglich."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;