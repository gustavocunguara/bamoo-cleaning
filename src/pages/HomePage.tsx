import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { EnclavesBar } from '../components/EnclavesBar';
import { ServiceTiersSection } from '../components/ServiceTiersSection';
import { PlanBuilderSection } from '../components/PlanBuilderSection';
import { ArchitecturalPillarsSection } from '../components/ArchitecturalPillarsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqAndConciergeSection } from '../components/FaqAndConciergeSection';
import { BookingSubmission, PageTab } from '../types';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onBookingSuccess: (booking: BookingSubmission) => void;
  onCallDesk: () => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onBookingSuccess,
  onCallDesk,
  onOpenBooking
}) => {
  const handleSelectTier = (tierId: string) => {
    const builder = document.getElementById('custom-builder');
    if (builder) {
      builder.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('pricing-and-quote');
    }
  };

  const handleSelectEnclave = (enclaveName: string) => {
    setActiveTab('service-areas');
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO & SMART QUOTE CALCULATOR */}
      <HeroSection
        onCallDesk={onCallDesk}
        onOpenBookingWithDetails={(details) => {
          const builder = document.getElementById('custom-builder');
          builder?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SECTION 2: STRATEGIC GEOGRAPHIC ENCLAVES BAR */}
      <EnclavesBar onSelectEnclave={handleSelectEnclave} />

      {/* SECTION 3: THE SIGNATURE 3-TIER SERVICES */}
      <ServiceTiersSection onSelectTier={handleSelectTier} />

      {/* SECTION 4: INTERACTIVE ESTATE CARE PLAN BUILDER */}
      <PlanBuilderSection onBookingSuccess={onBookingSuccess} />

      {/* SECTION 5: "THE BAMOO STANDARD" — ASSET PROTECTION */}
      <ArchitecturalPillarsSection
        onViewSecurityDoc={() => setActiveTab('why-bamoo')}
      />

      {/* SECTION 6: CLIENT ENDORSEMENTS & GUARANTEE SEAL */}
      <TestimonialsSection />

      {/* SECTION 7: FAQ & BAMOO AI CONCIERGE */}
      <FaqAndConciergeSection
        onCallDesk={onCallDesk}
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
};
