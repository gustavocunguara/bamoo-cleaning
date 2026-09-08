import React, { useState } from 'react';
import { SERVICE_TIERS } from '../data/mockData';
import { ServiceTier } from '../types';
import { Check, Sparkles, ArrowRight, ShieldCheck, Eye } from 'lucide-react';

interface ServiceTiersSectionProps {
  onSelectTier: (tierId: string) => void;
  onOpenDetailsModal?: (tier: ServiceTier) => void;
}

export const ServiceTiersSection: React.FC<ServiceTiersSectionProps> = ({
  onSelectTier,
  onOpenDetailsModal
}) => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <section id="services-overview" className="w-full py-16 sm:py-24 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest block mb-2 font-bold">
            Meticulous Architectural Homecare
          </span>
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#0b1c30] mb-3">
            Bespoke Service Tiers Designed for North Shore Estates
          </h2>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            Engineered for residences featuring fine natural stone, architectural glazing, custom millwork, and luxury European culinary appliances.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {SERVICE_TIERS.map((tier) => {
            const isPopular = tier.isPopular;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative bg-white ${
                  isPopular
                    ? 'border-2 border-[#003c90] shadow-xl lg:-mt-4 lg:mb-0 z-20 scale-[1.02]'
                    : 'border border-[#dce9ff] shadow-sm hover:shadow-md hover:border-[#bcceff]'
                }`}
              >
                {/* Popular Brand Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#003c90] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular • Effortless Living</span>
                  </div>
                )}

                <div>
                  {/* Card Header & Cadence Badge */}
                  <div className="mb-4 mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3 ${
                        isPopular
                          ? 'bg-[#d9e2ff] text-[#001945]'
                          : 'bg-[#eff4ff] text-[#3a5e99]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] leading-snug">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#434653] leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  {/* Core Commitment (For recurring tier) */}
                  {tier.coreCommitment && (
                    <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] mb-5">
                      <span className="text-xs text-[#003c90] font-bold block mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Our Core Commitment
                      </span>
                      <span className="text-xs text-[#434653] leading-normal block">
                        {tier.coreCommitment}
                      </span>
                    </div>
                  )}

                  {/* Feature Checkpoints */}
                  <div className="space-y-3 mb-6">
                    {tier.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-[#003c90] text-white'
                              : 'bg-[#eff4ff] text-[#003c90]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span
                          className={`text-xs sm:text-[13px] leading-snug ${
                            isPopular ? 'text-[#0b1c30] font-medium' : 'text-[#434653]'
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Thumbnail Image Preview */}
                  <div className="relative rounded-lg overflow-hidden h-36 mb-6 group">
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[11px] text-white font-medium">
                        Ideal for: {tier.suitableFor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & Action */}
                <div className="pt-2">
                  <div className="flex items-baseline justify-between mb-3 text-xs">
                    <span className="text-[#434653]">Rate Guide</span>
                    <span className="font-bold text-[#003c90]">{tier.basePriceText}</span>
                  </div>

                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#003c90] text-white shadow-md hover:bg-[#0f52ba]'
                        : 'bg-[#eff4ff] text-[#003c90] hover:bg-[#e5eeff] border border-[#d3e4fe]'
                    }`}
                  >
                    <span>
                      {tier.id === 'deep-refresh'
                        ? 'Book Your Deep Refresh'
                        : tier.id === 'recurring-maintenance'
                        ? 'Customize Your Recurring Schedule'
                        : 'Get A Move-In / Out Quote'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
