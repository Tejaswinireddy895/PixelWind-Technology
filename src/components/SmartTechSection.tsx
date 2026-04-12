import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const AI_CARDS = [
  {
    href: "/geneai",
    emoji: "🧬",
    emojiLabel: "DNA strand",
    title: "Generative AI",
    desc: "Unlock personalized insights and automation through AI-driven learning solutions.",
    color: "hover:border-purple-300 hover:shadow-purple-100",
  },
  {
    href: "/machine-learning",
    emoji: "🤖",
    emojiLabel: "Robot",
    title: "Machine Learning",
    desc: "Predict outcomes and automate decisions with intelligent ML training programs.",
    color: "hover:border-blue-300 hover:shadow-blue-100",
  },
  {
    href: "/datascience-analytics",
    emoji: "📊",
    emojiLabel: "Bar chart",
    title: "Data Science & Analytics",
    desc: "Make informed career decisions using data visualization and real-world insights.",
    color: "hover:border-green-300 hover:shadow-green-100",
  },
  {
    href: "/business-intelligence",
    emoji: "💼",
    emojiLabel: "Briefcase",
    title: "Business Intelligence",
    desc: "Transform raw knowledge into actionable career strategies with BI tools.",
    color: "hover:border-amber-300 hover:shadow-amber-100",
  },
];

export default function SmartTechSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Smart Tech</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              We Transform Talent with Technologies That Beat Industry Timelines
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We craft and enhance training programs using AI, ML, and Data Science to deliver speed, insight, and innovation for every learner.
            </p>
            <Link href="/geneai" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all">
              Explore AI Services <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Right — 2×2 grid of clickable cards */}
          <div className="grid grid-cols-2 gap-4">
            {AI_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group ${card.color}`}
              >
                <div className="text-3xl mb-3" role="img" aria-label={card.emojiLabel}>{card.emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-brand transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                <div className="flex items-center gap-1 text-brand text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <FiArrowRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
