import React, { useState } from 'react';
import { SERVICE_TIERS } from '../data/mockData';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Droplet, 
  Zap,
  Info
} from 'lucide-react';
import { PageTab } from '../types';

interface ServicesPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setActiveTab, onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('recurring-maintenance');

  const surfaceProtocols = [
    {
      surface: 'Honed Calacatta & Carrara Marble',
      risk: 'Acid etching, dulling from bleach/vinegar',
      bamooMethod: 'Strictly pH 7.2 botanical chelating cleanser; plush 500GSM lint-free microfiber',
      status: 'Preserved & Protected',
    },
    {
      surface: 'Sub-Zero, Miele & Viking Appliances',
      risk: 'Micro-scratches on brushed stainless & sensor panels',
      bamooMethod: 'Deionized optical steam hand-wiping with food-safe plant glycerine sanitizers',
      status: 'Showroom Finish',
    },
    {
      surface: 'Wire-Brushed White Oak Flooring',
      risk: 'Moisture warping, wax buildup, abrasive scratches',
      bamooMethod: 'Damp-controlled microfiber mop with natural plant surfactant & HEPA soft-bristle head',
      status: 'Grain Protected',
    },
    {
      surface: 'Matte Black Architectural Fixtures',
      risk: 'Pitting, mineral water spots, chemical discolouration',
      bamooMethod: 'Mild surfactant chelating agent with gentle microfiber buffing; zero abrasive sponges',
      status: 'Pristine Matte',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
            Meticulous Architectural Homecare
          </span>
          <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#0b1c30] mb-4">
            Curated Services for North Shore Residences
          </h1>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            Every protocol is engineered for luxury architecture, fine natural finishes, and seamless family living across West and North Vancouver.
          </p>
        </div>

        {/* Detailed Service Tiers Breakdown */}
        <div className="space-y-12 mb-16">
          {SERVICE_TIERS.map((tier, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={tier.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dce9ff] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-80 group">
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                      <div>
                        <span className="text-xs text-[#bcceff] font-bold uppercase tracking-wider block">
                          Architectural Standard
                        </span>
                        <span className="text-white font-['Outfit'] font-bold text-lg">
                          {tier.suitableFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details & Features */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#003c90] text-xs font-bold mb-3 border border-[#d3e4fe]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.badge}</span>
                  </div>

                  <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0b1c30] mb-3">
                    {tier.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#434653] mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {tier.coreCommitment && (
                    <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] mb-6 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#003c90] flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-[#434653]">
                        <strong className="text-[#003c90] block mb-0.5">Bonded Crew Familiarity:</strong>
                        {tier.coreCommitment}
                      </div>
                    </div>
                  )}

                  {/* Checklist of Protocols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0b1c30]">
                        <CheckCircle2 className="w-4 h-4 text-[#003c90] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setActiveTab('pricing-and-quote')}
                      className="px-6 py-3 bg-[#003c90] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#0f52ba] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Configure This Tier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-[#003c90]">
                      {tier.basePriceText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Surface Compatibility Matrix Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dce9ff] shadow-md mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-1">
              Material Protection Matrix
            </span>
            <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0b1c30]">
              How Bamoo Safeguards High-Value Finishes
            </h3>
            <p className="text-sm text-[#434653] mt-2">
              We never use generic commercial detergents. Every surface is treated according to manufacturer specifications.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#eff4ff] bg-[#f8f9ff] text-[#003c90]">
                  <th className="py-3 px-4 font-bold">Surface Material</th>
                  <th className="py-3 px-4 font-bold">Standard Cleaning Risk</th>
                  <th className="py-3 px-4 font-bold">Bamoo Scientific Protocol</th>
                  <th className="py-3 px-4 font-bold">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eff4ff]">
                {surfaceProtocols.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f8f9ff]/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0b1c30]">{row.surface}</td>
                    <td className="py-3.5 px-4 text-[#ba1a1a] font-medium">{row.risk}</td>
                    <td className="py-3.5 px-4 text-[#434653]">{row.bamooMethod}</td>
                    <td className="py-3.5 px-4 font-bold text-[#003c90]">
                      <span className="inline-flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#003c90] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl mb-2">
              Ready to schedule an estate assessment?
            </h3>
            <p className="text-sm text-white/80">
              Our Estate Directors provide on-site surface inspection and bespoke crew assignment within 24 hours.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 bg-white text-[#003c90] font-bold text-sm sm:text-base rounded-xl shadow-md hover:bg-[#eff4ff] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Instant Estimate &amp; Reserve Date
          </button>
        </div>

      </div>
    </div>
  );
};
