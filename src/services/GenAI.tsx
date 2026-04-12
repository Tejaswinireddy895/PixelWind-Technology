import { SiOpenai, SiPython, SiTensorflow, SiPytorch, SiHuggingface, SiLangchain, SiFastapi, SiDocker } from "react-icons/si";
import { BrainCircuit, Sparkles, MessageSquare, Image, FileText, Globe, HeartPulse, Briefcase } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function GenAI() {
  return (
    <ServiceTemplate
      badge="AI Services"
      title="Generative AI Solutions"
      subtitle="Unlock personalized insights and automation through AI-driven solutions. We build LLM-powered products that transform how your business creates, communicates, and decides."
      tags={["LLM","CHATBOTS","RAG","FINE-TUNING","AGENTS","CONTENT GENERATION","AUTOMATION","OPENAI","LANGCHAIN"]}
      statsTitle="Our Generative AI Impact"
      stats={[{ value:"25+", label:"AI Products Built" },{ value:"80%", label:"Automation Rate" },{ value:"10×", label:"Productivity Gain" }]}
      featuresTitle="Harness the Power of Generative AI"
      featuresSubtitle="We design and build production-grade GenAI solutions — from intelligent chatbots to automated content engines — tailored to your specific business needs."
      features={[
        { title:"Custom LLM Integration",      description:"Connect GPT-4, Claude, Gemini, or open-source LLMs to your existing systems for intelligent automation." },
        { title:"RAG Systems",                 description:"Retrieval-Augmented Generation — let AI answer questions from your own documents, databases, and knowledge bases." },
        { title:"AI Chatbots & Agents",        description:"Intelligent conversational agents that handle customer support, lead qualification, and internal workflows 24/7." },
        { title:"Content Generation Pipelines",description:"Automated blog posts, marketing copy, product descriptions, and reports generated at scale with human-quality output." },
        { title:"Fine-Tuning & Model Training", description:"Custom fine-tuned models trained on your domain data for highly specialized, accurate outputs." },
      ]}
      industries={[
        { icon:<Briefcase size={20}/>,       title:"Enterprise" },
        { icon:<HeartPulse size={20}/>,      title:"Healthcare" },
        { icon:<MessageSquare size={20}/>,   title:"Customer Support" },
        { icon:<FileText size={20}/>,        title:"Legal & Finance" },
        { icon:<Sparkles size={20}/>,        title:"Marketing" },
        { icon:<Image size={20}/>,           title:"Creative" },
        { icon:<Globe size={20}/>,           title:"E-commerce" },
        { icon:<BrainCircuit size={20}/>,    title:"Research" },
      ]}
      techTitle="Our Generative AI Tech Stack"
      techDesc="We use the latest AI frameworks and APIs to build reliable, production-ready generative AI solutions."
      techStack={[
        { icon:<SiOpenai size={28}/>,                       name:"OpenAI GPT" },
        { icon:<SiPython size={28} color="#3776AB"/>,       name:"Python" },
        { icon:<SiLangchain size={28} color="#1C3C3C"/>,    name:"LangChain" },
        { icon:<SiHuggingface size={28} color="#FFD21E"/>,  name:"HuggingFace" },
        { icon:<SiTensorflow size={28} color="#FF6F00"/>,   name:"TensorFlow" },
        { icon:<SiPytorch size={28} color="#EE4C2C"/>,      name:"PyTorch" },
        { icon:<SiFastapi size={28} color="#009688"/>,      name:"FastAPI" },
        { icon:<SiDocker size={28} color="#2496ED"/>,       name:"Docker" },
      ]}
    />
  );
}
