import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, Bot, Send, Phone, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

interface FaqAndConciergeProps {
  onCallDesk: () => void;
  onOpenBooking: () => void;
}

export const FaqAndConciergeSection: React.FC<FaqAndConciergeProps> = ({
  onCallDesk,
  onOpenBooking
}) => {
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Concierge chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Hello! How can I assist with your North Shore residence or scheduling today?',
      timestamp: 'Just now',
    },
    {
      id: '2',
      sender: 'user',
      text: 'Do you offer Saturday morning slots in West Vancouver?',
      timestamp: 'Just now',
    },
    {
      id: '3',
      sender: 'ai',
      text: 'Yes, we maintain dedicated Saturday morning crews across West Vancouver & British Properties. What is your preferred start time?',
      timestamp: 'Just now',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'Are products safe for honed marble?',
    'What is your hourly or visit rate?',
    'How do alarm codes & NDAs work?',
    'Can I get Saturday morning service?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Intelligent automated responses tailored for Bamoo Estate Care
    setTimeout(() => {
      let reply = "I would be delighted to assist with that. Our Estate Director can also confirm bespoke arrangements directly at (604) 988-BAMOO.";
      const lower = query.toLowerCase();

      if (lower.includes('marble') || lower.includes('stone') || lower.includes('quartz')) {
        reply = "Rest assured. We exclusively deploy pH-balanced (7.0 - 7.5), chelating botanical detergents without acids, vinegar, or abrasives. Your Calacatta marble, quartz, and limestone will maintain their pristine honed finish.";
      } else if (lower.includes('rate') || lower.includes('cost') || lower.includes('price')) {
        reply = "Our tailored estate care plans start from $208/visit for recurring maintenance (reflecting our 20% bi-weekly cadence discount) and from $390 for full white-glove Deep Refreshes. You can calculate your exact investment using our interactive builder!";
      } else if (lower.includes('saturday') || lower.includes('weekend')) {
        reply = "Yes! We preserve premium Saturday morning dispatch windows between 8:00 AM and 1:00 PM for residences in West Vancouver, Caulfeild, and British Properties.";
      } else if (lower.includes('nda') || lower.includes('key') || lower.includes('alarm') || lower.includes('security')) {
        reply = "Security is our cornerstone. All crew duos are RCMP background vetted and operate under strict NDAs. We coordinate dual-authenticated alarm arming and digital lockbox key drops seamlessly.";
      } else if (lower.includes('sub-zero') || lower.includes('appliance') || lower.includes('miele')) {
        reply = "Our technicians are certified in scratch-free optical microfiber and steam detailing for Sub-Zero, Miele, Viking, and Gaggenau surfaces without clouding matte finishes.";
      } else if (lower.includes('book') || lower.includes('schedule') || lower.includes('reserve')) {
        reply = "You can lock in your preferred date directly through our Custom Estate Care Plan Builder, or our concierge can reserve an assessment right now.";
      }

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: reply,
        timestamp: 'Just now',
      };

      setChatMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <section id="faq-and-concierge" className="w-full py-16 sm:py-24 bg-white border-t border-[#dce9ff]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Accordion FAQ (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs sm:text-sm text-[#003c90] uppercase tracking-widest font-bold block mb-2">
              Client Inquiries
            </span>
            <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-[#0b1c30] mb-8">
              Frequently Addressed Questions
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#f8f9ff] border border-[#dce9ff] shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-center justify-between font-['Outfit'] font-bold text-base sm:text-lg text-[#0b1c30] focus:outline-none cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#003c90] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-3 pt-3 border-t border-[#eff4ff] text-sm text-[#434653] leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Concierge (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-xl border border-[#dce9ff] flex flex-col h-full justify-between">
              <div>
                {/* Concierge Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#eff4ff]">
                  <div className="w-11 h-11 rounded-full bg-[#003c90] text-white flex items-center justify-center shadow-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-['Outfit'] font-bold text-lg text-[#0b1c30] block leading-tight">
                      Bamoo AI Concierge
                    </span>
                    <span className="text-xs text-[#003c90] font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Instant Response • Active
                    </span>
                  </div>
                </div>

                {/* Chat History Box */}
                <div className="space-y-3 mb-4 max-h-[320px] overflow-y-auto pr-1">
                  {chatMessages.map((msg) => {
                    const isAi = msg.sender === 'ai';
                    return (
                      <div
                        key={msg.id}
                        className={`p-3 rounded-xl text-xs sm:text-sm leading-relaxed max-w-[88%] ${
                          isAi
                            ? 'bg-[#eff4ff] text-[#0b1c30] border border-[#d3e4fe]'
                            : 'bg-[#003c90] text-white ml-auto'
                        }`}
                      >
                        {msg.text}
                      </div>
                    );
                  })}

                  {isTyping && (
                    <div className="p-3 rounded-xl text-xs bg-[#eff4ff] text-[#434653] inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#003c90] animate-spin" />
                      <span>Concierge is reviewing protocols...</span>
                    </div>
                  )}
                </div>

                {/* Quick chip suggestions */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {quickPrompts.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(chip)}
                      className="px-2.5 py-1 rounded-full bg-[#f8f9ff] text-[#244b84] border border-[#dce9ff] text-[11px] font-medium hover:bg-[#e5eeff] transition-colors cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask about materials, rates, or dates..."
                    className="w-full h-11 pl-3.5 pr-11 rounded-xl bg-[#f8f9ff] border border-[#cbd5e1] text-xs sm:text-sm text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#003c90]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-8 h-8 rounded-lg bg-[#003c90] text-white flex items-center justify-center hover:bg-[#0f52ba] transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-3 pt-3 border-t border-[#eff4ff] flex items-center justify-between text-xs text-[#434653]">
                  <span>Or speak to an Estate Director:</span>
                  <button
                    onClick={onCallDesk}
                    className="text-[#003c90] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>(604) 988-2262</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
