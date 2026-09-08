import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Award, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews-overview" className="w-full py-16 sm:py-24 bg-[#eff4ff] border-t border-[#dce9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Satisfaction Seal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
              Client Endorsements
            </span>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#0b1c30]">
              Trusted in North Shore's Most Discerning Homes
            </h2>
          </div>

          {/* 100% Satisfaction & 48-Hour Reclean Guarantee Seal */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-md border border-[#d3e4fe] flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0f52ba] text-white flex items-center justify-center flex-shrink-0 shadow-inner">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="font-['Outfit'] font-bold text-lg text-[#0b1c30] block leading-tight">
                100% Satisfaction Seal
              </span>
              <span className="text-xs sm:text-sm text-[#434653]">
                48-Hour Unconditional Complimentary Reclean Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-[#dce9ff] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-[#003c90] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#003c90] text-[#003c90]" />
                  ))}
                  <span className="text-xs text-[#003c90] font-bold ml-1">Verified Client</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#0b1c30] italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Enclave */}
              <div className="pt-4 border-t border-[#eff4ff]">
                <span className="font-['Outfit'] font-bold text-base text-[#0b1c30] block">
                  {item.client}
                </span>
                <span className="text-xs text-[#434653] block">
                  {item.location}
                </span>
                <span className="text-[11px] text-[#003c90] font-medium block mt-0.5">
                  {item.residenceType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
