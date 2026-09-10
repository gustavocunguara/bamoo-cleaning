import React from 'react';
import { PageTab } from '../types';
import { LOGO_URL } from '../data/mockData';
import { Shield, ShieldCheck, Leaf, CheckCircle, Phone, Clock, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
  onCallDesk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking, onCallDesk }) => {
  const navigate = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="w-full bg-[#eff4ff] text-[#0b1c30] border-t border-[#dce9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Bamoo Cleaning"
                className="h-8 w-auto object-contain"
                src={LOGO_URL}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-['Outfit'] font-bold text-xl text-[#0b1c30]">Bamoo Cleaning</span>
            </div>
            <p className="text-sm text-[#434653] leading-relaxed max-w-md">
              Dedicated to architectural residences and luxury estates across North and West Vancouver. Delivering hospital-grade hygiene, bonded security, and bespoke hospitality since 2016.
            </p>

            {/* Credential Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e5eeff] text-[#244b84] text-xs font-semibold border border-[#d3e4fe]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#003c90]" />
                WorkSafeBC Covered
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e5eeff] text-[#244b84] text-xs font-semibold border border-[#d3e4fe]">
                <Shield className="w-3.5 h-3.5 text-[#003c90]" />
                Fully Licensed &amp; Insured ($5M)
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e5eeff] text-[#244b84] text-xs font-semibold border border-[#d3e4fe]">
                <Leaf className="w-3.5 h-3.5 text-[#003c90]" />
                Eco-Certified &amp; Non-Toxic
              </span>
            </div>
          </div>

          {/* North Shore Coverage */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-base text-[#0b1c30] mb-3">North Shore Coverage</h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#434653]">
              {[
                'West Vancouver Estates',
                'British Properties',
                'Edgemont Village',
                'Caulfeild & Cypress',
                'Lonsdale Waterfront',
                'Deep Cove & Seymour'
              ].map((loc) => (
                <li key={loc} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#003c90] flex-shrink-0" />
                  <button
                    onClick={() => navigate('service-areas')}
                    className="hover:text-[#003c90] transition-colors text-left"
                  >
                    {loc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Curated Services */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-base text-[#0b1c30] mb-3">Curated Services</h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#434653]">
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="hover:text-[#003c90] transition-colors text-left"
                >
                  Recurring Home Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="hover:text-[#003c90] transition-colors text-left"
                >
                  Luxury Deep &amp; Seasonal Refresh
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="hover:text-[#003c90] transition-colors text-left"
                >
                  Move-In &amp; Move-Out Detail Clean
                </button>
              </li>
              {/*<li>
                <button
                  onClick={() => navigate('services')}
                  className="hover:text-[#003c90] transition-colors text-left"
                >
                  Sub-Zero &amp; Luxury Appliance Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('why-bamoo')}
                  className="hover:text-[#003c90] transition-colors text-left"
                >
                  Honed Marble &amp; Hardwood Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('pricing-and-quote')}
                  className="hover:text-[#003c90] font-semibold text-[#003c90] transition-colors text-left"
                >
                  Custom Estate Estimate →
                </button>
              </li>*/}
            </ul>
          </div>

          {/* Estate Concierge */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-base text-[#0b1c30] mb-3">Estate Concierge</h4>
            <p className="text-xs sm:text-sm text-[#434653] mb-3 leading-relaxed">
              North Shore Client Service Centre<br />
              1305 Marine Drive, West Vancouver, BC
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <button
                onClick={onCallDesk}
                className="flex items-center gap-2 text-[#003c90] font-bold hover:underline text-left"
              >
                <Phone className="w-4 h-4 text-[#003c90]" />
                <span>(604) 988-BAMOO</span>
              </button>
              <span className="flex items-center gap-2 text-[#434653]">
                <Clock className="w-4 h-4 text-[#3a5e99]" />
                <span>Mon - Sat: 7:30 AM - 6:30 PM</span>
              </span>
              <span className="flex items-center gap-2 text-[#434653]">
                <Award className="w-4 h-4 text-[#3a5e99]" />
                <span>100% Satisfaction Guarantee</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#dce9ff] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#434653]">
          <div>
            © 2026 Bamoo Cleaning Ltd. North Vancouver &amp; West Vancouver Luxury Residential Care.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('why-bamoo')}
              className="hover:text-[#003c90] transition-colors cursor-pointer"
            >
              Client Discretion &amp; Security Protocol
            </button>
            <button
              onClick={onOpenBooking}
              className="font-semibold text-[#003c90] hover:underline cursor-pointer"
            >
              Book Assessment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
