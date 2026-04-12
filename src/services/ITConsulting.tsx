import { SiGooglecloud, SiJira, SiConfluence, SiSalesforce } from "react-icons/si";
import { FaAws, FaMicrosoft, FaChartBar, FaChartLine } from "react-icons/fa";
import { Lightbulb, Shield, BarChart, Globe, Factory, HeartPulse, Banknote, ShoppingBag } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function ITConsulting() {
  return (
    <ServiceTemplate
      title="IT Consulting Services"
      subtitle="Strategic technology guidance to modernize your systems, optimize operations, and achieve competitive advantage in a digital-first world."
      tags={["DIGITAL TRANSFORMATION","ARCHITECTURE","STRATEGY","AUDIT","SECURITY","CLOUD ADVISORY","ROADMAP","CTO-as-a-SERVICE"]}
      statsTitle="Our Consulting Impact"
      stats={[{ value:"30+", label:"Enterprises Advised" },{ value:"40%", label:"Avg Efficiency Gain" },{ value:"15+", label:"Years Combined Exp." }]}
      featuresTitle="Technology Strategy That Moves Business Forward"
      featuresSubtitle="Our consultants bring deep technical expertise and business acumen to deliver recommendations that are practical, measurable, and aligned with your goals."
      features={[
        { title:"IT Strategy & Roadmap",       description:"A clear, phased technology roadmap aligned with your 3-5 year business objectives and budget constraints." },
        { title:"Digital Transformation",      description:"End-to-end transformation programs — from legacy modernization to cloud-native architecture adoption." },
        { title:"Security & Compliance Audit", description:"Comprehensive vulnerability assessments and compliance reviews for ISO, GDPR, HIPAA, and SOC 2." },
        { title:"Architecture Review",         description:"Independent assessment of your current systems with concrete recommendations for scalability and reliability." },
        { title:"CTO-as-a-Service",            description:"Fractional CTO support for startups and SMEs — technical leadership without the full-time overhead." },
      ]}
      industries={[
        { icon:<Lightbulb size={20}/>,   title:"Startups" },
        { icon:<Banknote size={20}/>,    title:"BFSI" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<ShoppingBag size={20}/>, title:"Retail" },
        { icon:<Globe size={20}/>,       title:"Government" },
        { icon:<Shield size={20}/>,      title:"Cybersecurity" },
        { icon:<BarChart size={20}/>,    title:"Analytics" },
      ]}
      techTitle="Our Consulting Tool Stack"
      techDesc="We use enterprise-grade platforms to deliver strategic technology advisory services."
      techStack={[
        { icon:<FaAws size={28} color="#FF9900"/>,             name:"AWS" },
        { icon:<FaMicrosoft size={28} color="#0078D4"/>,       name:"Azure" },
        { icon:<SiGooglecloud size={28} color="#4285F4"/>,     name:"GCP" },
        { icon:<SiJira size={28} color="#0052CC"/>,            name:"Jira" },
        { icon:<SiConfluence size={28} color="#172B4D"/>,      name:"Confluence" },
        { icon:<SiSalesforce size={28} color="#00A1E0"/>,      name:"Salesforce" },
        { icon:<FaChartBar size={28} color="#E97627"/>,        name:"Tableau" },
        { icon:<FaChartLine size={28} color="#F2C811"/>,       name:"Power BI" },
      ]}
    />
  );
}
