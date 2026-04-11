const clients = ["Acharya N University","Tirupati Corp","Govt of AP","Health Care","APEITA","APITA","Skill AP","APNRTS","CGI","Virtusa","Conduent","FinMon 360"];

export default function TrustSection() {
  return (
    <section className="bg-white py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-8">
          <span className="text-xl">⭐</span>
          <span className="font-bold text-amber-700 text-lg">4.9 Rating</span>
          <span className="text-gray-300 mx-2">|</span>
          <span className="text-gray-600 text-sm font-medium">Trusted by 50+ Organizations</span>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex gap-8 w-max animate-[scrollLeft_28s_linear_infinite]">
            {[...clients,...clients].map((c, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-600 hover:border-brand hover:text-brand transition-all min-w-[140px] text-center">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
