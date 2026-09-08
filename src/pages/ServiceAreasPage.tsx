import React, { useState } from 'react';
import { ENCLAVES } from '../data/mockData';
import { EnclaveArea, PageTab } from '../types';
import { MapPin, Users, Home, Compass, Shield, ArrowRight, Search, CheckCircle2 } from 'lucide-react';

interface ServiceAreasPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ setActiveTab, onOpenBooking }) => {
  const [selectedEnclave, setSelectedEnclave] = useState<EnclaveArea>(ENCLAVES[0]);
  const [searchFilter, setSearchFilter] = useState('');

  const filteredEnclaves = ENCLAVES.filter(
    (enc) =>
      enc.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      enc.postalCode.toLowerCase().includes(searchFilter.toLowerCase()) ||
      enc.region.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
            Strategic Geographic Coverage
          </span>
          <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#0b1c30] mb-4">
            North Shore Enclaves &amp; Estates
          </h1>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            From the steep terrain of British Properties to coastal waterfronts in Caulfeild and Deep Cove, we adapt our crews and protocols to each microclimate.
          </p>
        </div>

        {/* Search / Filter Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-[#434653] absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search enclave or postal code (e.g., V7S, Caulfeild)..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-white border border-[#cbd5e1] text-xs sm:text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#003c90] shadow-2xs"
          />
        </div>

        {/* Enclave Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEnclaves.map((enclave) => {
            const isSelected = selectedEnclave.id === enclave.id;
            return (
              <div
                key={enclave.id}
                onClick={() => setSelectedEnclave(enclave)}
                className={`bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#003c90] shadow-lg ring-2 ring-[#003c90]/20 scale-[1.01]'
                    : 'border-[#dce9ff] shadow-xs hover:shadow-md hover:border-[#bcceff]'
                }`}
              >
                <div>
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={enclave.image}
                      alt={enclave.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                      <div>
                        <span className="text-xs text-white/80 font-bold block">
                          {enclave.region} • {enclave.postalCode}
                        </span>
                        <h3 className="font-['Outfit'] font-bold text-xl text-white">
                          {enclave.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#003c90] font-bold mb-2">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{enclave.highlight}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#434653] leading-relaxed line-clamp-3">
                      {enclave.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-[#eff4ff] flex items-center justify-between text-xs text-[#434653]">
                  <span>Avg Estate: <strong className="text-[#0b1c30]">{enclave.avgSqFt}</strong></span>
                  <span className="text-[#003c90] font-semibold">{enclave.activeResidences} active residences</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Enclave Detailed Focus Card */}
        {selectedEnclave && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bcceff] shadow-xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md h-64 sm:h-72">
                  <img
                    src={selectedEnclave.image}
                    alt={selectedEnclave.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#003c90] text-xs font-bold mb-3 border border-[#d3e4fe]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Enclave Spotlight: {selectedEnclave.region}</span>
                </div>

                <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0b1c30] mb-3">
                  {selectedEnclave.name} ({selectedEnclave.postalCode})
                </h2>

                <p className="text-sm sm:text-base text-[#434653] mb-6 leading-relaxed">
                  {selectedEnclave.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#dce9ff]">
                    <span className="text-xs text-[#434653] block">Dispatch Crew</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0b1c30] block mt-0.5">
                      {selectedEnclave.crewDispatch}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#dce9ff]">
                    <span className="text-xs text-[#434653] block">Average Footprint</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0b1c30] block mt-0.5">
                      {selectedEnclave.avgSqFt}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#dce9ff] col-span-2 sm:col-span-1">
                    <span className="text-xs text-[#434653] block">Client Trust</span>
                    <span className="text-xs sm:text-sm font-bold text-[#003c90] block mt-0.5">
                      {selectedEnclave.activeResidences}+ Homes Cared
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveTab('pricing-and-quote')}
                    className="px-6 py-3 bg-[#003c90] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#0f52ba] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Configure Care for {selectedEnclave.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-3 bg-white text-[#003c90] border border-[#bcceff] text-sm font-semibold rounded-lg hover:bg-[#eff4ff] cursor-pointer"
                  >
                    Schedule Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
