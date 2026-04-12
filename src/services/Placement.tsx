import { SiGithub, SiNotion, SiZoom, SiHubspot, SiSlack, SiTrello } from "react-icons/si";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { GraduationCap, Briefcase, HeartPulse, Globe, Banknote, Factory, ShoppingBag, Truck } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function Placement() {
  return (
    <ServiceTemplate
      title="Placement Assistance"
      subtitle="Dedicated, hands-on support to help you land the right role — from resume crafting and mock interviews to direct employer connections."
      tags={["RESUME BUILDING","MOCK INTERVIEWS","JOB REFERRALS","CAREER COUNSELLING","LINKEDIN","PORTFOLIO","OFFER NEGOTIATION"]}
      statsTitle="Our Placement Impact"
      stats={[{ value:"200+", label:"Candidates Placed" },{ value:"50+", label:"Hiring Partners" },{ value:"30", label:"Avg. Days to Placement" }]}
      featuresTitle="Your Career Launch, Fully Supported"
      featuresSubtitle="We do not just train you — we stand by you until you are hired. Our placement team works tirelessly to connect you with the right employers."
      features={[
        { title:"Resume & LinkedIn Makeover", description:"ATS-optimized resumes and LinkedIn profiles crafted by HR professionals to get you noticed by top recruiters." },
        { title:"Mock Interview Rounds",      description:"Technical and HR mock interviews with detailed feedback — so your first real interview is not your first attempt." },
        { title:"Direct Employer Referrals",  description:"Access to our network of 50+ hiring partner companies with direct referrals and priority screening." },
        { title:"Job Fair Participation",     description:"Regular placement drives and job fairs where you meet multiple employers in a single day." },
        { title:"Offer Negotiation Support",  description:"Our counsellors help you evaluate, compare, and negotiate offers to maximize your starting compensation." },
      ]}
      industries={[
        { icon:<GraduationCap size={20}/>, title:"Fresh Graduates" },
        { icon:<Briefcase size={20}/>,     title:"IT Services" },
        { icon:<Banknote size={20}/>,      title:"BFSI" },
        { icon:<HeartPulse size={20}/>,    title:"Healthcare" },
        { icon:<Factory size={20}/>,       title:"Manufacturing" },
        { icon:<ShoppingBag size={20}/>,   title:"E-commerce" },
        { icon:<Globe size={20}/>,         title:"Consulting" },
        { icon:<Truck size={20}/>,         title:"Logistics" },
      ]}
      techTitle="Our Placement Tools"
      techDesc="We equip every candidate with the tools and access they need to land the right job."
      techStack={[
        { icon:<FaLinkedin size={28} color="#0A66C2"/>,        name:"LinkedIn" },
        { icon:<SiGithub size={28}/>,                            name:"GitHub" },
        { icon:<SiNotion size={28}/>,                            name:"Notion" },
        { icon:<SiZoom size={28} color="#2D8CFF"/>,              name:"Zoom" },
        { icon:<FaGoogle size={28} color="#4285F4"/>,          name:"Google Workspace" },
        { icon:<SiHubspot size={28} color="#FF7A59"/>,           name:"HubSpot" },
        { icon:<SiSlack size={28} color="#4A154B"/>,             name:"Slack" },
        { icon:<SiTrello size={28} color="#0052CC"/>,            name:"Trello" },
      ]}
    />
  );
}
