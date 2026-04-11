"use client";
import { useCountUp } from "@/hooks/useCountUp";
import { useIntersection } from "@/hooks/useIntersection";
import { STATS } from "@/data/stats";

function StatCard({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);
  return (
    <div className="text-center py-12 px-6 border-r border-b border-gray-100 last:border-r-0">
      <p className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">{count}{stat.suffix}</p>
      <p className="text-gray-500 text-sm font-medium mt-3">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [ref, visible] = useIntersection(0.3);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600 mb-5">Statistics</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Impact by the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 border border-gray-100 rounded-3xl overflow-hidden">
          {STATS.map((stat, i) => <StatCard key={i} stat={stat} started={visible} />)}
        </div>
      </div>
    </section>
  );
}
