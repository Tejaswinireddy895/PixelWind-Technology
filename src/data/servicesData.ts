export interface ServiceItem {
  id: string; title: string; desc: string; href: string; emoji: string;
}

export const CORE_SERVICES: ServiceItem[] = [
  { id: "it-training",       emoji: "🖥️", title: "IT Training & Skill Development",    desc: "Industry-aligned tech training that builds job-ready professionals.", href: "/it-training" },
  { id: "corporate-training",emoji: "🏢", title: "Corporate Training Programs",         desc: "Customized upskilling solutions for enterprise teams.",              href: "/corporate-training" },
  { id: "staffing",          emoji: "👔", title: "Technical & Non-Technical Staffing",  desc: "End-to-end recruitment and placement services.",                    href: "/staffing" },
  { id: "placement",         emoji: "🤝", title: "Placement Assistance",               desc: "Dedicated support to place candidates in the right roles.",         href: "/placement" },
];

export const TECH_SERVICES: ServiceItem[] = [
  { id: "web-development",   emoji: "🌐", title: "Web Development",    desc: "Modern, fast, and scalable web applications.",          href: "/web-development" },
  { id: "app-development",   emoji: "📱", title: "App Development",    desc: "Cross-platform mobile apps for iOS and Android.",       href: "/app-development" },
  { id: "ui-ux-design",      emoji: "🎨", title: "UI/UX Design",       desc: "User-centered design that converts visitors.",           href: "/ui-ux-design" },
  { id: "cloud-devops",      emoji: "☁️", title: "Cloud & DevOps",     desc: "Scalable cloud infrastructure and CI/CD pipelines.",    href: "/cloud-devops" },
  { id: "digital-marketing", emoji: "📣", title: "Digital Marketing",  desc: "SEO, social media & paid campaigns that drive growth.", href: "/digital-marketing" },
  { id: "it-consulting",     emoji: "🔧", title: "IT Consulting",       desc: "Strategic technology guidance for your business.",      href: "/it-consulting" },
  { id: "blockchain",        emoji: "⛓️", title: "Blockchain",          desc: "Decentralized apps and smart contract development.",    href: "/blockchain" },
];

export const AI_SERVICES: ServiceItem[] = [
  { id: "geneai",                 emoji: "🧬", title: "Generative AI",       desc: "Unlock personalized insights and automation through AI-driven solutions.",       href: "/geneai" },
  { id: "machine-learning",       emoji: "🤖", title: "Machine Learning",    desc: "Predict outcomes and automate decisions with intelligent ML programs.",          href: "/machine-learning" },
  { id: "datascience-analytics",  emoji: "📊", title: "Data Science & Analytics", desc: "Make informed decisions using data visualization and real-world insights.", href: "/datascience-analytics" },
  { id: "business-intelligence",  emoji: "💼", title: "Business Intelligence", desc: "Transform raw knowledge into actionable strategies with BI tools.",          href: "/business-intelligence" },
];
