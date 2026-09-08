import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  Award, 
  FileText, 
  Users2, 
  CheckCircle2, 
  HeartHandshake, 
  ArrowRight,
  Droplet
} from 'lucide-react';
import { PageTab } from '../types';

interface WhyBamooPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const WhyBamooPage: React.FC<WhyBamooPageProps> = ({ setActiveTab, onOpenBooking }) => {
  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
            The Bamoo Standard
          </span>
          <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#0b1c30] mb-4">
            Why North Shore Estate Owners Entrust Us
          </h1>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            Most cleaning companies operate like gig delivery apps—revolving personnel, aggressive industrial acids, and zero accountability. We operate as an elite residential facility care partner.
          </p>
        </div>

        {/* 4 Deep Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: $5M Policy & WorkSafeBC */}
          <div className="bg-white rounded-3xl p-8 border border-[#dce9ff] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#003c90] flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                Risk Free Stewardship
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] mb-3">
                $5,000,000 Commercial Policy &amp; WorkSafeBC
              </h3>
              <p className="text-sm text-[#434653] leading-relaxed mb-4">
                Our commercial general liability policy specifically covers high-value private collections, original works of art, imported chandeliers, and custom millwork. You bear zero liability while technicians are on your grounds.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#eff4ff]">
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>WorkSafeBC active certificate in good standing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Full dishonesty bonding for all active employees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Vetted Security & NDAs */}
          <div className="bg-white rounded-3xl p-8 border border-[#dce9ff] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#003c90] flex items-center justify-center mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                Discretion &amp; Security
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] mb-3">
                RCMP Criminal Background Checks &amp; NDAs
              </h3>
              <p className="text-sm text-[#434653] leading-relaxed mb-4">
                We safeguard your family's daily routines, privacy, and architectural privacy. All staff undergo multi-tiered RCMP background checks and execute confidentiality agreements before touching estate soil.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#eff4ff]">
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Dual-authorized key lockboxes &amp; alarm code isolation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Strict zero-photography rule on private residences</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Identical Bonded Crew Duos */}
          <div className="bg-white rounded-3xl p-8 border border-[#dce9ff] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#003c90] flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                Consistent Intimacy
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] mb-3">
                The Exact Same Two Technicians Every Visit
              </h3>
              <p className="text-sm text-[#434653] leading-relaxed mb-4">
                We despise rotating strangers as much as you do. When you start recurring maintenance, you are paired with a bonded 2-person crew who memorizes how you like your linens folded, your shoe racks aligned, and your pet attended to.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#eff4ff]">
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Average crew tenure with Bamoo exceeds 3.5 years</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Direct communication with your lead supervisor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4: 100% Satisfaction & 48h Reclean Guarantee */}
          <div className="bg-white rounded-3xl p-8 border border-[#dce9ff] shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#003c90] flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#003c90] uppercase tracking-wider block mb-1">
                Our Guarantee
              </span>
              <h3 className="font-['Outfit'] font-bold text-2xl text-[#0b1c30] mb-3">
                48-Hour Unconditional Reclean Seal
              </h3>
              <p className="text-sm text-[#434653] leading-relaxed mb-4">
                If any detail falls short of perfection, contact your Estate Director within 48 hours. We dispatch a priority team to reclean the zone complimentary—no debates, no friction.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#eff4ff]">
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>Zero-hassle supervisor reinspection within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0b1c30] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#003c90]" />
                  <span>100% deposit return pass rate for tenancy transitions</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#eff4ff] p-8 sm:p-12 rounded-3xl border border-[#d3e4fe]">
          <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0b1c30] mb-3">
            Experience the Serenity of True Architectural Care
          </h3>
          <p className="text-sm sm:text-base text-[#434653] max-w-xl mx-auto mb-6">
            Join hundreds of families across West Vancouver and British Properties who trust Bamoo with their most precious sanctuary.
          </p>
          <button
            onClick={() => setActiveTab('pricing-and-quote')}
            className="px-8 py-3.5 bg-[#003c90] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:bg-[#0f52ba] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Calculate Instant Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
