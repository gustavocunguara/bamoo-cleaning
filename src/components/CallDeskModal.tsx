import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, X, Send } from 'lucide-react';

interface CallDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallDeskModal: React.FC<CallDeskModalProps> = ({ isOpen, onClose }) => {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleCallbackRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#bcceff] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#003c90] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/80 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-12 h-12 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-2">
            <Phone className="w-6 h-6 text-[#94d7ff]" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#bcceff] font-bold block mb-1">
            North Shore Private Line
          </span>
          <h3 className="font-['Outfit'] font-bold text-2xl">
            Estate Concierge Desk
          </h3>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Direct Phone Action */}
          <div className="text-center p-4 rounded-xl bg-[#f8f9ff] border border-[#dce9ff]">
            <span className="text-xs text-[#434653] block mb-1">Direct Estate Line (Toll-Free)</span>
            <a
              href="tel:6049882262"
              className="font-['Outfit'] font-bold text-2xl text-[#003c90] hover:underline block"
            >
              (604) 988-BAMOO
            </a>
            <span className="text-xs text-[#434653] block mt-1">
              or (604) 988-2262
            </span>
          </div>

          <div className="space-y-2 text-xs text-[#434653]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#003c90]" />
              <span>Monday – Saturday: 7:30 AM – 6:30 PM PST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#003c90]" />
              <span>1305 Marine Drive, West Vancouver, BC</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#003c90]" />
              <span>Direct access to Lead Supervisors &amp; Operations</span>
            </div>
          </div>

          {/* Quick Callback Request */}
          <div className="pt-3 border-t border-[#eff4ff]">
            <span className="text-xs font-bold text-[#0b1c30] block mb-2">
              Or Request an Immediate 15-Minute Callback:
            </span>
            {sent ? (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold text-center">
                ✓ Callback request logged. An Estate Director is calling you shortly.
              </div>
            ) : (
              <form onSubmit={handleCallbackRequest} className="space-y-2">
                <input
                  type="text"
                  required
                  value={callbackName}
                  onChange={(e) => setCallbackName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full h-9 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-xs text-[#0b1c30]"
                />
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Phone number"
                    className="flex-1 h-9 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-xs text-[#0b1c30]"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#003c90] text-white rounded-lg text-xs font-bold hover:bg-[#0f52ba] flex items-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Call Me</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
