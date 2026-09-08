import React, { useState } from 'react';
import { PageTab } from '../types';
import { LOGO_URL } from '../data/mockData';
import { Phone, MapPin, ShieldCheck, User, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
  onOpenPortal: () => void;
  onCallDesk: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenPortal,
  onCallDesk
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: PageTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Services', tab: 'services' },
    { label: 'Service Areas', tab: 'service-areas' },
    { label: 'Why Bamoo', tab: 'why-bamoo' },
    { label: 'Reviews', tab: 'reviews' },
    { label: 'Pricing & Quote', tab: 'pricing-and-quote' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="site-header" className="fixed top-0 w-full z-50 bg-[#f8f9ff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(10,56,113,0.06)] border-b border-[#eff4ff]">
      {/* Top Utility Bar */}
      <div className="bg-[#eff4ff] border-b border-[#dce9ff]/60">
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#434653]">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:6049882262"
              className="flex items-center gap-1.5 text-[#0b1c30] hover:text-[#003c90] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#003c90]" />
              <span>Direct Line: (604) 988-BAMOO</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#434653]">
              <MapPin className="w-3.5 h-3.5 text-[#3a5e99]" />
              <span>Serving West Van &amp; North Shore</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#244b84] text-[11px] font-semibold border border-[#d3e4fe]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#003c90]" />
              <span>WorkSafeBC • Fully Insured • Bonded</span>
            </div>
            <button
              onClick={onOpenPortal}
              className="text-[11px] text-[#003c90] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-18 sm:h-20 max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            alt="Bamoo Cleaning Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src={LOGO_URL}
            onError={(e) => {
              // Fallback clean luxury badge if external URL has network issue
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-['Outfit'] font-bold text-lg sm:text-xl tracking-tight text-[#0b1c30] leading-none">
              Bamoo Cleaning
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#434653] tracking-widest uppercase mt-1">
              North Shore's Premier Home Care
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-[14px] font-semibold">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#003c90] font-bold'
                    : 'text-[#434653] hover:text-[#0b1c30]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#003c90] rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <button
            onClick={onCallDesk}
            className="hidden md:flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-[#003c90] hover:text-[#0b1c30] transition-colors px-2 py-1 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#003c90]" />
            <span>Call Estate Desk</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#003c90] text-white text-[13px] sm:text-[14px] font-semibold rounded-lg shadow-sm hover:bg-[#0f52ba] transition-all cursor-pointer hover:shadow"
          >
            <span>Get Instant Quote</span>
          </button>

          {/* User Profile / Portal button */}
          <button
            onClick={onOpenPortal}
            title="Resident / Estate Portal"
            className="w-9 h-9 rounded-full bg-[#003c90] text-white flex items-center justify-center hover:bg-[#0f52ba] transition-colors cursor-pointer shadow-sm"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-lg text-[#0b1c30] hover:bg-[#eff4ff] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#dce9ff] px-6 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left py-2 text-base font-semibold transition-colors ${
                  activeTab === item.tab ? 'text-[#003c90]' : 'text-[#434653]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-[#eff4ff] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onCallDesk();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#eff4ff] text-[#003c90] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Estate Desk: (604) 988-BAMOO</span>
              </button>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#003c90] text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Assessment / Instant Quote</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
