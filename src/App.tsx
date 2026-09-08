import React, { useState } from 'react';
import { PageTab, BookingSubmission } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { WhyBamooPage } from './pages/WhyBamooPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { PricingPage } from './pages/PricingPage';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { CallDeskModal } from './components/CallDeskModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { Phone, Calendar, Sparkles } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);
  const [callDeskOpen, setCallDeskOpen] = useState(false);
  const [clientPortalOpen, setClientPortalOpen] = useState(false);

  const handleBookingSuccess = (booking: BookingSubmission) => {
    setConfirmedBooking(booking);
  };

  const handleOpenBooking = () => {
    setActiveTab('pricing-and-quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onBookingSuccess={handleBookingSuccess}
            onCallDesk={() => setCallDeskOpen(true)}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setActiveTab={setActiveTab}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'service-areas':
        return (
          <ServiceAreasPage
            setActiveTab={setActiveTab}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'why-bamoo':
        return (
          <WhyBamooPage
            setActiveTab={setActiveTab}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage
            setActiveTab={setActiveTab}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'pricing-and-quote':
        return (
          <PricingPage
            setActiveTab={setActiveTab}
            onBookingSuccess={handleBookingSuccess}
            onCallDesk={() => setCallDeskOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onBookingSuccess={handleBookingSuccess}
            onCallDesk={() => setCallDeskOpen(true)}
            onOpenBooking={handleOpenBooking}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30] font-['Plus_Jakarta_Sans'] antialiased selection:bg-[#bcceff] selection:text-[#001945]">
      
      {/* Sticky Header with Trust Badges & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onOpenPortal={() => setClientPortalOpen(true)}
        onCallDesk={() => setCallDeskOpen(true)}
      />

      {/* Main Content Area (offset by fixed header height: 40px top bar + 80px nav = 120px) */}
      <main className="flex-1 pt-[112px] sm:pt-[120px]">
        {renderActiveScreen()}
      </main>

      {/* Comprehensive Architectural Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onCallDesk={() => setCallDeskOpen(true)}
      />

      {/* Modals */}
      <BookingConfirmationModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />

      <CallDeskModal
        isOpen={callDeskOpen}
        onClose={() => setCallDeskOpen(false)}
      />

      <ClientPortalModal
        isOpen={clientPortalOpen}
        onClose={() => setClientPortalOpen(false)}
      />

      {/* Mobile Floating Quick Action Dock */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-[#bcceff] flex items-center gap-2">
        <button
          onClick={() => setCallDeskOpen(true)}
          className="flex-1 py-3 px-3 rounded-xl bg-[#eff4ff] text-[#003c90] font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Call Desk</span>
        </button>

        <button
          onClick={handleOpenBooking}
          className="flex-1 py-3 px-3 rounded-xl bg-[#003c90] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer hover:bg-[#0f52ba]"
        >
          <Calendar className="w-4 h-4" />
          <span>Instant Quote</span>
        </button>
      </div>

    </div>
  );
}

export default App;
