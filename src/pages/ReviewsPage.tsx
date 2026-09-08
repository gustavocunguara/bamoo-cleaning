import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Award, CheckCircle2, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { PageTab } from '../types';

interface ReviewsPageProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenBooking: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ setActiveTab, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewNeighborhood, setNewReviewNeighborhood] = useState('');
  const [submittedReview, setSubmittedReview] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All North Shore Enclaves' },
    { id: 'british-properties', label: 'British Properties' },
    { id: 'edgemont', label: 'Edgemont Village' },
    { id: 'caulfeild', label: 'Caulfeild / West Van' },
  ];

  const filteredReviews = TESTIMONIALS.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'british-properties') return t.location.toLowerCase().includes('british properties');
    if (selectedFilter === 'edgemont') return t.location.toLowerCase().includes('edgemont');
    if (selectedFilter === 'caulfeild') return t.location.toLowerCase().includes('caulfeild');
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setNewReviewAuthor('');
      setNewReviewText('');
      setNewReviewNeighborhood('');
    }, 3000);
  };

  return (
    <div className="w-full py-12 sm:py-16 bg-[#f8f9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
            Verified Resident Feedback
          </span>
          <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl text-[#0b1c30] mb-4">
            Endorsements from North Shore Homeowners
          </h1>
          <p className="text-base sm:text-lg text-[#434653] leading-relaxed">
            Read first-hand accounts from estate owners, busy medical practitioners, and real estate advisors across West Vancouver and North Vancouver.
          </p>
        </div>

        {/* Aggregate Ratings Overview Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dce9ff] shadow-md mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[#eff4ff] pb-6 md:pb-0 md:pr-6">
            <div className="font-['Outfit'] font-bold text-5xl text-[#003c90]">4.95</div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#003c90] my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#003c90] text-[#003c90]" />
              ))}
            </div>
            <span className="text-xs text-[#434653]">
              Based on 280+ verified recurring estate engagements
            </span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-[#434653] border-b md:border-b-0 md:border-r border-[#eff4ff] pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center justify-between">
              <span>Finish Safety (Stone &amp; Wood):</span>
              <strong className="text-[#0b1c30]">100% Zero Damage</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>On-Time Arrival Rate:</span>
              <strong className="text-[#0b1c30]">99.4%</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Identical Crew Retention:</span>
              <strong className="text-[#0b1c30]">98.1%</strong>
            </div>
          </div>

          <div className="text-center md:text-right">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#003c90] text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-[#0f52ba] transition-all cursor-pointer"
            >
              Book Your Initial Visit
            </button>
            <span className="text-[11px] text-[#434653] block mt-2">
              Backed by our 48-Hour Reclean Guarantee
            </span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                selectedFilter === opt.id
                  ? 'bg-[#003c90] text-white border-[#003c90] shadow-xs'
                  : 'bg-white text-[#0b1c30] border-[#dce9ff] hover:bg-[#eff4ff]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#dce9ff] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#003c90]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#003c90] text-[#003c90]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#003c90] font-semibold bg-[#eff4ff] px-2.5 py-1 rounded-full">
                    {rev.verifiedYear}
                  </span>
                </div>

                <p className="text-sm text-[#0b1c30] italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between">
                <div>
                  <span className="font-['Outfit'] font-bold text-base text-[#0b1c30] block">
                    {rev.client}
                  </span>
                  <span className="text-xs text-[#434653]">{rev.location}</span>
                </div>
                <span className="text-xs text-[#434653] text-right font-medium">
                  {rev.residenceType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Verified Feedback Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#dce9ff] shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#eff4ff] text-[#003c90] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-xl text-[#0b1c30]">
                Are you an existing client?
              </h3>
              <p className="text-xs text-[#434653]">
                Share your experience with your dedicated Bamoo cleaning team.
              </p>
            </div>
          </div>

          {submittedReview ? (
            <div className="p-4 bg-emerald-50 text-emerald-900 rounded-xl text-xs font-semibold text-center">
              ✓ Thank you for your review. It will appear once verified by your Estate Director.
            </div>
          ) : (
            <form onSubmit={handleSubmitReview} className="space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  placeholder="Your Name (e.g. S. Henderson)"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
                <input
                  type="text"
                  required
                  value={newReviewNeighborhood}
                  onChange={(e) => setNewReviewNeighborhood(e.target.value)}
                  placeholder="Neighborhood (e.g. Caulfeild, West Van)"
                  className="w-full h-11 px-3.5 rounded-xl bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                />
              </div>
              <textarea
                rows={3}
                required
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                placeholder="How has your bonded crew cared for your residence and surfaces?"
                className="w-full p-3 rounded-xl bg-[#f8f9ff] border border-[#cbd5e1] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#003c90]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#003c90] text-white font-bold rounded-xl hover:bg-[#0f52ba] transition-all cursor-pointer"
              >
                Submit Client Review
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
