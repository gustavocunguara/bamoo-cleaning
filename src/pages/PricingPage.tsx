import React from 'react';
import { PlanBuilderSection } from '../components/PlanBuilderSection';
import { BookingSubmission, PageTab } from '../types';
import { Check, ShieldCheck, HelpCircle, Phone } from 'lucide-react';

interface PricingPageProps {
  setActiveTab: (tab: PageTab) => void;
  onBookingSuccess: (booking: BookingSubmission) => void;
  onCallDesk: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  setActiveTab,
  onBookingSuccess,
  onCallDesk
}) => {
  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
            Transparent North Shore Pricing
          </span>
          <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#0b1c30] mb-4">
            Estate Care Pricing &amp; Instant Estimate
          </h1>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            No guessing or surprise surcharges. All rates include hospital-grade eco-safe supplies, commercial HEPA vacuuming, and fully bonded 2-person crews.
          </p>
        </div>

        {/* Plan Builder */}
        <div className="mb-16">
          <PlanBuilderSection onBookingSuccess={onBookingSuccess} />
        </div>

        {/* Cadence Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dce9ff] shadow-md mb-12">
          <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] mb-6 text-center">
            Cadence Value Comparison
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Weekly */}
            <div className="p-6 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                  Peak Serenity
                </span>
                <h4 className="font-['Outfit'] font-bold text-xl text-[#0b1c30] mb-2">
                  Weekly Care
                </h4>
                <div className="text-2xl font-bold text-[#003c90] mb-3">Save 25%</div>
                <p className="text-xs sm:text-sm text-[#434653] mb-4">
                  Best for active families, large executive estates, and homes with pets and regular entertaining.
                </p>
                <ul className="space-y-2 text-xs text-[#0b1c30]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Permanent priority day &amp; time lock</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Weekly linen laundering &amp; bed reset</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Continuous dust &amp; pollen abatement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bi-Weekly (Most Popular) */}
            <div className="p-6 rounded-2xl bg-[#eff4ff] border-2 border-[#003c90] shadow-md flex flex-col justify-between relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#003c90] text-white text-[11px] font-bold uppercase tracking-wider">
                Most Chosen
              </span>
              <div>
                <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                  Balanced Living
                </span>
                <h4 className="font-['Outfit'] font-bold text-xl text-[#0b1c30] mb-2">
                  Bi-Weekly Care
                </h4>
                <div className="text-2xl font-bold text-[#003c90] mb-3">Save 20%</div>
                <p className="text-xs sm:text-sm text-[#434653] mb-4">
                  The quintessential cadence for North Shore residences. Perfect equilibrium of cleanliness and minimal intrusion.
                </p>
                <ul className="space-y-2 text-xs text-[#0b1c30]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Identical bonded duo for every visit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Mudroom &amp; entry deep reset included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>High-touch sanitization &amp; glass wipe</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly */}
            <div className="p-6 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#434653] uppercase tracking-wider block mb-1">
                  Occasional Reset
                </span>
                <h4 className="font-['Outfit'] font-bold text-xl text-[#0b1c30] mb-2">
                  Monthly Care
                </h4>
                <div className="text-2xl font-bold text-[#0b1c30] mb-3">Standard Rate</div>
                <p className="text-xs sm:text-sm text-[#434653] mb-4">
                  Ideal for secondary residences, pied-à-terres, or low-occupancy seasonal compounds.
                </p>
                <ul className="space-y-2 text-xs text-[#0b1c30]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Full comprehensive estate detail</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Baseboard &amp; millwork wiped</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#003c90]" />
                    <span>Appliances exterior detailed</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Direct Contact Callout */}
        <div className="p-6 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#003c90] flex-shrink-0" />
            <div>
              <span className="font-bold text-[#0b1c30] block text-sm">
                Have a unique estate layout or grounds specification?
              </span>
              <span className="text-xs text-[#434653]">
                Our Estate Director is happy to conduct a confidential walkthrough in person.
              </span>
            </div>
          </div>
          <button
            onClick={onCallDesk}
            className="px-5 py-2.5 bg-[#003c90] text-white rounded-xl text-xs font-bold hover:bg-[#0f52ba] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(604) 988-BAMOO</span>
          </button>
        </div>

      </div>
    </div>
  );
};
