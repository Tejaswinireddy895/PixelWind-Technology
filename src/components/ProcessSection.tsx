const PROCESS = [
  { num:"01", title:"Choose a Program",       desc:"Select from our wide range of IT, corporate, or career programs tailored to your goals." },
  { num:"02", title:"Submit Requirements",    desc:"Share your current skills, career objectives, and schedule preferences with our counselors." },
  { num:"03", title:"Training & Mentorship",  desc:"Attend sessions, work on live projects, and receive personalized guidance throughout." },
  { num:"04", title:"Placement & Growth",     desc:"Get placed with our network of 50+ partner companies and receive post-placement support." },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">How We Work With You</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((p, i) => (
            <div key={i} className="relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-brand hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white font-black text-sm mb-5 shadow-md shadow-brand/30">{p.num}</div>
              {i < 3 && <div className="hidden lg:block absolute top-12 -right-3 text-gray-300 text-2xl font-bold z-10">→</div>}
              <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
