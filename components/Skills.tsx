import React from 'react';
import { PenTool, Monitor, Layout, Figma, Image, Code } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Adobe Illustrator', level: 85 },
  { name: 'Figma / XD', level: 95 },
  { name: 'Adobe InDesign', level: 80 },
  { name: 'HTML / CSS', level: 75 },
  { name: 'After Effects', level: 60 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-gray/30 relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Meine <span className="text-brand-accent">Skills</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Als Media Designer beherrsche ich die gängigen Tools der Branche. 
              Ich bilde mich ständig weiter, um technologisch immer auf dem neuesten Stand zu sein.
            </p>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-accent to-purple-500 rounded-full relative"
                      style={{ width: `${skill.level}%` }}
                    >
                        <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all flex flex-col justify-center items-center text-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                    <Layout size={28} />
                </div>
                <h3 className="font-bold">UI Design</h3>
                <p className="text-xs text-gray-500">Intuitive Interfaces für Web & Mobile</p>
            </div>
            <div className="p-6 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all flex flex-col justify-center items-center text-center gap-4 mt-8">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                    <PenTool size={28} />
                </div>
                <h3 className="font-bold">Branding</h3>
                <p className="text-xs text-gray-500">Logos, Farben & Identität</p>
            </div>
            <div className="p-6 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all flex flex-col justify-center items-center text-center gap-4 -mt-8">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                    <Image size={28} />
                </div>
                <h3 className="font-bold">Print Media</h3>
                <p className="text-xs text-gray-500">Flyer, Broschüren & Poster</p>
            </div>
             <div className="p-6 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all flex flex-col justify-center items-center text-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-brand-accent">
                    <Monitor size={28} />
                </div>
                <h3 className="font-bold">Web Design</h3>
                <p className="text-xs text-gray-500">Responsive & Modern</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;