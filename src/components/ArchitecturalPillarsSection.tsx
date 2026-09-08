import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  CloudRain, 
  Users2, 
  CheckCircle2, 
  FileCheck2 
} from 'lucide-react';

interface ArchitecturalPillarsProps {
  onViewSecurityDoc?: () => void;
}

export const ArchitecturalPillarsSection: React.FC<ArchitecturalPillarsProps> = ({
  onViewSecurityDoc
}) => {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#003c90]" />,
      title: 'Natural Stone & Hardwood Stewardship',
      desc: 'Exclusively pH-neutral, chelating botanical detergents. Zero ammonia, zero bleach, zero scratches on honed quartz or walnut millwork.',
      badge: 'Finish Safe',
    },
    {
      icon: <Lock className="w-6 h-6 text-[#003c90]" />,
      title: 'Strict Security & Discretion',
      desc: 'Every technician is RCMP background-vetted, bonded, and under signed NDA. Key code vault access and alarm protocol compliance guaranteed.',
      badge: 'Bonded & NDA',
    },
    {
      icon: <CloudRain className="w-6 h-6 text-[#003c90]" />,
      title: 'North Shore Weather Defense',
      desc: 'Rain forest climate countermeasures: mudroom deep salt extraction, wood-burning fireplace soot eradication, and patio ocean-fog salt treatment.',
      badge: 'Coastal Specialized',
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#003c90]" />,
      title: 'Consistent Dedicated Crews',
      desc: 'No rotating random contractors. You receive the exact same certified duo who memorize your residence’s nuances and personal preferences.',
      badge: 'Same Crew Every Time',
    },
  ];

  return (
    <section id="why-bamoo-overview" className="w-full py-16 sm:py-24 bg-white border-t border-[#dce9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Policy Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
              The North Shore Standard
            </span>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#0b1c30] leading-tight mb-3">
              Trained for Million-Dollar Architectural Assets
            </h2>
            <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
              Traditional housekeeping companies rely on aggressive chemical compounds that can etch Calacatta marble, pit matte black fixtures, and dull hand-scraped white oak. We operate under clinical-grade care parameters designed specifically for modern architecture.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] shadow-xs flex items-center gap-4 w-full sm:w-auto">
              <div className="w-14 h-14 rounded-full bg-[#003c90] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="font-['Outfit'] font-bold text-lg sm:text-xl text-[#0b1c30] block">
                  $5,000,000 Commercial Policy
                </span>
                <span className="text-xs sm:text-sm text-[#434653] block mt-0.5 leading-snug">
                  Comprehensive coverage for high-value artwork, antiquities, and custom imported finishes.
                </span>
                {onViewSecurityDoc && (
                  <button
                    onClick={onViewSecurityDoc}
                    className="text-xs text-[#003c90] font-bold hover:underline mt-2 flex items-center gap-1 cursor-pointer"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>View Bond &amp; Underwriting Brief</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e5eeff] text-[#003c90] flex items-center justify-center mb-4 border border-[#d3e4fe]">
                  {pillar.icon}
                </div>
                <h3 className="font-['Outfit'] font-bold text-lg text-[#0b1c30] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#434653] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#dce9ff] flex items-center gap-1.5 text-xs font-bold text-[#003c90]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{pillar.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
