import React from 'react';
import { BookingSubmission } from '../types';
import { CheckCircle2, Calendar, ShieldCheck, X, Phone, Download, MapPin } from 'lucide-react';

interface BookingModalProps {
  booking: BookingSubmission | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#bcceff] overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-[#003c90] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/80 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-3">
            <CheckCircle2 className="w-8 h-8 text-[#94d7ff]" />
          </div>

          <span className="text-xs uppercase tracking-widest text-[#bcceff] font-bold block mb-1">
            North Shore Estate Care
          </span>
          <h3 className="font-['Outfit'] font-bold text-2xl">
            Residence Assessment Requested
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Priority Reference: #BC-{Math.floor(100000 + Math.random() * 900000)}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#dce9ff] space-y-2">
            <div className="flex justify-between">
              <span className="text-[#434653]">Client Name:</span>
              <span className="font-bold text-[#0b1c30]">{booking.clientName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#434653]">Neighborhood:</span>
              <span className="font-bold text-[#0b1c30] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#003c90]" />
                {booking.neighborhood}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#434653]">Property Profile:</span>
              <span className="font-bold text-[#0b1c30]">
                {booking.propertyType} ({booking.sqftRange})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#434653]">Service Cadence:</span>
              <span className="font-bold text-[#003c90]">{booking.cadence}</span>
            </div>
            {booking.addons.length > 0 && (
              <div className="flex justify-between">
                <span className="text-[#434653]">Selected Add-Ons:</span>
                <span className="font-medium text-[#0b1c30] text-right">
                  {booking.addons.join(', ')}
                </span>
              </div>
            )}
            <div className="pt-2 border-t border-[#dce9ff] flex justify-between items-baseline">
              <span className="font-bold text-[#0b1c30]">Estimated Investment:</span>
              <span className="font-['Outfit'] font-bold text-xl text-[#003c90]">
                ${booking.estimatedTotal} CAD / visit
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#003c90] flex-shrink-0 mt-0.5" />
            <div className="text-xs text-[#434653]">
              <span className="font-bold text-[#003c90] block mb-0.5">
                Next Steps within 2 Hours:
              </span>
              An Estate Director will contact <strong className="text-[#0b1c30]">{booking.contact}</strong> to verify gate codes, floor surface specifications, and dispatch your dedicated 2-person crew.
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                alert('Assessment receipt downloaded.');
              }}
              className="flex-1 py-2.5 rounded-lg border border-[#cbd5e1] text-[#0b1c30] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#f8f9ff] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Save Record</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg bg-[#003c90] text-white font-semibold text-xs flex items-center justify-center hover:bg-[#0f52ba] cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
