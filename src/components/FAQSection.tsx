"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQS = [
  { q:"What services does Pixelwind Technologies offer?",     a:"We offer IT training, corporate training, staffing, placement, web/app development, digital marketing, cloud & DevOps, IT consulting, and AI/data services." },
  { q:"Are your programs suitable for beginners?",            a:"Absolutely! We have programs for all levels — from complete beginners to experienced professionals looking to upskill or transition." },
  { q:"How long does a typical training program last?",       a:"Programs range from 4 weeks to 6 months depending on the course. We also offer weekend and fast-track batches for working professionals." },
  { q:"Do you provide placement assistance?",                 a:"Yes! We offer dedicated support including resume building, mock interviews, and direct referrals to our 50+ hiring partners." },
  { q:"Is Pixelwind Technologies certified?",                 a:"Yes, we are ISO 9001:2015 certified, ensuring that our training quality meets international standards." },
  { q:"Can you design a custom training program for our company?", a:"Absolutely. Our corporate training division builds custom curriculum tailored to your team's skill gaps and business objectives." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">FAQs</span>
          <h2 className="text-4xl font-extrabold text-gray-900">Have Questions? We Have Answers.</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-100 transition-all">
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <span className="text-brand flex-shrink-0">{open === i ? <FiMinus size={18}/> : <FiPlus size={18}/>}</span>
              </button>
              {open === i && <div className="px-6 pb-5"><p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
