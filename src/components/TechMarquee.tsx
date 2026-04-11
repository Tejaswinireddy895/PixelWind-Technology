import { SiReact, SiNextdotjs, SiFlutter, SiNodedotjs, SiTypescript, SiPython, SiVuedotjs, SiAngular, SiDocker, SiMysql, SiMongodb, SiTailwindcss, SiGraphql, SiRedis, SiKubernetes, SiFirebase, SiGithub } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const ALL = [
  { Icon:SiReact,      name:"React",      color:"#61DAFB" },
  { Icon:SiNextdotjs,  name:"Next.js",    color:"#000" },
  { Icon:SiFlutter,    name:"Flutter",    color:"#54C5F8" },
  { Icon:SiNodedotjs,  name:"Node.js",    color:"#339933" },
  { Icon:SiTypescript, name:"TypeScript", color:"#3178C6" },
  { Icon:SiPython,     name:"Python",     color:"#3776AB" },
  { Icon:SiVuedotjs,   name:"Vue.js",     color:"#4FC08D" },
  { Icon:SiAngular,    name:"Angular",    color:"#DD0031" },
  { Icon:FaAws,         name:"AWS",        color:"#FF9900" },
  { Icon:SiDocker,     name:"Docker",     color:"#2496ED" },
  { Icon:SiMysql,      name:"MySQL",      color:"#4479A1" },
  { Icon:SiMongodb,    name:"MongoDB",    color:"#47A248" },
  { Icon:SiTailwindcss,name:"Tailwind",   color:"#06B6D4" },
  { Icon:SiGraphql,    name:"GraphQL",    color:"#E10098" },
  { Icon:SiRedis,      name:"Redis",      color:"#DC382D" },
  { Icon:SiKubernetes, name:"Kubernetes", color:"#326CE5" },
  { Icon:SiFirebase,   name:"Firebase",   color:"#FFCA28" },
  { Icon:SiGithub,     name:"GitHub",     color:"#181717" },
];

const r1 = ALL.slice(0, 9);
const r2 = ALL.slice(9);

function Pill({ Icon, name, color }: { Icon: React.ElementType; name: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-brand transition-all cursor-default whitespace-nowrap">
      <Icon size={22} style={{ color }} />
      <span className="text-sm font-semibold text-gray-700">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Our Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Technologies That: <span className="text-green-600">Drive Speed,<br />Scale, and Innovation</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
          Our stack covers cutting-edge frontend frameworks, robust backend systems, cloud platforms, and AI-driven tools.
        </p>
      </div>
      <div className="overflow-hidden mb-4">
        <div className="flex gap-4 w-max animate-[scrollLeftF_30s_linear_infinite]">
          {[...r1,...r1,...r1].map((t, i) => <Pill key={i} {...t} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 w-max animate-[scrollLeftR_30s_linear_infinite]">
          {[...r2,...r2,...r2].map((t, i) => <Pill key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}
