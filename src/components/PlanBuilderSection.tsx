import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Castle, 
  Receipt, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Layers
} from 'lucide-react';
import { BookingSubmission } from '../types';

interface PlanBuilderSectionProps {
  onBookingSuccess: (data: BookingSubmission) => void;
  initialSqft?: string;
  initialCadence?: string;
}

interface PropertyOption {
  id: string;
  title: string;
  sqft: string;
  baseRate: number;
  icon: React.ReactNode;
}

interface AddonOption {
  id: string;
  title: string;
  desc: string;
  price: number;
}

export const PlanBuilderSection: React.FC<PlanBuilderSectionProps> = ({
  onBookingSuccess,
  initialSqft,
  initialCadence
}) => {
  // Step 1: Property profile
  const propertyOptions: PropertyOption[] = [
    {
      id: 'townhome',
      title: 'Modern Townhome',
      sqft: '1,800 - 2,600 sq ft',
      baseRate: 260,
      icon: <Building2 className="w-7 h-7 text-[#003c90]" />,
    },
    {
      id: 'estate',
      title: 'Detached Estate',
      sqft: '2,600 - 4,800 sq ft',
      baseRate: 340,
      icon: <Home className="w-7 h-7 text-[#003c90]" />,
    },
    {
      id: 'compound',
      title: 'Architectural Compound',
      sqft: '5,000+ sq ft & Grounds',
      baseRate: 460,
      icon: <Castle className="w-7 h-7 text-[#003c90]" />,
    },
  ];

  const [selectedPropId, setSelectedPropId] = useState<string>('townhome');

  // Step 2: Cadence
  const [cadence, setCadence] = useState<{
    id: string;
    label: string;
    discountLabel: string;
    multiplier: number;
  }>({
    id: 'bi-weekly',
    label: 'Bi-Weekly',
    discountLabel: '-20% (Bi-Weekly)',
    multiplier: 0.80,
  });

  // Step 3: Add-ons
  const addonList: AddonOption[] = [
    {
      id: 'subzero',
      title: 'Sub-Zero / Gaggenau Interior',
      desc: 'Full steam & micro-sanitization',
      price: 45,
    },
    {
      id: 'mudroom',
      title: 'Mudroom & Gear Zone Reset',
      desc: 'North Shore trail grit extraction',
      price: 55,
    },
    {
      id: 'wine',
      title: 'Wine Cellar & Glass Clean',
      desc: 'Lint-free optical crystal polish',
      price: 65,
    },
    {
      id: 'patio',
      title: 'Patio Glazing & Railings',
      desc: 'Ocean mist salt film removal',
      price: 40,
    },
  ];

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Form Inputs
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Calculations
  const currentProperty = propertyOptions.find((p) => p.id === selectedPropId) || propertyOptions[0];
  const baseRate = currentProperty.baseRate;
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonList.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const netInvestment = Math.round(baseRate * cadence.multiplier + addonsTotal);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const submission: BookingSubmission = {
      propertyType: currentProperty.title,
      sqftRange: currentProperty.sqft,
      cadence: cadence.label,
      postalSector: 'North Shore',
      addons: selectedAddons.map((id) => addonList.find((a) => a.id === id)?.title || id),
      estimatedTotal: netInvestment,
      clientName: fullName,
      contact,
      neighborhood,
      preferredDate: preferredDate || 'Earliest Available',
    };

    setTimeout(() => {
      setSubmitting(false);
      onBookingSuccess(submission);
    }, 600);
  };

  return (
    <section id="custom-builder" className="w-full py-16 sm:py-24 bg-[#eff4ff] border-t border-[#dce9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive Form Controls (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-md border border-[#dce9ff]">
            <div className="mb-8">
              <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-1">
                Interactive Configuration
              </span>
              <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-[#0b1c30]">
                Custom Estate Care Plan Builder
              </h2>
              <p className="text-sm sm:text-base text-[#434653] mt-1.5">
                Select your architecture type and curated add-ons to see real-time North Shore pricing.
              </p>
            </div>

            {/* Step 1: Select Property Profile */}
            <div className="mb-8">
              <label className="block text-sm sm:text-base font-bold text-[#0b1c30] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#003c90] text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Property Profile</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {propertyOptions.map((opt) => {
                  const isSelected = selectedPropId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedPropId(opt.id)}
                      className={`p-5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                        isSelected
                          ? 'bg-[#0f52ba] text-white border-[#0f52ba] shadow-md'
                          : 'bg-[#f8f9ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
                      }`}
                    >
                      <div className="mb-3">
                        <div className={isSelected ? 'text-white' : 'text-[#003c90]'}>
                          {opt.icon}
                        </div>
                      </div>
                      <div>
                        <span className="font-['Outfit'] font-bold text-base sm:text-lg block leading-snug">
                          {opt.title}
                        </span>
                        <span className={`text-xs block mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#434653]'}`}>
                          {opt.sqft}
                        </span>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/20 text-xs font-semibold">
                        Base: ${opt.baseRate} / visit
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Cadence */}
            <div className="mb-8">
              <label className="block text-sm sm:text-base font-bold text-[#0b1c30] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#003c90] text-white text-xs flex items-center justify-center font-bold">2</span>
                <span>Regularity &amp; Preferred Cadence</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center text-xs sm:text-sm font-semibold">
                {[
                  { id: 'weekly', label: 'Weekly', discountLabel: '-25% (Weekly)', multiplier: 0.75, tag: 'Save 25%' },
                  { id: 'bi-weekly', label: 'Bi-Weekly', discountLabel: '-20% (Bi-Weekly)', multiplier: 0.80, tag: 'Save 20%' },
                  { id: 'tri-weekly', label: 'Tri-Weekly', discountLabel: '-10% (Tri-Weekly)', multiplier: 0.90, tag: 'Save 10%' },
                  { id: 'monthly', label: 'Monthly', discountLabel: 'Standard Rate', multiplier: 1.0, tag: 'Standard' },
                ].map((item) => {
                  const isSelected = cadence.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCadence(item)}
                      className={`p-3.5 rounded-xl transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#003c90] text-white border-[#003c90] shadow-sm'
                          : 'bg-[#f8f9ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
                      }`}
                    >
                      <span className="block font-bold">{item.label}</span>
                      <span className={`text-[11px] font-bold block mt-1 ${isSelected ? 'text-[#bcceff]' : 'text-[#003c90]'}`}>
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Bespoke Enclave Add-Ons */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-[#0b1c30] mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#003c90] text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Bespoke Enclave Add-Ons (Optional)</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {addonList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isChecked
                          ? 'bg-[#e5eeff] border-[#003c90] shadow-xs'
                          : 'bg-[#f8f9ff] border-[#dce9ff] hover:bg-[#eff4ff]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="w-4 h-4 rounded text-[#003c90] focus:ring-[#003c90] cursor-pointer"
                        />
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-[#0b1c30] block">
                            {addon.title}
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#434653]">
                            {addon.desc}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#003c90] ml-2">
                        +${addon.price}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Realtime Summary & Dispatch (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#dce9ff] relative lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Outfit'] font-bold text-xl text-[#0b1c30]">
                Your Care Summary
              </h3>
              <Receipt className="w-5 h-5 text-[#003c90]" />
            </div>

            {/* Line Items */}
            <div className="space-y-2.5 mb-5 pb-5 border-b border-[#eff4ff] text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#434653]">Base Rate ({currentProperty.title}):</span>
                <span className="text-[#0b1c30] font-semibold">${baseRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#434653]">Cadence Discount:</span>
                <span className="text-[#003c90] font-bold">{cadence.discountLabel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#434653]">Specialized Add-ons:</span>
                <span className="text-[#0b1c30] font-semibold">+${addonsTotal}</span>
              </div>
            </div>

            {/* Net Investment Banner */}
            <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#d3e4fe] mb-6">
              <span className="text-[11px] text-[#434653] font-bold block uppercase tracking-wider">
                Net Investment Per Visit
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#003c90]">
                  ${netInvestment}
                </span>
                <span className="text-xs font-medium text-[#434653]">CAD / service</span>
              </div>
              <span className="text-[11px] text-[#434653] block mt-1">
                Includes all eco-safe supplies &amp; commercial HEPA extraction.
              </span>
            </div>

            {/* Assessment Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Dr. / Mr. / Ms. Smith"
                  className="w-full h-11 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  Direct Phone or Email
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="(604) ... or client@domain.com"
                  className="w-full h-11 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  North Shore Neighborhood
                </label>
                <input
                  type="text"
                  required
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder="e.g., British Properties, Chartwell, Caulfeild"
                  className="w-full h-11 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0b1c30] mb-1">
                  Preferred First Date (Optional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full h-11 px-3 rounded-lg bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-[#003c90] text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-[#0f52ba] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {submitting ? (
                  <span>Dispatching to Estate Desk...</span>
                ) : (
                  <>
                    <span>Book Residence Assessment</span>
                    <ShieldCheck className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-[#434653] text-center mt-3 leading-tight">
              No payment required today. An Estate Director will confirm scheduling within 2 hours.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
