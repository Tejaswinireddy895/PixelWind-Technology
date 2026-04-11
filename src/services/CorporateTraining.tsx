"use client";
import { SiZoom, SiSlack, SiNotion, SiTrello, SiAsana } from "react-icons/si";
import { FaGoogle, FaMicrosoft, FaStickyNote } from "react-icons/fa";
import { Briefcase, Users, TrendingUp, Globe, Factory, HeartPulse, ShoppingBag, Banknote } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function CorporateTraining() {
  return (
    <ServiceTemplate
      title="Corporate Training Programs"
      subtitle="Empower your workforce with customized training solutions designed for enterprise success. We build skills that directly impact your bottom line."
      tags={["LEADERSHIP","AGILE","COMMUNICATION","TECHNICAL","SOFT SKILLS","CUSTOM MODULES","ON-SITE","VIRTUAL"]}
      statsTitle="Our Corporate Training Impact"
      stats={[{ value:"200+", label:"Companies Served" },{ value:"95%", label:"Satisfaction Rate" },{ value:"100+", label:"Programs Delivered" }]}
      featuresTitle="Training That Transforms Your Workforce"
      featuresSubtitle="We design and deliver corporate training programs that are measurable, scalable, and aligned with your organization's strategic goals."
      features={[
        { title:"Custom Curriculum Design",  description:"Training content built specifically around your team's skill gaps, business goals, and company culture." },
        { title:"On-Site & Virtual Delivery",description:"Flexible delivery models to suit remote, hybrid, or on-premise workforces at any scale." },
        { title:"Measurable ROI",            description:"Clear KPIs and post-training assessments to demonstrate the business impact of every program." },
        { title:"Scalable Programs",         description:"From small teams to enterprise-wide rollouts of 1000+ employees — our programs scale effortlessly." },
        { title:"Ongoing Support",           description:"Post-training coaching, refresher sessions, and performance tracking to reinforce learning over time." },
      ]}
      industries={[
        { icon:<Briefcase size={20}/>,   title:"IT & Software" },
        { icon:<Banknote size={20}/>,    title:"BFSI" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<ShoppingBag size={20}/>, title:"Retail" },
        { icon:<Globe size={20}/>,       title:"Consulting" },
        { icon:<TrendingUp size={20}/>,  title:"FMCG" },
        { icon:<Users size={20}/>,       title:"HR Services" },
      ]}
      techTitle="Tools We Use for Delivery"
      techDesc="We leverage leading collaboration and learning platforms for seamless training delivery."
      techStack={[
        { icon:<FaMicrosoft size={28} color="#6264A7"/>,   name:"MS Teams" },
        { icon:<SiZoom size={28} color="#2D8CFF"/>,         name:"Zoom" },
        { icon:<SiSlack size={28} color="#4A154B"/>,        name:"Slack" },
        { icon:<SiNotion size={28}/>,                       name:"Notion" },
        { icon:<SiTrello size={28} color="#0052CC"/>,       name:"Trello" },
        { icon:<SiAsana size={28} color="#F06A6A"/>,        name:"Asana" },
        { icon:<FaGoogle size={28} color="#4285F4"/>,      name:"Google Workspace" },
        { icon:<FaStickyNote size={28} color="#7719AA"/>,  name:"OneNote" },
      ]}
    />
  );
}
