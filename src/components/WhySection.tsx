import { BsShieldCheck, BsGraphUp, BsPeopleFill } from "react-icons/bs";
import { FiTarget, FiGlobe, FiAward } from "react-icons/fi";

const WHY = [
  { Icon: BsShieldCheck, color:"text-blue-600 bg-blue-50",   title:"ISO 9001:2015 Certified",  desc:"Quality-assured training programs meeting global standards for consistency and excellence." },
  { Icon: FiTarget,      color:"text-green-600 bg-green-50", title:"Customized Solutions",      desc:"No one-size-fits-all. Every program is tailored to your goals, industry, and timeline." },
  { Icon: BsGraphUp,     color:"text-amber-600 bg-amber-50", title:"Agile & Fast Delivery",     desc:"Our agile approach ensures rapid deployment without compromising quality outcomes." },
  { Icon: BsPeopleFill,  color:"text-purple-600 bg-purple-50",title:"Industry Partnerships",    desc:"We connect learners directly with top employers for real placement opportunities." },
  { Icon: FiAward,       color:"text-rose-600 bg-rose-50",   title:"Proven Track Record",       desc:"Founded in 2021, hundreds of successful placements across diverse industries." },
  { Icon: FiGlobe,       color:"text-cyan-600 bg-cyan-50",   title:"360° Career Support",       desc:"Pre-training, during, and post-placement — we are with you every step of the way." },
];

export default function WhySection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Why Pixelwind</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight">
            Our Promise: Innovation, Expertise &amp; Lasting Partnerships
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            We blend industry expertise with a commitment to your career success, delivering results that make a real difference.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map(({ Icon, color, title, desc }, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}><Icon size={22} /></div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
