import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface IndustryItem {
  icon: ReactNode;
  title: string;
}

export interface TechItem {
  icon: ReactNode;
  name: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceTemplateProps {
  badge?: string;
  title: string;
  subtitle: string;
  tags: string[];
  statsTitle: string;
  stats: StatItem[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];
  industriesTitle?: string;
  industries: IndustryItem[];
  techTitle: string;
  techDesc: string;
  techStack: TechItem[];
}

export default function ServiceTemplate({
  badge = "Our service",
  title,
  subtitle,
  tags,
  statsTitle,
  stats,
  featuresTitle,
  featuresSubtitle,
  features,
  industriesTitle = "Industries We Cater To with Our Advanced Product",
  industries,
  techTitle,
  techDesc,
  techStack,
}: ServiceTemplateProps) {
  const row1 = techStack.slice(0, 6);
  const row2 = techStack.slice(6);

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <header className="text-black py-12 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          <section className="relative z-10 bg-white py-8 max-w-2xl">
            <span className="text-xs bg-gray-100 rounded px-2 py-1 inline-block w-fit font-medium text-gray-600">
              {badge}
            </span>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-4 text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-base text-neutral-500 mt-4 leading-relaxed">
              {subtitle}
            </p>
            <ul className="flex flex-wrap gap-3 mt-8">
              {tags.map((label) => (
                <li key={label} className="px-4 py-2 bg-gray-100 hover:bg-brand-light hover:text-brand rounded-full text-xs font-semibold text-gray-600 cursor-default transition-all">
                  {label}
                </li>
              ))}
            </ul>
          </section>
        </header>

        {/* ── STATS ────────────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">{statsTitle}</h2>
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <article key={i} className="bg-gray-50 p-8 rounded-[1.75rem] text-left border border-gray-100 hover:border-brand hover:shadow-lg transition-all">
                <h3 className="text-[2.25rem] font-extrabold text-gray-900">{s.value}</h3>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────── */}
        <section className="px-6 py-12 md:px-20 bg-white max-w-7xl mx-auto">
          <header className="flex flex-col gap-y-3 mb-10">
            <span className="text-xs bg-gray-100 rounded px-2 py-1 w-fit font-medium text-gray-600">
              Our Features
            </span>
            <h2 className="font-bold text-2xl md:text-4xl text-gray-900">{featuresTitle}</h2>
            <p className="text-base text-neutral-500 max-w-2xl leading-relaxed">{featuresSubtitle}</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-gray-100 text-left min-h-[220px] relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span
                  className="absolute -bottom-8 -right-4 text-[12rem] font-black leading-none select-none pointer-events-none"
                  style={{
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(107deg, rgba(0,0,0,0.05) 14%, rgba(0,0,0,0.03) 88%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {index + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── INDUSTRIES ───────────────────────────────────────────── */}
        <section className="w-full py-16 bg-gray-950">
          <div className="px-6 md:px-20 mx-auto max-w-7xl">
            <h2 className="font-bold text-2xl md:text-4xl text-white max-w-lg mb-3">
              {industriesTitle}
            </h2>
            <p className="text-white/60 max-w-xl text-sm mb-10">
              We serve multiple industries by building scalable and innovative digital solutions.
            </p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px px-6 md:px-20 max-w-7xl mx-auto bg-white/5 rounded-2xl overflow-hidden">
            {industries.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-950 hover:bg-gray-800 transition-all cursor-default"
              >
                <div className="text-white/70">{item.icon}</div>
                <p className="text-xs text-white/70 text-center font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────────── */}
        <section className="px-6 py-16 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3 mb-12">
              <span className="text-xs bg-gray-100 rounded px-2 py-1 font-medium text-gray-600">
                Tech Stack
              </span>
              <h2 className="font-bold text-2xl md:text-4xl text-gray-900">{techTitle}</h2>
              <p className="text-base text-neutral-500 max-w-2xl">{techDesc}</p>
            </div>

            <div className="flex flex-col items-center gap-10">
              {row1.length > 0 && (
                <div className={`grid gap-10`} style={{ gridTemplateColumns: `repeat(${Math.min(row1.length, 6)}, minmax(0,1fr))` }}>
                  {row1.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                      <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-brand group-hover:shadow-lg group-hover:shadow-brand/10 transition-all">
                        {item.icon}
                      </div>
                      <p className="text-xs font-semibold text-gray-600 group-hover:text-brand transition-colors">{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
              {row2.length > 0 && (
                <div className={`grid gap-10`} style={{ gridTemplateColumns: `repeat(${Math.min(row2.length, 4)}, minmax(0,1fr))` }}>
                  {row2.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                      <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-brand group-hover:shadow-lg group-hover:shadow-brand/10 transition-all">
                        {item.icon}
                      </div>
                      <p className="text-xs font-semibold text-gray-600 group-hover:text-brand transition-colors">{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
