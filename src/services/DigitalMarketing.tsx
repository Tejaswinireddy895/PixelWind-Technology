import { SiGoogleads, SiGoogleanalytics, SiMailchimp, SiHubspot, SiMeta, SiSemrush, SiWordpress, SiCanva } from "react-icons/si";
import { TrendingUp, Globe, ShoppingBag, UsersRound, Megaphone, Mail, Search, BarChart } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function DigitalMarketing() {
  return (
    <ServiceTemplate
      title="Digital Marketing Services"
      subtitle="Data-driven digital marketing that grows your brand, drives traffic, and converts visitors into loyal customers."
      tags={["SEO","SEM","SOCIAL MEDIA","CONTENT","EMAIL","PPC","ANALYTICS","BRANDING"]}
      statsTitle="Our Marketing Impact"
      stats={[{ value:"3×", label:"Average ROI Delivered" },{ value:"80+", label:"Campaigns Managed" },{ value:"500K+", label:"Leads Generated" }]}
      featuresTitle="Marketing That Drives Real Business Results"
      featuresSubtitle="From search engine dominance to viral social content, our digital marketing strategies are built to grow your business at every stage."
      features={[
        { title:"Search Engine Optimization", description:"Technical SEO, on-page optimization, and link-building strategies that rank you on page one of Google." },
        { title:"Paid Advertising (PPC)",     description:"High-ROI Google Ads and social media campaigns managed by certified specialists to maximize every rupee." },
        { title:"Social Media Marketing",     description:"Platform-specific content strategies for Instagram, LinkedIn, Facebook, and Twitter that build communities." },
        { title:"Content Marketing",          description:"Blog posts, videos, and infographics that position your brand as an industry authority and drive organic traffic." },
        { title:"Analytics & Reporting",      description:"Transparent, data-rich reports every month so you know exactly what is working and where to scale." },
      ]}
      industries={[
        { icon:<ShoppingBag size={20}/>,  title:"E-commerce" },
        { icon:<Globe size={20}/>,        title:"SaaS" },
        { icon:<TrendingUp size={20}/>,   title:"FinTech" },
        { icon:<UsersRound size={20}/>,   title:"Education" },
        { icon:<Megaphone size={20}/>,    title:"Retail" },
        { icon:<Mail size={20}/>,         title:"B2B Services" },
        { icon:<Search size={20}/>,       title:"Healthcare" },
        { icon:<BarChart size={20}/>,     title:"Real Estate" },
      ]}
      techTitle="Our Marketing Tool Stack"
      techDesc="We use best-in-class marketing tools to drive measurable growth for your business."
      techStack={[
        { icon:<SiGoogleads size={28} color="#4285F4"/>,      name:"Google Ads" },
        { icon:<SiGoogleanalytics size={28} color="#E37400"/>,name:"GA4" },
        { icon:<SiMeta size={28} color="#0082FB"/>,           name:"Meta Ads" },
        { icon:<SiSemrush size={28} color="#FF642D"/>,        name:"SEMrush" },
        { icon:<SiMailchimp size={28} color="#FFE01B"/>,      name:"Mailchimp" },
        { icon:<SiHubspot size={28} color="#FF7A59"/>,        name:"HubSpot" },
        { icon:<SiWordpress size={28} color="#21759B"/>,      name:"WordPress" },
        { icon:<SiCanva size={28} color="#00C4CC"/>,          name:"Canva" },
      ]}
    />
  );
}
