import React, { useState } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Users, 
  Leaf, 
  ArrowRight, 
  Phone, 
  Star, 
  Sliders, 
  Lock, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingWithDetails?: (details: { sqft: string; cadence: string; postal: string; estPrice: number }) => void;
  onCallDesk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingWithDetails,
  onCallDesk
}) => {
  // Calculator state
  const [sqftPrice, setSqftPrice] = useState<number>(295);
  const [sqftLabel, setSqftLabel] = useState<string>('2,500 - 4,000 sq ft (3-4 Beds)');
  const [cadenceMultiplier, setCadenceMultiplier] = useState<number>(0.80);
  const [cadenceName, setCadenceName] = useState<string>('Bi-Weekly');
  const [postalSector, setPostalSector] = useState<string>('V7T / V7S');

  // Calculation
  const estimatedVisitPrice = Math.round(sqftPrice * cadenceMultiplier);

  const handleCadenceSelect = (mult: number, name: string) => {
    setCadenceMultiplier(mult);
    setCadenceName(name);
  };

  const handleReserveClick = () => {
    if (onOpenBookingWithDetails) {
      onOpenBookingWithDetails({
        sqft: sqftLabel,
        cadence: cadenceName,
        postal: postalSector,
        estPrice: estimatedVisitPrice
      });
    } else {
      const el = document.getElementById('custom-builder');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-6 sm:pt-10 pb-16 lg:pb-24">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#0f52ba]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#005f81]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Credential Badges (Hero Header) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#244b84] text-xs font-semibold shadow-xs border border-[#d3e4fe]">
            <ShieldCheck className="w-4 h-4 text-[#003c90]" />
            WorkSafeBC Covered
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#244b84] text-xs font-semibold shadow-xs border border-[#d3e4fe]">
            <Shield className="w-4 h-4 text-[#003c90]" />
            Licensed &amp; Insured ($5M CGL)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#244b84] text-xs font-semibold shadow-xs border border-[#d3e4fe]">
            <Users className="w-4 h-4 text-[#003c90]" />
            100% Background-Checked Staff
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#244b84] text-xs font-semibold shadow-xs border border-[#d3e4fe]">
            <Leaf className="w-4 h-4 text-[#003c90]" />
            Eco-Certified &amp; Non-Toxic
          </span>
        </div>

        {/* Hero Grid: Copy (7 cols) + Quick Quote Calculator Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Hero Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#003c90] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#003c90] animate-ping" />
              North &amp; West Vancouver Estate Care
            </div>

            <h1 className="font-['Outfit'] font-bold text-3xl sm:text-4xl lg:text-[52px] text-[#0b1c30] leading-[1.12] tracking-tight mb-5">
              North Shore's Premier Residential Care &amp; Architectural Cleaning
            </h1>

            <p className="text-base sm:text-lg text-[#434653] max-w-2xl mb-8 leading-relaxed">
              We don’t just clean homes—we protect high-value architectural assets and return precious free time to families across West Vancouver, the British Properties, and North Vancouver.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => {
                  const el = document.getElementById('quick-calculator');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#003c90] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-[#0f52ba] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Calculate Instant Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCallDesk}
                className="px-6 py-3.5 bg-white text-[#003c90] text-sm sm:text-base font-semibold rounded-lg shadow-xs hover:bg-[#eff4ff] transition-all border border-[#bcceff] flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>(604) 988-BAMOO</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-[#dce9ff]/60">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#e5eeff] text-[#003c90] text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  WV
                </div>
                <div className="w-10 h-10 rounded-full bg-[#d3e4fe] text-[#003c90] text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  BP
                </div>
                <div className="w-10 h-10 rounded-full bg-[#eff4ff] text-[#003c90] text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  EV
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#003c90]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#003c90] text-[#003c90]" />
                  ))}
                  <span className="text-xs sm:text-sm font-bold text-[#0b1c30] ml-1">4.9 / 5.0</span>
                </div>
                <span className="text-xs text-[#434653]">
                  Trusted across 280+ luxury residences in British Properties &amp; West Van
                </span>
              </div>
            </div>

            {/* Feature Highlights Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-[#e2e8f0] shadow-2xs">
                <span className="text-xs text-[#434653] block">Marble &amp; Stone</span>
                <span className="text-xs font-bold text-[#0b1c30]">pH-Neutral Chelation</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#e2e8f0] shadow-2xs">
                <span className="text-xs text-[#434653] block">Vetted Security</span>
                <span className="text-xs font-bold text-[#0b1c30]">RCMP Bonded Duos</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#e2e8f0] shadow-2xs col-span-2 sm:col-span-1">
                <span className="text-xs text-[#434653] block">Guarantee</span>
                <span className="text-xs font-bold text-[#0b1c30]">48-Hr Reclean Seal</span>
              </div>
            </div>
          </div>

          {/* Floating Interactive Smart Quote Card */}
          <div
            id="quick-calculator"
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#dce9ff] relative"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-[11px] text-[#003c90] uppercase tracking-wider font-bold block">
                  Immediate Price Guide
                </span>
                <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#0b1c30]">
                  Estimate Your Home
                </h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#003c90]">
                <Sliders className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Residence Size & Layout */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#0b1c30] mb-1.5">
                  Residence Size &amp; Layout
                </label>
                <select
                  value={sqftPrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSqftPrice(val);
                    const selectedText = e.target.options[e.target.selectedIndex].text;
                    setSqftLabel(selectedText);
                  }}
                  className="w-full h-11 px-3.5 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#003c90] focus:border-transparent font-medium cursor-pointer"
                >
                  <option value={220}>Under 2,500 sq ft (2-3 Beds)</option>
                  <option value={295}>2,500 - 4,000 sq ft (3-4 Beds)</option>
                  <option value={390}>4,000 - 6,000 sq ft (Estate)</option>
                  <option value={540}>6,000+ sq ft (Architectural Compound)</option>
                </select>
              </div>

              {/* Service Cadence */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#0b1c30] mb-1.5">
                  Service Cadence
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCadenceSelect(0.80, 'Bi-Weekly')}
                    className={`py-2 px-1 sm:px-2 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${
                      cadenceMultiplier === 0.80
                        ? 'bg-[#003c90] text-white shadow-sm'
                        : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff]'
                    }`}
                  >
                    Bi-Weekly
                    <span className="block text-[10px] opacity-90">Save 20%</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCadenceSelect(0.75, 'Weekly')}
                    className={`py-2 px-1 sm:px-2 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${
                      cadenceMultiplier === 0.75
                        ? 'bg-[#003c90] text-white shadow-sm'
                        : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff]'
                    }`}
                  >
                    Weekly
                    <span className="block text-[10px] opacity-90">Save 25%</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCadenceSelect(1.0, 'Deep Refresh')}
                    className={`py-2 px-1 sm:px-2 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${
                      cadenceMultiplier === 1.0
                        ? 'bg-[#003c90] text-white shadow-sm'
                        : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff]'
                    }`}
                  >
                    Deep Refresh
                    <span className="block text-[10px] opacity-90">One-Time</span>
                  </button>
                </div>
              </div>

              {/* North Shore Postal Sector */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#0b1c30] mb-1.5">
                  North Shore Postal Sector
                </label>
                <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-semibold">
                  {[
                    { code: 'V7T / V7S', label: 'V7T / V7S' },
                    { code: 'V7V / V7W', label: 'V7V / V7W' },
                    { code: 'V7R / V7N', label: 'V7R / V7N' },
                    { code: 'V7G / V7P', label: 'V7G / V7P' },
                  ].map((p) => {
                    const isSelected = postalSector === p.code;
                    return (
                      <button
                        key={p.code}
                        type="button"
                        onClick={() => setPostalSector(p.code)}
                        className={`py-2 px-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#0f52ba] text-white shadow-xs'
                            : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#e5eeff]'
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Realtime Output Box */}
              <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#dce9ff] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#434653] font-semibold block uppercase">
                    Estimated Care Investment
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#003c90]">
                      ${estimatedVisitPrice}
                    </span>
                    <span className="text-xs sm:text-sm text-[#434653]">
                      {cadenceMultiplier === 1.0 ? '/ session' : '/ visit'}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#003c90]">
                    <Lock className="w-3.5 h-3.5" /> Fully Bonded
                  </span>
                  <span className="block text-[11px] text-[#434653]">2-3 Person Pro Crew</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleReserveClick}
                className="w-full h-12 bg-[#003c90] text-white text-sm sm:text-base font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#0f52ba] transition-all shadow-md cursor-pointer"
              >
                <span>Lock In Rate &amp; Reserve Date</span>
                <Calendar className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-4 pt-2 flex items-center justify-center gap-2 text-[#434653] text-[11px]">
              <span className="flex items-center gap-1 font-medium">
                <Shield className="w-3 h-3 text-[#003c90]" />
                NDA Confidentiality Guaranteed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-[#003c90]" />
                Flexible Rescheduling
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
