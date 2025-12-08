import React from 'react';
import { ArrowDown, Palette, MousePointer2, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-brand-accent text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Verfügbar für Projekte
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hey, ich bin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Abdullah</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
            <span className="text-brand-accent font-semibold">Media Designer</span> & UI/UX Enthusiast
          </h2>
          
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Ich gestalte digitale Erlebnisse, die funktional und ästhetisch ansprechend sind.
            Fokus auf sauberes Design und intuitive Nutzerführung.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="mailto:hallo@abdullah-design.de" className="px-8 py-3 bg-brand-accent hover:bg-indigo-600 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              Kontaktieren
            </a>
          </div>
        </div>

        {/* Abstract Visual Representation of Media Design */}
        <div className="relative hidden md:block h-[500px]">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md aspect-square bg-gradient-to-tr from-brand-gray to-black border border-white/10 rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-xl flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                    <Palette size={40} className="text-white" />
                 </div>
                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white text-black rounded-xl flex items-center justify-center shadow-lg">
                    <MousePointer2 size={32} />
                 </div>
                 
                 {/* Mock Content inside the card */}
                 <div className="w-full h-full bg-brand-dark/50 rounded-lg overflow-hidden flex flex-col p-4 border border-white/5">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-md h-32 animate-pulse"></div>
                        <div className="bg-white/5 rounded-md h-32 animate-pulse delay-100"></div>
                        <div className="bg-white/5 rounded-md h-20 col-span-2 animate-pulse delay-200"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;