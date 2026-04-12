import { SiIndeed, SiGlassdoor, SiSalesforce, SiZoho, SiHubspot, SiSlack, SiNotion } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { UserCheck, Briefcase, Factory, HeartPulse, Globe, Banknote, ShoppingBag, Truck } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function Staffing() {
  return (
    <ServiceTemplate
      title="Technical & Non-Technical Staffing"
      subtitle="End-to-end recruitment and placement services connecting top talent with the right opportunities — fast, accurately, and at scale."
      tags={["RECRUITMENT","SCREENING","BACKGROUND CHECK","CONTRACT","PERMANENT","EXECUTIVE","BULK HIRING","REMOTE"]}
      statsTitle="Our Staffing Impact"
      stats={[{ value:"200+", label:"Placements Made" },{ value:"48hr", label:"Avg. Time to Shortlist" },{ value:"92%", label:"Retention Rate" }]}
      featuresTitle="The Right Talent, Right on Time"
      featuresSubtitle="Our staffing solutions go beyond resumes — we match culture, skills, and ambition to ensure every placement drives long-term success."
      features={[
        { title:"End-to-End Recruitment",    description:"From job description to offer letter — we own the entire hiring pipeline so your team can focus on the business." },
        { title:"Rigorous Pre-Screening",    description:"Multi-round technical and behavioral assessments to ensure only the most qualified candidates reach your desk." },
        { title:"Contract & Permanent Hiring",description:"Flexible engagement models — short-term contracts, project-based staffing, or full-time permanent placements." },
        { title:"Background Verification",  description:"Comprehensive background checks covering employment history, education, and reference validation." },
        { title:"Post-Placement Support",   description:"30/60/90-day check-ins to ensure smooth onboarding and address any concerns proactively." },
      ]}
      industries={[
        { icon:<Briefcase size={20}/>,   title:"IT Services" },
        { icon:<Banknote size={20}/>,    title:"BFSI" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<ShoppingBag size={20}/>, title:"Retail" },
        { icon:<Globe size={20}/>,       title:"Consulting" },
        { icon:<Truck size={20}/>,       title:"Logistics" },
        { icon:<UserCheck size={20}/>,   title:"HR Services" },
      ]}
      techTitle="Our Recruitment Tools"
      techDesc="We use industry-leading ATS and sourcing platforms to find the best talent fast."
      techStack={[
        { icon:<FaLinkedin size={28} color="#0A66C2"/>,   name:"LinkedIn" },
        { icon:<SiIndeed size={28} color="#003A9B"/>,     name:"Indeed" },
        { icon:<SiGlassdoor size={28} color="#0CAA41"/>,  name:"Glassdoor" },
        { icon:<SiSalesforce size={28} color="#00A1E0"/>, name:"Salesforce" },
        { icon:<SiZoho size={28} color="#C8202F"/>,       name:"Zoho Recruit" },
        { icon:<SiHubspot size={28} color="#FF7A59"/>,    name:"HubSpot" },
        { icon:<SiSlack size={28} color="#4A154B"/>,      name:"Slack" },
        { icon:<SiNotion size={28}/>,                     name:"Notion" },
      ]}
    />
  );
}
