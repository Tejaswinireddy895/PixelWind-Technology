import { TESTIMONIALS } from "@/data/testimonials";

function Card({ t }: { t: typeof TESTIMONIALS[0] }) {
  const parts = t.text.split(t.highlight);
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-4 shadow-sm">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {parts[0]}<span className="bg-green-100 text-green-800 rounded px-0.5">{t.highlight}</span>{parts[1]}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{t.name[0]}</div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

function Col({ items, cls }: { items: typeof TESTIMONIALS; cls: string }) {
  return (
    <div className="overflow-hidden flex-1">
      <div className={cls}>{[...items,...items].map((t, i) => <Card key={i} t={t} />)}</div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600 mb-5">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="text-green-500 text-5xl mr-2">&ldquo;</span>What our Clients say
          </h2>
          <p className="text-gray-500 mt-3">See what our clients have to say about us. <span className="text-green-500 text-xl">&rdquo;</span></p>
        </div>
        <div className="flex gap-5 h-[560px] overflow-hidden">
          <Col items={TESTIMONIALS.slice(0,3)} cls="animate-[scrollUp_22s_linear_infinite]" />
          <Col items={TESTIMONIALS.slice(3,6)} cls="animate-[scrollDown_24s_linear_infinite]" />
          <Col items={TESTIMONIALS.slice(6,9)} cls="animate-[scrollUp_28s_linear_infinite]" />
        </div>
      </div>
    </section>
  );
}
