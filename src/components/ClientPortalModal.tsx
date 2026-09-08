import React, { useState } from 'react';
import { User, ShieldCheck, Calendar, Key, CheckCircle, Clock, X, Lock } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'crew' | 'preferences'>('schedule');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#bcceff] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#003c90] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#bcceff] uppercase tracking-wider font-bold block">
                Resident Portal
              </span>
              <h3 className="font-['Outfit'] font-bold text-xl">
                North Shore Estate Account
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Sub-tabs */}
        <div className="flex border-b border-[#eff4ff] bg-[#f8f9ff] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'schedule'
                ? 'border-[#003c90] text-[#003c90] bg-white'
                : 'border-transparent text-[#434653]'
            }`}
          >
            Active Cadence
          </button>
          <button
            onClick={() => setActiveTab('crew')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'crew'
                ? 'border-[#003c90] text-[#003c90] bg-white'
                : 'border-transparent text-[#434653]'
            }`}
          >
            Bonded Crew Duo
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'preferences'
                ? 'border-[#003c90] text-[#003c90] bg-white'
                : 'border-transparent text-[#434653]'
            }`}
          >
            Estate Protocols
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 text-xs sm:text-sm">
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#434653] block">Next Scheduled Arrival</span>
                  <span className="font-['Outfit'] font-bold text-lg text-[#003c90] block">
                    Tuesday, 9:00 AM – 1:00 PM
                  </span>
                  <span className="text-xs text-[#434653]">Bi-Weekly Care Visit</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  Confirmed
                </div>
              </div>

              <div className="border border-[#dce9ff] rounded-xl divide-y divide-[#eff4ff]">
                <div className="p-3.5 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#0b1c30] block">Residence:</span>
                    <span className="text-xs text-[#434653]">British Properties Custom Villa (4,600 sq ft)</span>
                  </div>
                  <span className="text-xs font-bold text-[#003c90]">$272 / visit</span>
                </div>
                <div className="p-3.5 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#0b1c30] block">Digital Key Vault:</span>
                    <span className="text-xs text-[#434653]">Encrypted Vault Slot #419 - Verified</span>
                  </div>
                  <Lock className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crew' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#dce9ff] flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#003c90] text-white flex items-center justify-center font-bold font-['Outfit'] text-base">
                  MD
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#0b1c30]">Team Alpha: Maya &amp; David</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#003c90] font-bold">
                      Assigned 18 Months
                    </span>
                  </div>
                  <span className="text-xs text-[#434653] block mt-0.5">
                    RCMP Vetted • $5M Bond Active • WHMIS 2026 Certified
                  </span>
                  <p className="text-xs text-[#434653] mt-2">
                    Specialists in high-altitude architectural glazing, European millwork, and matte limestone treatments.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>NDA signed and registered on file. Zero contractor rotation guaranteed.</span>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-3">
              <span className="font-bold text-xs text-[#0b1c30] block">
                Active Residence Architectural Protocols:
              </span>
              <div className="space-y-2">
                {[
                  'Master Ensuite Calacatta Marble: pH-neutral botanical chelating cleanser only.',
                  'Sub-Zero Refrigerator & Gaggenau Steam Oven: Scratch-free optical microfiber hand wipe.',
                  'Mudroom & Dog Run: Trail grit and salt extraction with HEPA filter vacuum.',
                  'Alarm System: Armed with 4-digit code on exit; log sent to Estate Director.',
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#f8f9ff] border border-[#dce9ff] flex items-start gap-2 text-xs text-[#434653]">
                    <CheckCircle className="w-4 h-4 text-[#003c90] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#eff4ff] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#003c90] text-white text-xs font-semibold hover:bg-[#0f52ba] cursor-pointer"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
