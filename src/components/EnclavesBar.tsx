import React from 'react';
import { Compass } from 'lucide-react';

interface EnclavesBarProps {
  onSelectEnclave?: (enclaveName: string) => void;
}

export const EnclavesBar: React.FC<EnclavesBarProps> = ({ onSelectEnclave }) => {
  const enclaves = [
    { name: 'Deep Cove', isPrimary: false },
    { name: 'Lonsdale Waterfront', isPrimary: false },
    { name: 'Edgemont Village', isPrimary: false },
    { name: 'British Properties', isPrimary: true },
    { name: 'West Vancouver', isPrimary: true },
    { name: 'Caulfeild', isPrimary: false },
    { name: 'Dundarave', isPrimary: false },
  ];

  return (
    <section className="w-full bg-[#e5eeff] py-4 border-y border-[#d3e4fe]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#0b1c30] text-sm font-semibold">
            <Compass className="w-4 h-4 text-[#003c90] flex-shrink-0" />
            <span className="whitespace-nowrap">Proudly Serving North Shore's Most Discerning Enclaves:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
            {enclaves.map((item) => (
              <button
                key={item.name}
                onClick={() => onSelectEnclave?.(item.name)}
                className={`px-3 py-1 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                  item.isPrimary
                    ? 'bg-white text-[#003c90] font-bold border border-[#bcceff] hover:bg-[#eff4ff]'
                    : 'bg-white text-[#0b1c30] hover:bg-[#eff4ff] border border-transparent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
